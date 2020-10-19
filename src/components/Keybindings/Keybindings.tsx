import React, { useEffect, useContext } from "react"
import { PlayfieldContext } from "src/PlayfieldProvider"
import { ACTION } from "src/constants"

export default function Keybindings() {
  const { state: { keybindings }, dispatch } = useContext(PlayfieldContext)

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (keybindings[event.keyCode] === ACTION.MOVE_BLOCK_DOWN) {
        dispatch({ type: ACTION.STOP_AUTO_DROP })
      }
      dispatch({ type: keybindings[event.keyCode] })
    }

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey)
  }, [keybindings, dispatch])

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (keybindings[event.keyCode] === ACTION.MOVE_BLOCK_DOWN) {
        dispatch({ type: ACTION.START_AUTO_DROP })
      }
    }

    window.addEventListener("keyup", handleKey);
    return () => window.removeEventListener("keyup", handleKey)
  }, [keybindings, dispatch])

  return (
    <></>
  )
}
