import React from 'react'

const ALL_ALPHABETS = [..."abcdefghijklmnopqrstuvwxyz"];

export default function Letters({
  playedLetters, onSelect
}) {
  return (
    <div>
      {ALL_ALPHABETS.map((alphabet) => (
        <button
          onClick={() => onSelect(alphabet)}
          disabled={playedLetters.has(alphabet)}
        >
          {alphabet}
        </button>
      ))}
    </div>
  )
}
