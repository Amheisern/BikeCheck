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

  return (
    <div>
      <form className="form-horizontal">
        <fieldset>
          <h1>Add a new bike</h1>
          <div className="form-group">
            <label className="col-md-4 control-label" htmlFor="Title">
              Title
            </label>
            <div className="col-md-4">
              <input
                id="Title"
                name="Title"
                value={newBicycle.title}                
                type="text"
                placeholder="Type a title"
                className="form-control input-md"
              />
            </div>
          </div>

          <div className="form-group">
            <label className="col-md-4 control-label" htmlFor="Description">
              Description
            </label>
            <div className="col-md-4">
              <textarea
                className="form-control"
                id="Description"
                name="Description"
              >
                Type a description
              </textarea>
            </div>
          </div>

          <div className="form-group">
            <label className="col-md-4 control-label" htmlFor="Frame">
              Frame
            </label>
            <div className="col-md-4">
              <input
                id="Frame"
                name="Frame"
                type="text"
                placeholder="What are you riding?"
                className="form-control input-md"
              />
            </div>
          </div>

          <div className="form-group">
            <label className="col-md-4 control-label" htmlFor="Fork">
              Fork
            </label>
            <div className="col-md-4">
              <input
                id="Fork"
                name="Fork"
                type="text"
                placeholder="What is the make of the fork?"
                className="form-control input-md"
              />
            </div>
          </div>

          <div className="form-group">
            <label className="col-md-4 control-label" htmlFor="Saddle">
              Saddle
            </label>
            <div className="col-md-4">
              <input
                id="Saddle"
                name="Saddle"
                type="text"
                placeholder="What are you sitting on?"
                className="form-control input-md"
              />
            </div>
          </div>

          <div className="form-group">
            <label className="col-md-4 control-label" htmlFor="Handlebars">
              Handlebars
            </label>
            <div className="col-md-4">
              <input
                id="Handlebars"
                name="Handlebars"
                type="text"
                placeholder="What are you gripping?"
                className="form-control input-md"
              />
            </div>
          </div>

          <div className="form-group">
            <label className="col-md-4 control-label" htmlFor="Bottom Bracket">
              Bottom Bracket
            </label>
            <div className="col-md-4">
              <input
                id="Bottom Bracket"
                name="Bottom Bracket"
                type="text"
                placeholder="What are you spinning ?"
                className="form-control input-md"
              />
            </div>
          </div>

          <div className="form-group">
            <label className="col-md-4 control-label" htmlFor="Chain Ring">
              Chain Ring
            </label>
            <div className="col-md-4">
              <input
                id="Chain Ring"
                name="Chain Ring"
                type="text"
                placeholder="How many teeth we working with?"
                className="form-control input-md"
              />
            </div>
          </div>

          <div className="form-group">
            <label className="col-md-4 control-label" htmlFor="Rear Cog">
              Rear Cog
            </label>
            <div className="col-md-4">
              <input
                id="Rear Cog"
                name="Rear Cog"
                type="text"
                placeholder="How many teeth we working with?"
                className="form-control input-md"
              />
            </div>
          </div>

          <div className="form-group">
            <label className="col-md-4 control-label" htmlFor="Crank">
              Crank
            </label>
            <div className="col-md-4">
              <input
                id="Crank"
                name="Crank"
                type="text"
                placeholder="What are you cranking?"
                className="form-control input-md"
              />
            </div>
          </div>

          <div className="form-group">
            <label className="col-md-4 control-label" htmlFor="Wheel set">
              Wheel set
            </label>
            <div className="col-md-4">
              <input
                id="Wheel set"
                name="Wheel set"
                type="text"
                placeholder="What are you skidding?"
                className="form-control input-md"
              />
            </div>
          </div>

          <div className="form-group">
            <label className="col-md-4 control-label" htmlFor="Pedal">
              Pedal
            </label>
            <div className="col-md-4">
              <input
                id="Pedal"
                name="Pedal"
                type="text"
                placeholder="What are you standing on?"
                className="form-control input-md"
              />
            </div>
          </div>

          <div className="form-group">
            <label className="col-md-4 control-label" htmlFor="Other">
              Other
            </label>
            <div className="col-md-4">
              <textarea className="form-control" id="Other" name="Other">
                What else you got?
              </textarea>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  )
}
