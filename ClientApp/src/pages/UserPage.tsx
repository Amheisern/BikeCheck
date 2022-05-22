import React from 'react'
import { Link } from 'react-router-dom'
import { getUser } from '../auth'

export function UserPage(){
  const user = getUser()
return (
  <div>
    <p className="stable"> {user.fullName} Bicycles </p>
    <Link to="/add" className="addBicycle"><button>Add Bicycle</button>
    </Link>
  </div>
)
}