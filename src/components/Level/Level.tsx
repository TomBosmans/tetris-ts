import React, { useContext } from "react"
import { PlayfieldContext } from "src/PlayfieldProvider"

export default function Level() {
  const { state: { level } } = useContext(PlayfieldContext)

  return (
    <div>Level: {level}</div>
  )
}
