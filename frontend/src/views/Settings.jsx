import React from 'react'
import { Link } from 'react-router-dom'

export default function Settings() {
  return (
    <div>
      <p>
        Settings Page
      </p>
      <Link className='underline text-8xl' to="/">
        go to dashboard
      </Link>
    </div>
  )
}
