import React from 'react'
import { useQuery } from 'react-query'
import { BicycleType } from '../types'


export function Landing() {
const { data: bicycles = []} = useQuery<BicycleType[]>(
'bicycles',
async function () {
  const response = await fetch('/api/Bicycles')
  //Dont need await since it is react query
  return response.json()
}
)
console.log({bicycles})

  return (
    <>
      <div>
        <section></section>
      </div>
    </>
  )
}