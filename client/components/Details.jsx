import React, { useState } from 'react'

function Details ({ form }) {
  const { to } = form
  console.log(to)
  return (
    <>
      <ul>
        {form.map(element => (
          <li key={element.to}>{`To: ,${element.to}, From: ${element.from}, Message: ${element.message}.`}
          </li>
        ))}
      </ul>
    </>
  )
}

export default Details
