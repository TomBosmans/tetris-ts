import { ROWS, COLUMNS, CELL, BLOCKS, SCORES_PER_LINES } from "src/constants"
import { Grid, Block, Row, PlayfieldState, Cell } from "src/types"
import { sum } from "src/utils"

export const generateEmptyRow = (): Row =>
  Array(COLUMNS).fill(CELL.EMPTY)

export const generateGrid = (): Grid =>
  Array(ROWS).fill(null).map(() => generateEmptyRow() )

export const generateBlock = (shape: string): Block => ({
  shape: shape,
  offsetX: 3,
  offsetY: 0,
  rotation: 0
})

export function randomBlock(): Block {
  const possibleBlocks = [CELL.I, CELL.J, CELL.L, CELL.O, CELL.S, CELL.T, CELL.Z]
  const randomIndex = Math.floor(Math.random() * possibleBlocks.length)
  return generateBlock(possibleBlocks[randomIndex])
}

export function canBlockMove(block: Block, grid: Grid): boolean {
  const shape: Grid = BLOCKS[block.shape][block.rotation]
  const indexes = [0, 1, 2, 3]

  return indexes.every((rowIndex) => {
    return indexes.every((columnIndex) => {
      const x = block.offsetX + rowIndex
      const y = block.offsetY + columnIndex

      const canMove = shape[columnIndex][rowIndex] !== CELL.EMPTY && (
        x < 0 // left border
        || x > COLUMNS - 1 // right border
        || y > ROWS - 1 // bottom border
        || grid[y][x] !== CELL.EMPTY // already filled
      )

      return !canMove
    })
  })
}

export function restBlock(block: Block, grid: Grid): Grid {
  const shape: Grid = BLOCKS[block.shape][block.rotation]
  const indexes = [0, 1, 2, 3]
  const newGrid = [...grid]

  indexes.forEach((rowIndex) => {
    indexes.forEach((columnIndex) => {
      const x = block.offsetX + rowIndex
      const y = block.offsetY + columnIndex
      const cell = shape[columnIndex][rowIndex]

      if (cell !== CELL.EMPTY) newGrid[y][x] = cell
    })
  })

  return newGrid
}

export function totalCompletedRows(grid: Grid): number {
  return sum(grid.map((row: Row) => {
    const complete = row.every((cell: Cell) => cell !== CELL.EMPTY) 
    return complete ? 1 : 0
  }))
}

export function removeCompletedRows(grid: Grid): Grid {
  const newGrid = [...grid]
  grid.forEach((row: Row, rowIndex: number) => {
    const complete = row.every((cell: Cell) => cell !== CELL.EMPTY)
    if (!complete) return
    newGrid.splice(rowIndex, 1) // remove completed row
    newGrid.unshift(generateEmptyRow()) // add new empty row on top
  })

  return newGrid
}

export function increaseScore({ score, level }: PlayfieldState, completedRowsCount: number): number {
  return score + SCORES_PER_LINES[completedRowsCount] * (level + 1)
}
