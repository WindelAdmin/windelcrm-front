'use client';
import React from 'react';
import { Typography, Link } from '@mui/material';

import CookieConsent from 'react-cookie-consent';
import {
  cookieConsentment,
  cookieConsentmentPolicy,
} from '@/utils/Auth.Message';

export function AuthCookie() {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Aceito"
      cookieName="CookieConsent"
      style={{
        fontSize: '14px',
        background: '#0d47a1',
      }}
      buttonStyle={{
        background: '#fff',
        color: '#0d47a1',
        fontSize: '12px',
        textTransform: 'uppercase',
        minWidth: '64px',
        padding: '10px 15px',
        borderRadius: '1rem',
      }}
      expires={150}
    >
      {cookieConsentment}
      <Typography component="span">
        <Link
          href="/politicaPrivacidade"
          sx={{
            fontSize: '15px',
            color: '#fff',
            ':hover': {
              color: '#64b5f6',
            },
            ':visited': {
              color: '#fff',
            },
          }}
        >
          {cookieConsentmentPolicy}
        </Link>
      </Typography>
    </CookieConsent>
  );
}
