import { useEffect, useRef } from "react"

type CallbackFunction = () => void

export default function useInterval(callback: CallbackFunction, delay: number | null) {
  const savedCallback = useRef<CallbackFunction>()

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  // Set up the interval.
  useEffect(() => {
    if (delay === null) return

    const tick = () => savedCallback.current && savedCallback.current()
    const id = setInterval(tick, delay)
    return () => clearInterval(id)
  }, [delay])
}
