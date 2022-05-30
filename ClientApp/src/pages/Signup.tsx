import React, { useState } from 'react'
import { useMutation } from 'react-query'
import { useNavigate } from 'react-router'
import { submitNewUser } from '../api'
import { APIError, NewUserType } from '../types'



export function SignUp() {
  const history = useNavigate()
  const [errorMessage, setErrorMessage] = useState('')
  const [newUser, setNewUser] = useState<NewUserType>({
    fullName: '',
    email: '',
    password: '',
  })

  const createUserMutation = useMutation(
  (newUser: NewUserType) => submitNewUser(newUser),
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
        <h2>Sign up</h2>
      </nav>
      <form
        onSubmit={function (event) {
          event.preventDefault()
          createUserMutation.mutate(newUser)
        }}
      >
        {errorMessage ? <p className="form-error">{errorMessage}</p> : null}
        <p className="form-input">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="fullName"
            value={newUser.fullName}
            onChange={handleStringFieldChange}
          />
        </p>
        <p className="form-input">
          <label htmlFor="name">Email</label>
          <input
            type="email"
            name="email"
            value={newUser.email}
            onChange={handleStringFieldChange}
          />
        </p>
        <p className="form-input">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={newUser.password}
            onChange={handleStringFieldChange}
          />
        </p>
        <p>
          <input type="submit" value="Submit" />
        </p>
      </form>
    </div>
  )
}
