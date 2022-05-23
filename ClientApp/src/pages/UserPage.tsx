import React from 'react'
import { Link } from 'react-router-dom'
import { getUser } from '../auth'

export function UserPage(){
  const user = getUser()
return (
  <div>
    <h1 className="UserStableName">{user.fullName} stable</h1>
    <Link to="/add" className="addBicycleLink" >
      <button className="addBicycle">Add Bicycle</button>
    </Link>
  </div>
)
}