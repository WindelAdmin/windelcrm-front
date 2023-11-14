'use client';
import 'app/components/Form/TraducoesYup.ts';
import React from 'react';

import { LayoutSidebarAppBar } from '../components/Layout';
import { AvatarProvider } from '../context/avatarProvider';
import ThemeRegistry from '../context/Theme/ThemeRegistry';

export default function AuthenticatedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <ThemeRegistry>
          <AvatarProvider>
            <LayoutSidebarAppBar>{children}</LayoutSidebarAppBar>
          </AvatarProvider>
        </ThemeRegistry>
      </body>
    </html>
  );
}
