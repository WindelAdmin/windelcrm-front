'use client';
import { LayoutSidebarAppBar } from '@/app/components/UI/Layout';
import ThemeRegistry from '@/app/context/ThemeContext/ThemeRegistry';
import { AvatarProvider } from '@/app/context/avatarProvide';
import React from 'react';




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
