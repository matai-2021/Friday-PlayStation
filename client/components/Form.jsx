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
      ...form,
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
      <form onSubmit={handleSubmit}>
        <label className="details" htmlFor='to' style={ block }>To:
          <input id='to' name='to'
            value={form.to}
            onChange={handleChange} />
        </label>
        <label className="details" htmlFor='from' style={ block }>From:
          <input id='from' name='from'
            value={form.from}
            onChange={handleChange} />
        </label>
        <label className="details-large" htmlFor='message' style={ block }>Message:
          <textarea rows="4" cols="50" id='message' name='message'
            value={form.message}
            onChange={handleChange}>
              Write Your Message Here
          </textarea>
        </label>
        <button onClick={handleSubmit}>Submit Message</button>
      </form>
    </>
  )
}

export default Form
