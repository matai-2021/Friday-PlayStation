import React, { useRef, useState } from 'react'
import CanvasDraw from 'react-canvas-draw'
import Details from './Details'

function Canvas ({ form }) {
  const canvasRef = useRef(null)

  const [color, setColor] = useState(['#000000'])
  const [size, setSize] = useState([Number('5')])

  const clearCanvas = () => {
    canvasRef.current.clear()
    localStorage.setItem('drawing', canvasRef.current.getSaveData())
  }

  const undo = () => {
    canvasRef.current.undo()
  }

  const onSave = () => {
    localStorage.setItem('drawing', canvasRef.current.getSaveData())
  }

  const changeColourSwatch = (event) => {
    const swatch = document.getElementById(event.target.id)
    setColor(event.target.value)
    swatch.value = event.target.value
  }

  const changeColour = (event) => {
    const swatch = document.getElementById(event.target.id)
    document.getElementById(event.target.id)
    swatch.value = event.target.id
    setColor(event.target.id)
  }

  const brushSize = (event) => {
    setSize(Number(event.target.value))
  }

  return (
    <div>
      <h1>Draw your design for your digital postcard!</h1>
      <div className="draw-container">
        <Details form={form}/>
        <CanvasDraw
          ref={ canvasRef }
          saveData={localStorage.getItem('drawing')}
          brushColor= {color}
          canvasWidth= "100%"
          canvasHeight= "500px"
          gridColor= "rgba(150,150,150,0)"
          brushRadius= {size}
          catenaryColor = "rgba(0, 0, 0, 0.0);"
        />
      </div>
      <div className="button-functions">
        <button onClick={onSave}> SAVE </button>
        <button onClick={clearCanvas}> CLEAR </button>
        <button onClick={undo}> UNDO </button>
        <button onClick={changeColour} id="#ffffff" >ERASER</button>
        <span>Brush Size: </span><input onChange={brushSize} id="slider" type="range" name="vol" min="5" max="100"></input>
      </div>
      <span><strong>Selected Colour: </strong></span><input id="swatch" type="color" value={color} onChange={changeColourSwatch}></input>
      <div className="colours">
        <div className="red" id="#ff0000" onClick={changeColour}></div>
        <div className="green" id="#17b009" onClick={changeColour}></div>
        <div className="blue" id="#3461eb" onClick={changeColour}></div>
        <div className="yellow" id="#e2eb34" onClick={changeColour}></div>
        <div className="black" id="#000000" onClick={changeColour}></div>
      </div>
    </div>
  )
}

export default Canvas
