import React from 'react'
import { useCanvas } from './canvascontext'

export const ClearCanvasButton = () => {
  const { clearCanvas } = useCanvas()

  return <button onClick={clearCanvas} className={`rounded-full bg-primary px-6 py-3 text-base font-medium text-white bg-sky-950`}>Clear</button>
}