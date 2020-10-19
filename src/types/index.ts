export type Cell = " " | "o" | "s" | "z" | "i" | "j" | "t" | "l"
export type Row = Cell[]
export type Grid = Row[]
export type Block = {
  shape: string
  offsetX: number
  offsetY: number
  rotation: number
}

export type Action = {
  type: ActionType
  payload?: Record<any, any>
}

export type ActionType = "MOVE_BLOCK_DOWN" | "MOVE_BLOCK_LEFT" | "MOVE_BLOCK_RIGHT" | "ROTATE_BLOCK_LEFT" | "ROTATE_BLOCK_RIGHT" | "START_AUTO_DROP" | "STOP_AUTO_DROP"

export type Keybindings = Record<number, ActionType>

export type PlayfieldState = {
  level: number
  score: number
  lines: number
  autoDrop: boolean
  grid: Grid
  currentBlock: Block
  nextBlock: Block
  keybindings: Keybindings
}
