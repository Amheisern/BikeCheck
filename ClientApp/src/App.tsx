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
      <footer>
        <div className="footer">
          <p>Created by <a href="http://www.amheiser.me">Nicholas Amheiser</a></p>
          <p>Github repository: <a href="https://github.com/Amheisern"></a>github image</p>
        </div>
      </footer>
    </div>
  )
}
