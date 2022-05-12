import React from 'react'
import { useQuery } from 'react-query'
import { BicycleType } from '../types'
import  defaultBikeImage  from '../images/default.jpg'
import defaultUserImage from '../images/logo.png'


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
        <section className="container">
          {bicycles.map(function (bicycles) {
            return (
              <article key={bicycles.id}>
                <img src={defaultBikeImage} width="400" height="400" />
                <ul>
                  <li>
                    {bicycles.id}
                    <strong>{bicycles.title}</strong>
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
          })}
        </section>
      </div>
    </>
  )
}