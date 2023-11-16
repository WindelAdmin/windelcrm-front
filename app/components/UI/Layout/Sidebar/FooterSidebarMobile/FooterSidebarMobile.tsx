import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import Link from 'next/link'
import HelpIcon from '@mui/icons-material/Help'

export function FooterSidebarMobile() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '300px',
        height: '5rem',
        backgroundColor: 'primary.600',
        p: '1rem',
        position: 'fixed',
        bottom: 0
      }}
    >
      <Link href="/help" passHref>
        <Stack
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            borderRadius: '5px',
            width: '12rem',
            height: '2.75rem',
            backgroundColor: 'primary.100',
            cursor: 'pointer'
          }}
        >
          <HelpIcon
            sx={{
              color: '#fff',
              backgroundColor: 'primary.100',
              fontSize: '2rem',
              borderRadius: '5px',
              ':hover': {
                backgroundColor: 'info.600'
              }
            }}
          />

          <Typography
            sx={{
              fontStyle: 'normal',
              fontWeight: 400,
              fontSize: '1rem',
              lineHeight: '1.3rem',
              color: '#fff'
            }}
          >
            Precisa de ajuda
          </Typography>
        </Stack>
      </Link>
    </Box>
  )
}
