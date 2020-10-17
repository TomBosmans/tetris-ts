import React, { useContext } from "react"
import { PlayfieldContext } from "src/PlayfieldProvider"

export default function Score() {
  const { state: { score } } = useContext(PlayfieldContext)

  return (
    <div>Score: {score}</div>
  )
}
