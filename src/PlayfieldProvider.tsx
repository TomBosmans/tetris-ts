import React, { createContext, useReducer, Dispatch } from "react"
import { PlayfieldState } from "src/types"
import { reducer } from "src/state"
import { generateGrid, randomBlock } from "src/lib"
import { ACTION } from "./constants"

const initialState: PlayfieldState = {
  level: 0,
  score: 0,
  grid: generateGrid(),
  currentBlock: randomBlock(),
  nextBlock: randomBlock(),
  keybindings: {
    37: ACTION.MOVE_BLOCK_LEFT,
    38: ACTION.ROTATE_BLOCK_LEFT,
    39: ACTION.MOVE_BLOCK_RIGHT,
    40: ACTION.MOVE_BLOCK_DOWN,
    41: ACTION.ROTATE_BLOCK_RIGHT
  }
}

type PlayfieldContext = {
  state: PlayfieldState,
  dispatch: Dispatch<any>
}

export const PlayfieldContext = createContext<PlayfieldContext>({
  state: initialState,
  dispatch: () => null
})

type Props = {
  children: React.ReactNode
}

export default function PlayfieldProvider({ children }: Props) {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <PlayfieldContext.Provider value={{state, dispatch}}>
      {children}
    </PlayfieldContext.Provider>
  )
}
