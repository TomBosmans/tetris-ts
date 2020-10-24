import React, { useContext } from "react"
import { PlayfieldContext } from "src/PlayfieldProvider"

export default function Details() {
  const { state: { lines, level, score } } = useContext(PlayfieldContext)

  return (
    <ul>
      <li>LINES: {lines}</li>
      <li>LEVEL: {level}</li>
      <li>SCORE: {score}</li>
    </ul>
  )
}
