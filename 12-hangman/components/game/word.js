import React from "react";

export default function Word({
  actualWord, playedLetters
}) {
  return (
    <div className="display-flex justify-content-around word-flex">
      {[...actualWord].map((letter) => (
        <>
          {playedLetters.has(letter) ? (
            <div className="word">{letter}</div>
          ) : (
            <div className="word">&nbsp;_&nbsp;</div>
          )}
        </>
      ))}
    </div>
  )
}
