import React from 'react'
import { Link } from 'react-router-dom'
import '../css/NotFound.css'

function NotFound() {
  return (
    <div className='errorBox'>
        <h1 className='error'>Error 404</h1>
        <p className='page'>Page not found</p>
        <p className='goToPage'>Go to page <Link className='albumLink' to="/albums">Albums</Link></p>
    </div>
  )
}

export default NotFound