'use client'
import { createContext, useState } from 'react'
import { AvatarProviderProps } from './interface'

import { useInfoUser } from '../userProvider/useInfoUser'

export interface UserAvatarProps {
  foto?: string
  id?: number
}

export const AvatarContext = createContext({
  picture: '',
  handleChangeAvatar: (newPicture: string) => {}
})

export function AvatarProvider({ children }: AvatarProviderProps) {
  const user = useInfoUser()
  const [picture, setPicture] = useState('')


  const handleChangeAvatar = (newPicture: string) => {
    setPicture(newPicture)
  }
  return (
    <AvatarContext.Provider value={{ picture, handleChangeAvatar }}>
      {children}
    </AvatarContext.Provider>
  )
}
