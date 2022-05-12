import React from 'react'
import logo from './images/logoCS.svg'
import git from './images/GitHubSmall.png'
import { Route, Routes } from 'react-router'
import { Landing } from './pages/Landing'

export function App() {
  return (
    <div>
      <header>
        <img src={logo} className="logo" alt="logo" />
        <h1>Bike Check</h1>
        <div className="SignIn">Sign In</div>
      </header>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
      <footer>
        <div className="footer">
          <p className="ml-20">Created by <a href="http://www.amheiser.me">Nicholas Amheiser</a></p>
          <p>Github repository: <a href="https://github.com/Amheisern">
            <img src={git} className="git" alt="git" />
            </a></p>
        </div>
      </footer>
    </div>
  )
}
