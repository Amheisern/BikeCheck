import React from 'react'
import { BicycleType } from '../types'
import { Link } from 'react-router-dom'
// import { getUser } from '../auth'


// const user = getUser()
export function SingleBicycleFromList({ bicycle }: { bicycle: BicycleType }) {
  return (
    <article>
      <Link to={`/bicycles/${bicycle.id}`}>
        <img src={bicycle.photoURL} width="400" height="400" />
      </Link>
      <ul>
        <li>
          <strong>{bicycle.title}</strong>({bicycle.reviews?.length})
        </li>
        <li>
          <img
            src={bicycle.photoURL}
            width="24px"
            height="24px"
          />
        </li>
      </ul>
    </article>
  )
}
