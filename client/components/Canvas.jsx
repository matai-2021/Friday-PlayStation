import React, { useRef } from 'react'
import CanvasDraw from 'react-canvas-draw'

function Canvas () {
  const canvasRef = useRef(null)

  const clearCanvas = () => {
    canvasRef.current.clear()
  }

  const undo = () => {
    canvasRef.current.undo()
  }

  const onSave = () => {
    localStorage.setItem('drawing', canvasRef.current.getSaveData())
  }

  return (
    <div>
      <h1>Draw your design for your digital postcard!</h1>
      <div className="draw-container">
        <CanvasDraw
          ref={ canvasRef }
          saveData={localStorage.getItem('drawing')}
          brushColor="rgba(155,12,60, 0.5)"
          canvasWidth="60vw"
          canvasHeight="50vh"
          gridColor= "rgba(150,150,150,0)"
        />
      </div>
      <div>
        <button onClick={onSave}> SAVE </button>
        <button onClick={clearCanvas}> CLEAR </button>
        <button onClick={undo}> UNDO </button>
      </div>
    </div>
  )
}

export default Canvas
