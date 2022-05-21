//This is code to deal with the star rating
import { CSSProperties } from 'react'

export interface CSSStarsProperties extends CSSProperties {
  '--rating': number
}

export type BicycleType = {
  id: number | undefined
  userId: string | undefined
  title: string
  description: string
  frame: string
  fork: string
  saddle: string
  handlebar: string
  bottomBracket: string
  chainRing: string
  rearCog: string
  crank: string
  wheels: string
  pedals: string
  other: string
  reviews: ReviewType[]
}
export type ReviewType = {
  id: number | undefined
  summary: string
  body: string
  stars: number
  createdAt?: string
  bicycleId: number
}



export type APIError = {
  errors: Record<string, string[]>
  status: number
  title: string
  traceId: string
  type: string
}
export type NewUserType = {
  password: string
  email: string
  fullName?: string
}

export type LoginUserType = {
  email: string
  password: string
}

export type LoginSuccess = {
  token: string
  user: {
    id: number
    fullName: string
    email: string
  }
}
