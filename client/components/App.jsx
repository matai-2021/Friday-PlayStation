import React, { useState } from 'react'
import { Route } from 'react-router-dom'
// import CanvasDraw from 'react-canvas-draw'
import Canvas from './Canvas'
import Form from './Form'
import Details from './Details'

const App = () => {
  const [form, setForm] = useState([])

  function submitMessage (to, from, message) {
    setForm([
      ...form,
      { to, from, message }
    ])
  }
  return (
    <>
      <div className='title'>
        <h1>DESIGN YOUR OWN DIGITAL POSTCARD</h1>
      </div>
      <div className='main'>
        <Route exact path='/' render={() => <Form submitMessage={submitMessage}/>}/>
        <Route exact path='/canvas' render={() => <Details form={form} />}/>
        {/* <Route exact path='/' component= { Second } /> */}
        <Route path='/canvas' component={ Canvas } />
      </div>
    </>
  )
}

export default App
