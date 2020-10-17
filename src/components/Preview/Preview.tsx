import React, { useContext } from "react"
import { PlayfieldContext } from "src/PlayfieldProvider"
import Canvas from "../Canvas"
import { CELL_SIZE, PADDING, BLOCKS, CELL_COLORS } from "src/constants"
import { Cell } from "src/types"

export default function Preview() {
  const { state: { nextBlock } } = useContext(PlayfieldContext)

  const size = 4 * (CELL_SIZE + PADDING)

  const draw = (context: CanvasRenderingContext2D) => {
    const grid = BLOCKS[nextBlock.shape][nextBlock.rotation]

    for (let x = 0, i = 0; i < 4; x+=CELL_SIZE + PADDING, i++) {
      for (let y = 0, j=0; j < 4; y+=CELL_SIZE + PADDING, j++) {
        const cell: Cell = grid[j][i]
        context.fillStyle = CELL_COLORS[cell]
        context.fillRect(x, y, CELL_SIZE, CELL_SIZE);
      }
    }
  }

  return (
    <Canvas draw={draw} width={size} height={size} />
  )
}
