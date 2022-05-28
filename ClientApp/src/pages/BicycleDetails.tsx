import React, { useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { useNavigate, useParams } from 'react-router'
import { BicycleType, NewReviewType } from '../types'
import defaultUserImage from '../images/logo.png'
import { authHeader, getUserId, isLoggedIn } from '../auth'
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
  // const user = getUser()
  const [newReview, setNewReview] = useState<NewReviewType>({
    id: undefined,
    body: '',
    stars: 5,
    summary: '',
    createdAt: new Date(),
    bicycleId: Number(id),
  })

  const history = useNavigate()

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
  async function handleSubmitNewReview(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault()
    createNewReview.mutate(newReview)
  }

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

  async function handleDeleteBicycle(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const response = await fetch(`/api/bicycles/${id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        Authorization: authHeader(),
      },
    })
    if (response.status === 200 || response.status === 204) {
      history('/')
    }
  }
  // ;(event) => {
  //   event.preventDefault()
  //   createNewReview.mutate(newReview)
  // }
  return (
    <div>
      <article>
        {bicycle.photoURL ? (
          <img alt="bicycle Photo" width={400} src={bicycle.photoURL} />
        ) : null}
        <ul>
          <div>
            <strong>{bicycle.title}</strong>
            {bicycle.reviews?.map((reviews) => (
              <li key={reviews?.id}>
                <div className="author">
                  <a href={`mailto:${reviews.user.email}`}>
                    {reviews.user.fullName}
                  </a>{' '}
                  said: <em>{reviews.summary}</em>
                </div>
                <div className="body">
                  <p>{reviews.body}</p>
                </div>
              </li>
            ))}
          </div>
          <li>
            <img
              src={defaultUserImage}
              width="24px"
              height="24px"
              alt="chubbmo"
            />
          </li>
        </ul>
        {bicycle.userId === getUserId() ? (
          <form onSubmit={handleDeleteBicycle}>
            <button>Delete Bicycle</button>
          </form>
        ) : null}
      </article>
      {isLoggedIn() ? (
        <form onSubmit={handleSubmitNewReview}>
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
