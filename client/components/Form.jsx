
import React, { useState } from 'react'

function Form ({ submitMessage }) {
  const block = { display: 'block' }
  const [form, setForm] = useState({
    to: '',
    from: '',
    message: ''
  })

  function handleChange (event) {
    console.log('lalalalala')
    console.log(event)
    const { name, value } = event.target
    setForm({
      ...form,
      [name]: value
    })
  }

  function handleSubmit (event) {
    const { to: name, from , message} = form
    console.log(form)
    submitMessage(name, from, message)
    setForm({ to: '', from: '' , message: ''})
    event.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit}>
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
      <button>Submit message</button>
    </form>
  )
}

export default Form