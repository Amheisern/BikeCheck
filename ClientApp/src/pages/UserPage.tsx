import React from 'react'
import { getUser } from '../auth'

export function UserPage(){
  const user = getUser()
return (
  <div>
    <p className="stable"> {user.fullName} Bicycles </p>
  </div>
)
}