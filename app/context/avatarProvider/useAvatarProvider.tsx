import { useContext } from 'react'
import { AvatarContext } from '.'

export const useAvatarContext = () => {
  return useContext(AvatarContext)
}
