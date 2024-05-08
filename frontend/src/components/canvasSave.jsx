import React from 'react'
import { useCanvas } from './canvascontext'

export const CanvasSave = () => {
  const { saveImage } = useCanvas()

  return <button onClick={saveImage} className={`rounded-full bg-primary px-6 py-3 text-base font-medium text-white bg-sky-950`}>Save</button>
}