import React from 'react'

function Details ({ form }) {
  return (
    <div key="details" className="overlap">
      {form.map(element => (
        <>
          <h2 id="to" key={element.to}>{`To ${element.to}`}</h2>
          <p id="message" key ={element.message}>{element.message}</p>
          <h2 id="from" key={element.from}>{`From ${element.from}`}</h2>
        </>
      ))}
    </div>
  )
}

export default Details
