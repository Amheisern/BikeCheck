import React, { useState } from 'react'
import { useQuery } from 'react-query'
import { BicycleType } from '../types'
import { SingleBicycleFromList } from '../components/SingleBicycleFromList'

export function Landing() {
  const [filterText, SetFilterText] = useState('')

  const { data: bicycles = [] } = useQuery<BicycleType[]>(
    ['bicycles', filterText],
    async function () {
      let url = '/api/bicycles'
      if (filterText.length !== 0) {
        url = `/api/bicycles?filter=${filterText}`
      }
      const response = await fetch(url)
      //Dont need await since it is react query
      return response.json()
    }
  )

  console.log(filterText)

  return (
    <>
      <div>
        <form className="search">
          <input
            type="text"
            placeholder="Search..."
            value={filterText}
            onChange={function (event) {
              SetFilterText(event.target.value)
            }}
          />
        </form>
        <section className="container">
          {bicycles.map(function (bicycle) {
            return <SingleBicycleFromList key={bicycle.id} bicycle={bicycle} />
          })}
        </section>
      </div>
    </>
  )
}
