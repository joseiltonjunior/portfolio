import { HTMLAttributes } from 'react'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  thumb: string
  id: string
  description: string
  title: string
  mobile?: boolean
}
