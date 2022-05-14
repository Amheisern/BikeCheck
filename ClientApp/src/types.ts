//This is code to deal with the star rating 
import {CSSProperties} from 'react'

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