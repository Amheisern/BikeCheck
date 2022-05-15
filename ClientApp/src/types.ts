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
}

export type NewUserType = {
  id: number | undefined
  username: string
  password: string
  email: string
  firstName: string
  lastName: string
}

export type APIError = {
  errors: Record<string, string[]>
  status: number
  title: string
  traceId: string
  type: string
}

export type UserLoginType = {
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
