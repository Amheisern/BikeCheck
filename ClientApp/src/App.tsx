import React from 'react'
import logo from './images/logoCS.png'
import git from './images/GitHubSmall.png'
import { Route, Routes } from 'react-router'
import { Landing } from './pages/Landing'
import { AddBicycle } from './pages/AddBicycle'
import { Link } from 'react-router-dom'
import { BicycleDetails } from './pages/BicycleDetails'
import { SignUp } from './pages/Signup'
import { SignIn } from './pages/Signin'
import { getUser, isLoggedIn, logout } from './auth'

export function App() {
const user = getUser()
  
  function handleLogout() {
    logout()

    window.location.assign('/')
  }

  return (
    <div>
      <header>
        <Link to="/">
          <img src={logo} className="logo" alt="logo" />
        </Link>
        <h1>Chain Stars</h1>
        {isLoggedIn() ? null : (
          <Link to="/signin" className="signIn">
            Sign In{' '}
          </Link>
        )}
        {isLoggedIn() ? null : (
          <Link to="/signup" className="SignUp">
            Sign Up
          </Link>
        )}
        {isLoggedIn() ? (
          <a
            href="/"
            className="link"
            onClick={function (event) {
              event.preventDefault()
              handleLogout()
            }}
          >
            Sign out
          </a>
        ) : null}
        {isLoggedIn() ? <p className='stable'> {user.fullName} Bicycles </p> : null}
        
      </header>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/bicycles/:id" element={<BicycleDetails />} />
        <Route path="/add" element={<AddBicycle />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <footer>
        <div className="footer">
          <p className="ml-20">
            Created by{' '}
            <Link to="http://www.amheiser.me">Nicholas Amheiser</Link>
          </p>
          <p>
            Github repository:{' '}
            <Link to="https://github.com/Amheisern">
              <img src={git} className="git" alt="git" />
            </Link>
          </p>
        </div>
      </footer>
    </div>
  )
}
