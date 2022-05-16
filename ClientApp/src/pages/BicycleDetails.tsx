import React from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router'
import { BicycleType, CSSStarsProperties} from '../types'
import defaultBikeImage from '../images/default.jpg'
import defaultUserImage from '../images/logo.png'

  
const NullBicycle: BicycleType = {
  id: undefined,
  userId: undefined,
  title: '',
  description: '',
  frame: '',
  fork: '',
  saddle: '',
  handlebar: '',
  bottomBracket: '',
  chainRing: '',
  rearCog: '',
  crank: '',
  wheels: '',
  pedals: '',
  other: '',
  reviews: [],
}

export function BicycleDetails() {
  const {id} = useParams<{id: string}>()
  const { data: bicycle = NullBicycle } = useQuery<BicycleType>(
    ['one-bicycle', id], 
    () => loadBicycleDetails()
  )
  async function loadBicycleDetails() {
    const response = await fetch(`/api/bicycles/${id}`)
    if (response.ok) {
      return response.json()
    } else {
      throw await response.json()
    }
  }
  return (
    <div>
      <article>
        <img src={defaultBikeImage} width="400" height="400" />
        <ul>
          <li>
            <strong>{bicycle.title}</strong>
            {bicycle.reviews?.map((reviews) => (
              <li key={reviews?.id}>
                {bicycle.reviews.length}
                <span
                  className="stars"
                  style={{ '--rating': reviews?.stars } as CSSStarsProperties}
                  aria-label={`Star rating of this bike is ${reviews?.stars} out of 5.`}
                ></span>
              </li>
            ))}
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
    </div>
  )
}