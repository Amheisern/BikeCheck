import React, { useState } from 'react'

const [errorMessage, setErrorMessage] = useState('')

const [user, setUser] = useState<LoginUserType>({
  email: '',
  password: '',
})

export function SignIn() {
  return (
    <div>
      <nav>
        <a href="/">
          <i className="fa fa-home"></i>
        </a>
        <h2>Sign In</h2>
      </nav>
      <form action="#">
        <p className="form-input">
          <label htmlFor="name">Email</label>
          <input type="email" name="email" />
        </p>
        <p className="form-input">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" />
        </p>
        <p>
          <input type="submit" value="Submit" />
        </p>
      </form>
    </div>
  )
}