import { Icon } from 'next/dist/lib/metadata/types/metadata-types'
import React from 'react'
interface NotificationsActionsPropos{
  text: string
}
export function NotificationActions({text}: NotificationsActionsPropos){
  return(
    <p>{text}</p>
  )
}