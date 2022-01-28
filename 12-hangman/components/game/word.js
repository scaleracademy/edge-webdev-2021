import React from "react";

export default function Word({
  actualWord, playedLetters
}) {
  return (
    <div>
      {[...actualWord].map((letter) => (
        <>
          {playedLetters.has(letter) ? (
            <span>{letter}</span>
          ) : (
            <span>&nbsp;_&nbsp;</span>
          )}
        </>
      ))}
    </div>
  )
}
