import React from 'react'

export default function Start({ onStart }) {
  return (
    <div>
      <button
        onClick={() => onStart()}
      >
        Start
      </button>
    </div>
  )
}
