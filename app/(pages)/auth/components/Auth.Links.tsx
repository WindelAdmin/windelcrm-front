import React from 'react';
import Link from 'next/link';

import { Stack } from '@mui/material';
import { TypographyLogin } from '@/app/components/Typography/Typography.Auth/Typography.Link';

export function AuthLinks() {
  return (
    <Stack spacing={1} mt="1rem">
      <Link
        href="/forgot"
        passHref
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        <TypographyLogin text="Esqueceu sua senha?" />
      </Link>
    </Stack>
  );
}
