'use client'
import { useContext } from 'react'
import { UserContext, UserProviderProps } from '../context/User.context'

export interface InfoUserProps {
  infoUser?: UserProviderProps
}

export const useInfoUser = () => {
  const context: InfoUserProps = useContext(UserContext)
  return context.infoUser
}
