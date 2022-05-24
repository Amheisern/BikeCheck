import React, { useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { useParams } from 'react-router'
import { BicycleType, CSSStarsProperties, NewReviewType } from '../types'
import defaultBikeImage from '../images/default.jpg'
import defaultUserImage from '../images/logo.png'
import { authHeader, isLoggedIn } from '../auth'
// import format from 'date-fns/format'

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
  photoURL: '',
  reviews: [],
}
// const dateFormat = `EEEE, MMMM do, yyyy 'at' h:mm aaa`

export function BicycleDetails() {
  const { id } = useParams<{ id: string }>()
  const [newReview, setNewReview] = useState<NewReviewType>({
    id: undefined,
    body: '',
    stars: 5,
    summary: '',
    createdAt: new Date(),
    bicycleId: Number(id),
  })

  const { refetch, data: bicycle = NullBicycle } = useQuery<BicycleType>(
    ['one-bicycle', id],
    () => loadBicycleDetails()
  )
  async function submitNewReview(review: NewReviewType) {
    const response = await fetch('/api/reviews', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: authHeader(),
      },
      body: JSON.stringify(review),
    })
    if (response.ok) {
      return response.json()
    } else {
      throw await response.json()
    }
  }
  const createNewReview = useMutation(submitNewReview, {
    onSuccess: () => {
      refetch()
      //clears review after submission
      setNewReview({ ...newReview, body: '', stars: 5, summary: '' })
    },
  })
  function handleNewReviewTextFieldChange(
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) {
    const name = event.target.name
    const value = event.target.value
    setNewReview({ ...newReview, [name]: value })
  }

  // need to figure out if i want and how to implement a rating System
  // Not a fan of the current one.
  // function handleNewReviewStarsChange(newStars: number) {
  //   setNewReview({ ...newReview, stars: newStars })
  // }

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
      {isLoggedIn() ? (
        <form
          onSubmit={(event) => {
            event.preventDefault()
            createNewReview.mutate(newReview)
          }}
        >
          <h3>Leave a review</h3>
          <p>Remember be positive. Spread happiness</p>

          <p className="form-input">
            <label htmlFor="summary">Summary</label>
            <input
              type="text"
              placeholder="Type a summary (required)"
              name="summary"
              value={newReview.summary}
              onChange={handleNewReviewTextFieldChange}
            />
          </p>
          <p className="form-input">
            <label htmlFor="body">Review</label>
            <textarea
              placeholder="Type a review here"
              name="body"
              value={newReview.body}
              onChange={handleNewReviewTextFieldChange}
            ></textarea>
          </p>

          <button id="submit" name="submit" className="btn btn-success">
            Submit
          </button>
        </form>
      ) : null}
    </div>
  )
}
