import React from 'react'
import { Box, Card, CardMedia, Typography } from '@mui/material'
import { LogoSidebarProps } from './LogoSidebar.Interface'

export function LogoSidebar({ open }: LogoSidebarProps) {
  return (
    <Box
      height="4rem"
      width="100%"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        mb: '1rem',
        pt: '1rem'
      }}
    >
      <Card elevation={0} sx={{ bgcolor: 'primary.100' }}>
        <CardMedia
          component="img"
          alt="Logo Windel"
          height={open ? '40' : '30'}
          image="/logoW.svg"
        />
      </Card>

      {open && (
        <Typography
          position="absolute"
          width="8rem"
          fontWeight="bold"
          fontStyle="italic"
          fontSize="0.7rem"
          color="#fff"
          mt="1.5rem"
        >
          Windel
        </Typography>
      )}
    </Box>
  )
}
