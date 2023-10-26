import { transform } from '@babel/standalone'

import { ENTRY_FILE_NAME } from '../../files'
import { Files, File } from '../../types'

const getModuleFile = (files: Files, moduleName: string) => {
  let _moduleName = moduleName.split('./').pop() || ''
  if (!_moduleName.includes('.')) {
    _moduleName += '.jsx'
  }
  return files[_moduleName]
}

const transformJson = (file: File) => {
  const js = `export default {${file.value}}`
  return URL.createObjectURL(new Blob([js], { type: 'application/javascript' }))
}

const transformCss = (file: File) => {
  const randomId = new Date().getTime()
  const js = `
                  (() => {
                    let stylesheet = document.getElementById('style_${randomId}_${file.name}');
                    if (!stylesheet) {
                      stylesheet = document.createElement('style')
                      stylesheet.setAttribute('id', 'style_${randomId}_${file.name}')
                      document.head.appendChild(stylesheet)
                    }
                    const styles = document.createTextNode(\`${file.value}\`)
                    stylesheet.innerHTML = ''
                    stylesheet.appendChild(styles)
                  })()
                  `
  return URL.createObjectURL(new Blob([js], { type: 'application/javascript' }))
}

const babelTransform = (filename: string, code: string, files: Files) => {
  let _code = code
  // 如果没有引入React，开头添加React引用
  const regexReact = /import\s+React/g
  if (filename.endsWith('.jsx') && !regexReact.test(code)) {
    _code = `import React from 'react';\n${code}`
  }

  return transform(_code, {
    presets: ['react'],
    filename,
    plugins: [customResolver(files)]
  }).code!
}

const customResolver = (files: Files) => {
  return {
    visitor: {
      ImportDeclaration(path: any) {
        const moduleName: string = path.node.source.value
        if (moduleName.startsWith('.')) {
          const module = getModuleFile(files, moduleName)
          if (!module) return
          if (module.name.endsWith('.css')) {
            path.node.source.value = transformCss(module)
          } else if (module.name.endsWith('.json')) {
            path.node.source.value = transformJson(module)
          } else {
            path.node.source.value = URL.createObjectURL(
              new Blob([babelTransform(module.name, module.value, files)], {
                type: 'application/javascript'
              })
            )
          }
        }
      }
    }
  }
}

const compile = (files: Files) => {
  const main = files[ENTRY_FILE_NAME]
  const compileCode = babelTransform(ENTRY_FILE_NAME, main.value, files)
  return { compileCode }
}

self.addEventListener('message', async ({ data }) => {
  if (typeof data === 'string') {
    self.postMessage({
      type: 'UPDATE_FILE',
      data: transform(data, {
        presets: ['react'],
        retainLines: true
      }).code
    })
    return
  }
  try {
    self.postMessage({
      type: 'UPDATE_FILES',
      data: compile(data)
    })
  } catch (e) {
    self.postMessage({ type: 'ERROR', error: e })
  }
})
