import React from 'react'
import { Paper } from '@mui/material'
import { WPaperProps } from './Paper.Interface'

export function WPaper({ elevation = 12, children, ...rest }: WPaperProps) {
  return (
    <Paper elevation={elevation} {...rest}>
      {children}
    </Paper>
  )
}
