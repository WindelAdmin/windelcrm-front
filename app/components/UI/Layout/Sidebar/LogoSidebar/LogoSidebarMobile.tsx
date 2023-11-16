import React from 'react'
import { Box } from '@mui/material'
import { LogoSidebarProps } from './LogoSidebar.Interface'

export function LogoSidebarMobile({ open }: LogoSidebarProps) {
  return (
    <Box
      width="100%"
      sx={{
        display: 'flex',
        alignItems: 'start',
        justifyContent: 'center',
        flexDirection: 'column',
        p: '1.5rem',
        pl: '3rem'
      }}
    ></Box>
  )
}
