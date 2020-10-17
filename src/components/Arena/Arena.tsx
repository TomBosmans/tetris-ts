import React, { useContext } from "react"
import Canvas from "src/components/Canvas"
import { COLUMNS, ROWS, CELL_SIZE, PADDING, CELL_COLORS, BLOCKS, ACTION, CELL } from "src/constants"
import { Cell } from "src/types"
import { PlayfieldContext } from "src/PlayfieldProvider"
import { useInterval } from "src/hooks"

export default function Arena() {
  const { state, dispatch } = useContext(PlayfieldContext)
  const { grid, currentBlock } = state

  const width = COLUMNS * (CELL_SIZE + PADDING)
  const height = ROWS * (CELL_SIZE + PADDING)

  const drawGrid = (context: CanvasRenderingContext2D) => {
    for (let x = 0, i = 0; i < COLUMNS; x+=CELL_SIZE + PADDING, i++) {
      for (let y = 0, j=0; j < ROWS; y+=CELL_SIZE + PADDING, j++) {
        const cell: Cell = grid[j][i]
        context.fillStyle = CELL_COLORS[cell]
        context.fillRect(x, y, CELL_SIZE, CELL_SIZE);
      }
    }
  }

  const drawCurrentBlock = (context: CanvasRenderingContext2D) => {
    for (let x = 0, i = 0; i < 4; x+=CELL_SIZE + PADDING, i++) {
      for (let y = 0, j=0; j < 4; y+=CELL_SIZE + PADDING, j++) {
        const { shape, rotation } = currentBlock
        const rectX = (CELL_SIZE + PADDING) * currentBlock.offsetX + x
        const rectY = (CELL_SIZE + PADDING) * currentBlock.offsetY + y
        const cell: Cell = BLOCKS[shape][rotation][j][i]
        if (cell !== CELL.EMPTY) {
          context.fillStyle = CELL_COLORS[cell]
          context.fillRect(rectX, rectY, CELL_SIZE, CELL_SIZE);
        }
      }
    }
  }

  const draw = (context: CanvasRenderingContext2D) => {
    context.clearRect(0, 0, width, height);
    drawGrid(context)
    drawCurrentBlock(context)
  }

  useInterval(() => dispatch({ type: ACTION.MOVE_BLOCK_DOWN }), 1000)

  return (
    <Canvas draw={draw} width={width} height={height} delay={2} />
  )
}