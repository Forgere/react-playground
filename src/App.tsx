// import { PlaygroundSandbox } from './Playground/PlaygroundSandbox'
import { Playground as PlaygroundSandbox } from '@/Playground'

const IMPORTMAP = {
  imports: {
    react: 'https://esm.sh/react@18.2.0',
    'react-dom/client': 'https://esm.sh/react-dom@18.2.0',
    fiber: 'http://localhost:5173/fiber.js',
  },
}

function App() {
  const handleFilesHash = (hash: string) => {
    window.location.hash = hash
  }

  return <PlaygroundSandbox onFilesChange={handleFilesHash} importMap={IMPORTMAP} />
}

export default App
