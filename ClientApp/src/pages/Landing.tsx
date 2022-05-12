import React from 'react'
import { useQuery } from 'react-query'
import { BicycleType } from '../types'
import { SingleBicycleFromList } from '../components/SingleBicycleFromList'

export function Landing() {
  const { data: bicycles = [] } = useQuery<BicycleType[]>(
    'bicycles',
    async function () {
      const response = await fetch('/api/Bicycles')
      //Dont need await since it is react query
      return response.json()
    }
  )

  return (
    <>
      <div>
        <section className="container">
          {bicycles.map(function (bicycle) {
            return <SingleBicycleFromList key={bicycle.id} bicycle={bicycle} />
          })}
        </section>
      </div>
    </>
  )
}
