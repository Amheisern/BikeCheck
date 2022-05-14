import React from 'react'
import logo from './images/logoCS.png'
import git from './images/GitHubSmall.png'
import { Route, Routes } from 'react-router'
import { Landing } from './pages/Landing'
import { AddBicycle } from './pages/AddBicycle'
import { Link } from 'react-router-dom'

export function App() {
  return (
    <div>
      <header>
        <img src={logo} className="logo" alt="logo" />
        <h1>Chain Stars</h1>
        <div className="SignIn">Sign In</div>
      </header>
      <Routes>
        <Route path="/" element={<Landing />} />
        
        <Route path="/add" element={<AddBicycle />} />
      </Routes>
      <footer>
        <div className="footer">
          <p className="ml-20">Created by <Link to="http://www.amheiser.me">Nicholas Amheiser</Link></p>
          <p>Github repository: <Link to="https://github.com/Amheisern">
            <img src={git} className="git" alt="git" />
            </Link></p>
        </div>
      </footer>
    </div>
  )
}
