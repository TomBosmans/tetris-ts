import React, { useEffect, useContext } from "react"
import { PlayfieldContext } from "src/PlayfieldProvider"

export default function Keybindings() {
  const { state, dispatch } = useContext(PlayfieldContext)
  const { keybindings } = state

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      dispatch({ type: keybindings[event.keyCode] })
    }

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [keybindings, dispatch])

  return (
    <></>
  )
}
