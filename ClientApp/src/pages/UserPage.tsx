import React, { useEffect, useState } from 'react'
// import { useQuery } from 'react-query'
import { Link, useParams } from 'react-router-dom'
import { getUser } from '../auth'
import {  BicycleType } from '../types'

// const NullUser: LoggedInUser = {
//   id: undefined,
//   email: '',
//   fullName: '',
//  bicycles: BicycleType[],
// }

// const NullUser: any = {
//   id: undefined,
//   email: '',
//   fullName: '',
//   bicycles: BicycleType = [
//   id: undefined,
//   userId: undefined,
//   title: '',
//   description: '',
//   frame: '',
//   fork: '',
//   saddle: '',
//   handlebar: '',
//   bottomBracket: '',
//   chainRing: '',
//   rearCog: '',
//   crank: '',
//   wheels: '',
//   pedals: '',
//   other: '',
//   photoURL: '',
//   reviews: [],
//   ]
// }


export function UserPage(){
  const {id} = useParams<{id: string}>()
  const user = getUser()
  const [bicycles, setBicycles] = useState<BicycleType[]>([])
// const singleUser = LoggedInUser

   async function loadUserDetails(){
     const response = await fetch(`/api/users/${id}`)
     if (response.ok) {
      setBicycles ((await response.json()).bicycles)
     } else {
       throw await response.json()
     }
   }
useEffect(() => {loadUserDetails()}, [
])
//   const { data: userDetails = NullUser } = useQuery<BicycleType>(
//     ['one-user', id],
//     () => loadUserDetails()
//   )
//   console.log(userDetails);
// //  loadUserDetails()

return (
  <div>
    <h1 className="UserStableName">{user.fullName} stable</h1>
    <Link to="/add" className="addBicycleLink" >
      <button className="addBicycle">Add Bicycle</button>
    </Link>
    {bicycles.map(bicycle => (
      <div key={bicycle.id}>
        <Link to={`/bicycles/${bicycle.id}`}>
          <h2>{bicycle.title}</h2>
        </Link>
        <img src={bicycle.photoURL} alt={bicycle.title} />
      </div>
    ))}

    <article>
</article>

  </div>
)
}