// src/App.jsx
import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserProfile from './components/UserProfile.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-start py-10">
      {/* Header logos (from your original app) */}
      <div className="flex gap-6 mb-8">
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      {/* Title */}
      <h1 className="text-3xl font-bold mb-6">Vite + React + Tailwind</h1>

      {/* Counter card (previous task) */}
      <div className="card bg-white shadow-md rounded-lg p-6 mb-12 text-center">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          count is {count}
        </button>
        <p className="mt-4 text-gray-700">
          Edit <code className="bg-gray-200 px-1 py-0.5 rounded">src/App.jsx</code> and save to
          test HMR
        </p>
      </div>

      {/* New UserProfile component (current task) */}
      <UserProfile />

      {/* Docs link */}
      <p className="read-the-docs mt-12 text-gray-500">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App