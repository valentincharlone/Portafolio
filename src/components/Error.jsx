import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className='error'>
      <div className='error-link'>

        <h1>Error 404</h1>
        <a href='/landingPage' to='/landingPage'>Volver</a>
      </div>
    </div>
  )
}

export default Error