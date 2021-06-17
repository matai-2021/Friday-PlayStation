import React from 'react'
import CanvasDraw from 'react-canvas-draw'

function App () {
  return (
    <div>
      <h1>Lets DRAW!!!!</h1>
      <div className="draw-container">
        <CanvasDraw
          brushColor="rgba(155,12,60, 0.5)"
          canvasWidth="50vw"
          canvasHeight="50vh"
          gridColor= "rgba(150,150,150,0)"
        />
      </div>
    </div>
  )
}

export default App
