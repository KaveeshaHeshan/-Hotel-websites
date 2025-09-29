import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'  // Make sure Tailwind is imported here

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-900">
      <div className="flex space-x-8 mb-8">
        <a href="https://vite.dev" target="_blank" rel="noreferrer" 
           className="transition-transform hover:scale-110">
          <img src={viteLogo} className="w-20 h-20" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer" 
           className="transition-transform hover:scale-110">
          <img src={reactLogo} className="w-20 h-20" alt="React logo" />
        </a>
      </div>

      <h1 className="text-4xl font-bold mb-6">Vite + React + Tailwind</h1>

      <div className="bg-white shadow-lg rounded-xl p-6 text-center">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          count is {count}
        </button>
        <p className="mt-4 text-gray-600">
          Edit <code className="px-1 bg-gray-200 rounded">src/App.jsx</code> and save to test HMR
        </p>
      </div>

      <p className="mt-8 text-gray-500 text-sm">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
