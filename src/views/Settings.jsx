import React from 'react'
import { Link } from 'react-router-dom'

export default function Settings() {
  return (
    <div>
      <p>
        Settings Page
      </p>
      <Link className='underline' to="/">
        go to dashboard
      </Link>
    </div>
  )
}
