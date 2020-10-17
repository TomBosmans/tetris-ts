import React, { useRef } from "react"
import { useInterval } from "src/hooks"

type Props = {
  width: number
  height: number
  draw(context: CanvasRenderingContext2D): void
  delay?: number
}

export default function Canvas({ width, height, draw, delay=1000 }: Props) {
  const ref = useRef<HTMLCanvasElement>(null)

  useInterval(() => {
    const canvas = ref.current
    const context = canvas?.getContext("2d")
    if (context) draw(context)
  }, delay);

  return (
    <canvas ref={ref} width={width} height={height} />
  )
}
