import React, { useState } from 'react'
import { useMutation } from 'react-query'
import { useNavigate } from 'react-router'
import { APIError, LoginSuccess, NewUserType, UserLoginType } from '../types'

async function loginUser(user: UserLoginType): Promise<LoginSuccess> {
  const response = await fetch('/api/Sessions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',},
      body: JSON.stringify(user),})
  if (response.ok) {
    return response.json()
  } else {
    throw await response.json()
  }
}

export function SignIn() {
  const history = useNavigate()
  const [errorMessage, setErrorMessage] = useState('')
  const [newUser, setNewUser] = useState<UserLoginType>({
    email: '',
    password: '',
  })
  const createUserMutation = useMutation(
  (newUser: NewUserType) => loginUser(newUser),
     {
      onSuccess: () => {
        history('/')
      },
      onError: function(error: APIError){
        setErrorMessage(Object.values(error.errors).join("/"))
      },
    })
    
  function handleStringFieldChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value
    const fieldName = event.target.name
    const updatedUser = { ...newUser,[fieldName]: value }
    setNewUser(updatedUser)
  }
  
  return (
    <div>
      <nav>
        <a href="/">
          <i className="fa fa-home"></i>
        </a>
        <h2>Sign In</h2>
      </nav>
      <form onSubmit={(event) => {
        event.preventDefault()
        createUserMutation.mutate(newUser)
      }}>
        {errorMessage ? <p className="SignIn-Error">{errorMessage}</p> : null}
        <p className="form-input">
          <label htmlFor="name">Email</label>
          <input type="email" name="email" value={newUser.email} 
          onChange={handleStringFieldChange}/>
        </p>
        <p className="form-input">
          <label htmlFor="password">Password</label>
          <input type="password" name="password"
          value={newUser.password}
          onChange={handleStringFieldChange} />
        </p>
        <p>
          <input type="submit" value="Submit" />
        </p>
      </form>
    </div>
  )
}
