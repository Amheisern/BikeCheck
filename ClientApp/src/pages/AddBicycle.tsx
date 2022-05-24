import React, { useState } from 'react'
import { useMutation } from 'react-query'
import { useNavigate } from 'react-router'
import { authHeader, getUser } from '../auth'
import { APIError, BicycleType } from '../types'
import { useDropzone } from 'react-dropzone'

export function AddBicycle() {
  const history = useNavigate()
  const user = getUser()

  const [newBicycle, setNewBicycle] = useState<BicycleType>({
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
    photoURL: '',
  })
  const [errorMessage, setErrorMessage] = useState('')

  async function submitNewBicycle(BicycleToCreate: BicycleType) {
    const response = await fetch('/api/bicycles', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: authHeader(),
      },
      body: JSON.stringify(BicycleToCreate),
    })
    if (response.ok) {
      return response.json()
    } else {
      throw await response.json()
    }
  }
  const createNewBicycle = useMutation(submitNewBicycle, {
    onSuccess: () => {
      history('/')
      // I will need to change this redirection to a users page
    },
    onError: function (apiError: APIError) {
      setErrorMessage(Object.values(apiError.errors).join('/'))
    },
  })

  async function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    createNewBicycle.mutate(newBicycle)
  }

  function handleFormChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const value = event.target.value
    const fieldName = event.target.name
    const updatedBicycle = { ...newBicycle, [fieldName]: value }
    setNewBicycle(updatedBicycle)
  }

  return (
    <div>
      <form onSubmit={handleFormSubmit} className="form-horizontal">
        <fieldset>
          <h1 className="addABikeTitle">Add a new bike {user.fullName}</h1>
          {errorMessage ? <p className="form-error">{errorMessage}</p> : null}
          <div className="form-group">
            <label className="col-md-4 control-label" htmlFor="title">
              Title
            </label>
            <div className="col-md-4">
              <input
                required
                id="title"
                name="title"
                value={newBicycle.title}
                onChange={handleFormChange}
                type="text"
                placeholder="Type a title (required)"
                className="form-control input-md"
              />
            </div>
          </div>

          <div className="form-group">
            <label className="col-md-4 control-label" htmlFor="description">
              Description
            </label>
            <div className="col-md-4">
              <textarea
                className="form-control"
                required
                id="description"
                name="description"
                placeholder="Description (required)"
                value={newBicycle.description}
                onChange={handleFormChange}
              >
                Type a description(required)
              </textarea>
            </div>
          </div>

          <div className="form-group">
            <label className="col-md-4 control-label" htmlFor="frame">
              Frame
            </label>
            <div className="col-md-4">
              <input
                id="frame"
                name="frame"
                value={newBicycle.frame}
                onChange={handleFormChange}
                type="text"
                placeholder="What are you riding?"
                className="form-control input-md"
              />
            </div>
          </div>

          <div className="form-group">
            <label className="col-md-4 control-label" htmlFor="fork">
              Fork
            </label>
            <div className="col-md-4">
              <input
                id="fork"
                name="fork"
                value={newBicycle.fork}
                onChange={handleFormChange}
                type="text"
                placeholder="What is the make of the fork?"
                className="form-control input-md"
              />
            </div>
          </div>

          <div className="form-group">
            <label className="col-md-4 control-label" htmlFor="saddle">
              Saddle
            </label>
            <div className="col-md-4">
              <input
                id="saddle"
                name="saddle"
                value={newBicycle.saddle}
                onChange={handleFormChange}
                type="text"
                placeholder="What are you sitting on?"
                className="form-control input-md"
              />
            </div>
          </div>

          <div className="form-group">
            <label className="col-md-4 control-label" htmlFor="handlebar">
              Handlebars
            </label>
            <div className="col-md-4">
              <input
                id="handlebar"
                name="handlebar"
                value={newBicycle.handlebar}
                onChange={handleFormChange}
                type="text"
                placeholder="What are you gripping?"
                className="form-control input-md"
              />
            </div>
          </div>

          <div className="form-group">
            <label className="col-md-4 control-label" htmlFor="bottomBracket">
              Bottom Bracket
            </label>
            <div className="col-md-4">
              <input
                id="bottomBracket"
                name="bottomBracket"
                value={newBicycle.bottomBracket}
                onChange={handleFormChange}
                type="text"
                placeholder="What are you spinning ?"
                className="form-control input-md"
              />
            </div>
          </div>

          <div className="form-group">
            <label className="col-md-4 control-label" htmlFor="chainRing">
              Chain Ring
            </label>
            <div className="col-md-4">
              <input
                id="chainRing"
                name="chainRing"
                value={newBicycle.chainRing}
                onChange={handleFormChange}
                type="text"
                placeholder="How many teeth we working with?"
                className="form-control input-md"
              />
            </div>
          </div>

          <div className="form-group">
            <label className="col-md-4 control-label" htmlFor="rearCog">
              Rear Cog
            </label>
            <div className="col-md-4">
              <input
                id="rearCog"
                name="rearCog"
                value={newBicycle.rearCog}
                onChange={handleFormChange}
                type="text"
                placeholder="How many teeth we working with?"
                className="form-control input-md"
              />
            </div>
          </div>

          <div className="form-group">
            <label className="col-md-4 control-label" htmlFor="crank">
              Crank
            </label>
            <div className="col-md-4">
              <input
                id="crank"
                name="crank"
                value={newBicycle.crank}
                onChange={handleFormChange}
                type="text"
                placeholder="What are you cranking?"
                className="form-control input-md"
              />
            </div>
          </div>

          <div className="form-group">
            <label className="col-md-4 control-label" htmlFor="wheels">
              Wheels
            </label>
            <div className="col-md-4">
              <input
                id="wheels"
                name="wheels"
                value={newBicycle.wheels}
                onChange={handleFormChange}
                type="text"
                placeholder="What are you skidding?"
                className="form-control input-md"
              />
            </div>
          </div>

          <div className="form-group">
            <label className="col-md-4 control-label" htmlFor="pedals">
              Pedals
            </label>
            <div className="col-md-4">
              <input
                id="pedals"
                name="pedals"
                value={newBicycle.pedals}
                onChange={handleFormChange}
                type="text"
                placeholder="What are you standing on?"
                className="form-control input-md"
              />
            </div>
          </div>

          <div className="form-group">
            <label className="col-md-4 control-label" htmlFor="other">
              Other
            </label>
            <div className="col-md-4">
              <textarea
                className="form-control"
                id="other"
                name="other"
                placeholder="What else you got?"
                value={newBicycle.other}
                onChange={handleFormChange}
              ></textarea>
            </div>
          </div>
          <div className="form-group">
            <div className="col-md-4">
              <button id="submit" name="submit" className="btn btn-success">
                Submit
              </button>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  )
}
