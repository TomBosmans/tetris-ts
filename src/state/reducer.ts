import { PlayfieldState, Action } from "src/types"
import { ACTION, BLOCKS } from "src/constants"
import { canBlockMove, restBlock, randomBlock, removeCompletedRows, totalCompletedRows, increaseScore } from "src/lib"

const moveBlockDown = (state: PlayfieldState): PlayfieldState => {
  const offsetY = state.currentBlock.offsetY + 1
  const currentBlock = { ...state.currentBlock, offsetY: offsetY }
  const canMove = canBlockMove(currentBlock, state.grid)

  if (canMove) return { ...state, currentBlock: currentBlock }

  const grid = restBlock(state.currentBlock, state.grid)
  const completedRowsCount = totalCompletedRows(grid)
  const lines = state.lines + completedRowsCount
  const newLevel = Math.floor(lines/10)
  const level = state.level > newLevel ? state.level : newLevel
  return {
    ...state,
    lines: lines,
    level: level,
    grid: removeCompletedRows(grid),
    currentBlock: state.nextBlock,
    nextBlock: randomBlock(),
    score: increaseScore(state, completedRowsCount)
  }
}

const moveBlockLeft = (state: PlayfieldState): PlayfieldState => {
  const offsetX = state.currentBlock.offsetX - 1
  const currentBlock = { ...state.currentBlock, offsetX: offsetX }
  return canBlockMove(currentBlock, state.grid) ?
    { ...state, currentBlock: currentBlock } : state
}

const moveBlockRight = (state: PlayfieldState): PlayfieldState => {
  const offsetX = state.currentBlock.offsetX + 1
  const currentBlock = { ...state.currentBlock, offsetX: offsetX }
  return canBlockMove(currentBlock, state.grid) ?
    { ...state, currentBlock: currentBlock } : state
}

const rotateBlockLeft = (state: PlayfieldState): PlayfieldState => {
  const rotations = BLOCKS[state.currentBlock.shape]
  const currentRotation = state.currentBlock.rotation
  const currentBlock = (currentRotation >= rotations.length - 1) ?
    { ...state.currentBlock, rotation: 0 } :  { ...state.currentBlock, rotation: currentRotation + 1 }

  return canBlockMove(currentBlock, state.grid) ?
    { ...state, currentBlock: currentBlock } : state
}

const rotateBlockRight = (state: PlayfieldState): PlayfieldState => {
  return state
}

export default function reducer(state: PlayfieldState, action: Action) {
  switch(action.type) {
    case ACTION.MOVE_BLOCK_DOWN:
      return moveBlockDown(state)
    case ACTION.MOVE_BLOCK_LEFT:
      return moveBlockLeft(state)
    case ACTION.MOVE_BLOCK_RIGHT:
      return moveBlockRight(state)
    case ACTION.ROTATE_BLOCK_LEFT:
      return rotateBlockLeft(state)
    case ACTION.ROTATE_BLOCK_RIGHT:
      return rotateBlockRight(state)
    case ACTION.START_AUTO_DROP:
      return { ...state, autoDrop: true }
    case ACTION.STOP_AUTO_DROP:
      return { ...state, autoDrop: false }
    default:
      return state
  }
}
