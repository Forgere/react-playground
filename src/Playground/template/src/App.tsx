import { useState } from 'react'
import './App.css'
import { Scene, Model }  from 'fiber-screen-kit'

function App() {
  const [count, setCount] = useState(0)

  const host = location.host || 'localhost:5173'

  return (
    <>
      <Scene envOptions={{
        files: `http://${host}/potsdamer_platz_1k.hdr`
      }}>
        <Model url={`http://${host}/model/LittlestTokyo-transformed.glb`}/>
      </Scene>
      <h1>Hello World1</h1>
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
      </div>
    </>
  )
}

export default App
