import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { getUser } from '../auth'



export function UserPage(){
  const {id} = useParams<{id: string}>()
  const user = getUser()

  async function loadUserDetails(){
    const response = await fetch(`/api/users/${id}`)
    if (response.ok) {
      return response.json()
    } else {
      throw await response.json()
    }
  }

return (
  <div>
    <h1 className="UserStableName">{user.fullName} stable</h1>
    <Link to="/add" className="addBicycleLink" >
      <button className="addBicycle">Add Bicycle</button>
    </Link>
  </div>
)
}