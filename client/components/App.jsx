import React, { useRef } from 'react'
import { Route } from 'react-router-dom'
// import CanvasDraw from 'react-canvas-draw'
import Canvas from './Canvas'
// import Form from './Form'
import Second from './Second'

function App () {
  return (
    <>
      <div className='title'>
        <h1>DESIGN YOUR OWN DIGITAL POSTCARD</h1>
      </div>
      <div className='main'>
        <Route exact path='/' component= { Second } />
        <Route path='/canvas' component={ Canvas } />
      </div>
    </>
  )
}

export default App
