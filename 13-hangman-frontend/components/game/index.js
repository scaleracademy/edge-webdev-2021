import React, { useState } from 'react';
import Lives from './lives';
import Word from './word';
import Letters from './letters';
import Start from './start';
import { createSession, playInSession } from '../../api/sessions';

const MAX_LIVES = 6;
export default function Game() {
  const [session, setSession] = useState(null)
  const isRunning = !!session;

  const guess = async letter => {
    const updatedSession = await playInSession(session.id, letter)
    setSession(updatedSession)
  }
  const start = async (name) => {
    const session = await createSession(name);
    setSession(session)
  }

  return (
    <>
      {isRunning && <>
        <Lives livesLeft={session.livesLeft} />
        <Word maskedWord={session.maskedWord} />
        <Letters playedLetters={new Set()} onSelect={guess} />
      </>}
      {!isRunning && <>
        <Start onStart={start} />
      </>}
    </>
  )
}
