import React, { ReactNode } from 'react'

interface NotificationsRootProps{
  children: ReactNode
}
export function NotificationRoot({children}:NotificationsRootProps){
  return(
    <div>
      {children}
    </div>
  )
}