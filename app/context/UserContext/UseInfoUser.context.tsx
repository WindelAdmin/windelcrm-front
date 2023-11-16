'use client'
import { useContext } from 'react'
import { UserContext } from './User.context'
import { InfoUserProps } from './interface'

export const useInfoUser = () => {
  const context: InfoUserProps = useContext(UserContext)
  return context.infoUser
}
