import React from 'react'
import { Box, Stack } from '@mui/material'
import { PrivacyPolicy } from './privacyPolicy'
import { SocialMedias } from './socialMedias'

interface FooterLayoutProps {
  open: boolean
  isFullScreen?: boolean
}

export function FooterLayout({ open }: FooterLayoutProps) {
  return (
    <>
      <Stack sx={{ display: { xs: 'none', sm: 'none', md: 'flex' } }}>
        <Box
          sx={{
            backgroundColor: 'primary.500',
            height: open ? '80px' : '70px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
            position: 'fixed',
            top: `calc(100vh - ${open ? '80' : '70'}px)`,
            width: `calc(100% - ${open ? '300' : '72'}px)`,
            borderTop: '0.5px solid #cccccc'
          }}
        >
          <PrivacyPolicy />
          <SocialMedias />
        </Box>
      </Stack>
      <Stack sx={{ display: { xs: 'flex', sm: 'flex', md: 'none' } }}>
        <Box
          sx={{
            backgroundColor: 'primary.500',
            height: '7rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'column',
            position: 'relative',
            width: '100%'
          }}
        >
          <SocialMedias />
          <PrivacyPolicy />
        </Box>
      </Stack>
    </>
  )
}
