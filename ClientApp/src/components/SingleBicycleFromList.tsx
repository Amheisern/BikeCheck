import React from 'react'
import { BicycleType } from '../types'
import { Link } from 'react-router-dom'
import { bicycleImageOnErrorHandler, userImageOnErrorHandler } from './defaultImageLoading'
import { getUser } from '../auth'
// onError={(e) => (e.target.src = defaultUserImage)} 
// need to figure out how to get the default image to display
// Need to write up this destructuring 1:58:00 in the video
const user = getUser()
export function SingleBicycleFromList({ bicycle }: { bicycle: BicycleType }) {
  return (
    <article>
      <Link to={`/bicycles/${bicycle.id}`}>
        <img src={bicycle.photoURL} onError={bicycleImageOnErrorHandler} width="400" height="400" />
      </Link>
      <ul>
        <li>
          <strong>{bicycle.title}</strong>({bicycle.reviews?.length})
        </li>
        <li>
          <img
            src={user.photoURL}
            onLoad={bicycleImageOnErrorHandler}
            onError={userImageOnErrorHandler}
            width="24px"
            height="24px"
          />
        </li>
      </ul>
    </article>
  )
}
