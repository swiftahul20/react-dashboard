import React from 'react'
import { Link } from 'react-router-dom'

export default function Settings() {
  return (
    <div>
      <p>
        Under Development
      </p>
      <Link className='underline text-md' to="/">
        go to dashboard
      </Link>
    </div>
  )
}
