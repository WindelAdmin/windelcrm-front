import React from 'react'
import { Box, Typography } from '@mui/material'

export function PrivacyPolicy() {
  return (
    <Box
      sx={{
        p: { xs: '1rem', sm: '1rem', md: '2rem' }
      }}
    >
      <Typography
        sx={{
          fontStyle: 'normal',
          fontWeight: 400,
          fontSize: '0.75rem',
          lineHeight: '1rem',
          color: 'primary.200',
          cursor: 'pointer',
          textDecoration: 'none',
          textAlign: 'center'
        }}
      >
        FortBrasil Administradora de Cartões S/A - Av. Bezerra de Menezes, 100 -
        Farias Brito. CEP: 60325-000 - Fortaleza/CE CNPJ: 02.732.968/0001-38
      </Typography>
    </Box>
  )
}
