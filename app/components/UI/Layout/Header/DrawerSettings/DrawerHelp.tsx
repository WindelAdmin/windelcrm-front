import { Help } from '@mui/icons-material'
import { Stack, Box, Typography, colors } from '@mui/material'
import React from 'react'

import Link from 'next/link'
import { useAppThemeContext } from '@/app/context/Theme/useAppThemeContext'
import { darkTheme } from '@/app/context/Theme/themes'

export function DrawerHelp() {
  const { themeName, toggleTheme } = useAppThemeContext()
  const titleAndIconColor =
    themeName === 'light'
      ? darkTheme.palette.text.primary
      : darkTheme.palette.text.primary
  return (
    <Stack sx={{ m: 0, p: 2, mb: '4rem' }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row',
          gap: '1rem',
          mb: '4px'
        }}
      >
        <Help sx={{ color: titleAndIconColor, fontSize: '1.2rem' }} />
        <Typography
          sx={{
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '19px',
            color: titleAndIconColor
          }}
        >
          Precisa de Ajuda?
        </Typography>
      </Box>
      <Link
        href="/help"
        passHref
        style={{
          textDecoration: 'none',
          textAlign: 'left',
          fontSize: '1rem',
          letterSpacing: '0.025rem',
          fontWeight: 300,
          zIndex: 2,
          paddingLeft: '.5rem'
        }}
      >
        <Typography
          sx={{
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '12px',
            lineHeight: '16px',
            ml: '2.1rem',
            color: titleAndIconColor
          }}
        >
          Visite a nossa Central de Ajuda.
        </Typography>
      </Link>
    </Stack>
  )
}
