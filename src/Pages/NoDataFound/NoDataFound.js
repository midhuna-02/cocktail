import React from 'react'
import { Link } from 'react-router-dom'

const NoDataFound = () => {
  return (
    <section className='error-page section'>
        <div className="error-container">
            <h1>oops!!! The page not found</h1>
            <Link to={'/'} className='btn btn-primary'>Back to Home</Link>
        </div>
    </section>
  )
}

export default NoDataFound