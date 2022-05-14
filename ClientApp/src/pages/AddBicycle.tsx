import React, { useState } from 'react'
import { BicycleType } from '../types'

export function AddBicycle() {
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
  })
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
      <form className="form-horizontal">
        <fieldset>
          <h1>Add a new bike</h1>
          <div className="form-group">
            <label className="col-md-4 control-label" htmlFor="title">
              Title
            </label>
            <div className="col-md-4">
              <input
                id="title"
                name="title"
                value={newBicycle.title} 
                onChange={handleFormChange}
                type="text"
                placeholder="Type a title"
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
                id="description"
                name="description"
                value={newBicycle.description}
                onChange={handleFormChange}
              >
                Type a description
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
            <label className="col-md-4 control-label" htmlFor="handlebars">
              Handlebars
            </label>
            <div className="col-md-4">
              <input
                id="handlebars"
                name="handlebars"
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
              <textarea className="form-control" 
              id="other" 
              name="other" 
              value={newBicycle.other} 
              onChange={handleFormChange}>
                What else you got?
              </textarea>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  )
}
