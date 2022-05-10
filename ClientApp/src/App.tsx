import React from 'react'
import logo from './images/logo.svg'

export function App() {
  return (
    <div>
      <header>
        <img src={logo} className="logo" alt="logo" />
        <h1>Bike Check</h1>
        <div className="SignIn">Sign In</div>
      </header>
    </div>
  )
}
