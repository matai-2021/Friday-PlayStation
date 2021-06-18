import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

function Form ({ submitMessage }) {
  const block = { display: 'block' }
  const [form, setForm] = useState({
    to: '',
    from: '',
    message: ''
  })

  const history = useHistory()

  function handleChange (event) {
    const { name, value } = event.target
    setForm({
      [name]: value
    })
  }

  function handleSubmit () {
    const { to: name, from, message } = form
    submitMessage(name, from, message)
    setForm({ to: '', from: '', message: '' })
    history.push('/canvas')
  }

  return (
    <>
      {/* <form onSubmit={handleSubmit}> */}
      <label htmlFor='to' style={ block }>to:
        <input id='to' name='to'
          value={form.to}
          onChange={handleChange} />
      </label>
      <label htmlFor='from' style={ block }>from:
        <input id='from' name='from'
          value={form.from}
          onChange={handleChange} />
      </label>
      <label htmlFor='message' style={ block }>message:
        <input id='message' name='message'
          value={form.message}
          onChange={handleChange} />
      </label>
      <button onClick={handleSubmit}>Submit Message</button>
      {/* </form> */}
    </>
  )
}

export default Form
