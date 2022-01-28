import React, { useState } from 'react';
import Lives from './lives';
import Word from './word';
import Letters from './letters';
import Start from './start';

const MAX_LIVES = 6;
export default function Game() {
  const [actualWord, setActualWord] = useState("");
  const [playedLetters, setPlayedLetters] = useState([]);

  const word_set = new Set([...actualWord]);
  const played_set = new Set([...playedLetters])
  const wrongLetters = playedLetters.filter((letter) => {
    return !word_set.has(letter);
  })
  const lives = MAX_LIVES - wrongLetters.length
  const isRunning = actualWord;
  const isWon = isRunning && lives && [...word_set].reduce((acc, curr) => {
    if (!played_set.has(curr)) return false;
    return acc;
  }, true)

  const guess = letter => {
    setPlayedLetters((prev) => [...prev, letter])
  }
  const start = () => {
    setActualWord("house")
    setPlayedLetters([])
  }

  return (
    <>
      {isRunning && <>
        <Lives livesLeft={lives} />
        <Word actualWord={actualWord} playedLetters={played_set} />
        <Letters playedLetters={played_set} onSelect={guess} />
      </>}
      <Start onStart={start} />

      {isWon && <>
        <div>You Won!</div>
      </>}
    </>
  )
}
