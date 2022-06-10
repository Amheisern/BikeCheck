import React from 'react'
import { BicycleType } from '../types'
import { Link } from 'react-router-dom'
// import { getUser } from '../auth'
 import defaultUserImage from '../images/logo.png'
//import { useQuery } from 'react-query'




export function SingleBicycleFromList({ bicycle }: { bicycle: BicycleType }) {
 

  return (
    <article>
      <Link to={`/bicycles/${bicycle.id}`}>
        <img src={bicycle.photoURL} />
      </Link>
      <ul>
        <li>
          <strong>{bicycle.title}</strong> ({bicycle.reviews?.length})
        </li>
        <li>
          <img
            src={defaultUserImage ?? bicycle.photoURL}
            width="24px"
            height="24px"
          />
        </li>
      </ul>
    </article>
  )
}
