import React, { useState } from 'react'
import { Route } from 'react-router-dom'
import Canvas from './Canvas'
import Form from './Form'
import Details from './Details'
import Instructions from './Instructions'

const App = () => {
  const [form, setForm] = useState([])

  function submitMessage (to, from, message) {
    setForm([
      ...form,
      { to, from, message }
    ])
    // window.location.href = 'http://localhost:3000/#/canvas'
  }
  return (
    <>
      <div className='title'>
        <h1 className="web-title">DIGI MY CARD</h1>
      </div>
      <div className='main'>
        <Route exact path='/' component={ Instructions } />
        <Route exact path='/' render={() => <Form submitMessage={submitMessage}/>}/>
        <Route exact path='/canvas' render={() => <Details form={form} />}/>
        <Route path='/canvas' component={ Canvas } />
      </div>
    </>
  )
}

export default App
