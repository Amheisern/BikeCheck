import React from 'react'
import { BicycleType } from '../types'
// import defaultBikeImage from '../images/default.jpg'
import defaultUserImage from '../images/logo.png'
import { Link } from 'react-router-dom'
// onError={(e) => (e.target.src = defaultUserImage)} 
// need to figure out how to get the default image to display
// Need to write up this destructuring 1:58:00 in the video
export function SingleBicycleFromList({ bicycle }: { bicycle: BicycleType }) {
  return (
    <article>
      <Link to={`/bicycles/${bicycle.id}`}>
        <img src={bicycle.photoURL} 
        width="400" height="400" />
      </Link>
      <ul>
        <li>
          <strong>{bicycle.title}</strong>({bicycle.reviews?.length})
        </li>
        <li>
          <img
            src={defaultUserImage}
            width="24px"
            height="24px"
            alt="chubbmo"
          />
        </li>
      </ul>
    </article>
  )
}
