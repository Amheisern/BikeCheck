import React, { useState } from 'react'
import { useMutation } from 'react-query'
import { recordAuthentication } from '../auth'
import { APIError, LoginSuccess, LoginUserType } from '../types'

export function SignIn() {
  const [errorMessage, setErrorMessage] = useState('')
  const [user, setUser] = useState<LoginUserType>({
    email: '',
    password: '',
  })

  const loginUserMutation = useMutation(loginUser, {
    onSuccess: function (apiResponse) {
      // TODO: record the authentication information we receive

      recordAuthentication(apiResponse)
      window.location.assign('/')
    },
    onError: function (error: APIError) {
      setErrorMessage(Object.values(error.errors).join(' '))
    },
  })

  async function loginUser(user: LoginUserType): Promise<LoginSuccess> {
    const response = await fetch('/api/Session', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(user),
    })
    if (response.ok) {
      return response.json()
    } else {
      throw await response.json()
    }
  }

  function handleStringFieldChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value
    const fieldName = event.target.name
    const updatedUser = { ...user, [fieldName]: value }
    setUser(updatedUser)
  }

  return (
    <div>
      <nav>
        <a href="/">
          <i className="fa fa-home"></i>
        </a>
        <h2>Sign in</h2>
      </nav>
      <form
        onSubmit={function (event) {
          event.preventDefault()
          loginUserMutation.mutate(user)
        }}
      >
        {errorMessage ? <p className="form-error">{errorMessage}</p> : null}
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleStringFieldChange}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleStringFieldChange}
          />
        </label>
        <button type="submit">Sign In</button>
      </form>
    </div>
  )
}
