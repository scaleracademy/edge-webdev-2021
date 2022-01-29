import React from 'react'

export default function Start({ onStart, isRunning }) {
  return (
    <div>
      <button
        onClick={() => onStart()}
        className={`start-button ${isRunning && 'display-none'}`}
      >
        Start
      </button>
    </div>
  )
}
