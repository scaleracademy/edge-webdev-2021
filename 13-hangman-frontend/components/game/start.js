import React, { useState } from 'react'

export default function Start({ onStart }) {
  const [name, setName] = useState("");

  return (
    <div>
      <input 
        type="text" 
        placeholder="Name"
        onChange={(e) => setName(e.target.name)} 
        name={name} 
      />
      <button
        onClick={() => onStart(name)}
      >
        Start
      </button>
    </div>
  )
}
