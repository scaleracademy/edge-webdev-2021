import React from "react";

export default function Word({
  maskedWord 
}) {
  return (
    <div>
      {maskedWord.map((letter) => (
        <>
            <span>&nbsp;{letter}&nbsp;</span>
        </>
      ))}
    </div>
  )
}
