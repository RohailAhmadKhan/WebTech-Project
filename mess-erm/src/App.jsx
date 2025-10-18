import React from 'react'
import './index.css' // makes sure Tailwind + your style.css are loaded


function App() {

  return (
    <>
      <div className="p-6 bg-gray-100">
      <h1 className="text-3xl font-bold underline mb-4">
        Hello Tailwind + Custom CSS
      </h1>
      
      <button className="custom-btn">
        Custom Styled Button
      </button>
    </div>
    </>
  )
}

export default App
