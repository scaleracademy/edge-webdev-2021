import React, { useState } from 'react';
import Layout from './layout';

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
  const isWon = lives && [...word_set].reduce((acc, curr) => {
    if (!played_set.has(curr)) return false;
    return acc;
  }, true)
  const isRunning = actualWord && lives > 0 && !isWon;
  
  const guess = letter => {
    setPlayedLetters((prev) => [...prev, letter])
  }
  const start = () => {
    setActualWord("house")
    setPlayedLetters([])
  }

  return (
    <>
      <Layout
        lives={lives}
        actualWord={actualWord}
        played_set={played_set}
        guess={guess}
        start={start}
        isWon={isWon}
        isRunning={isRunning}
      />
    </>
  )
}
