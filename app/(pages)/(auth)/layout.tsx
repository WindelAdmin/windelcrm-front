'use client';
import { LayoutSidebarAppBar } from '@/app/components/UI/Layout';
import ThemeRegistry from '@/app/context/ThemeContext/ThemeRegistry';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { ptBR } from 'date-fns/locale';
import React from 'react';

export default function AuthenticatedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
       <ThemeRegistry>
            <LocalizationProvider
              dateAdapter={AdapterDateFns}
              adapterLocale={ptBR}
            >
              <LayoutSidebarAppBar>{children}</LayoutSidebarAppBar>
            </LocalizationProvider>
        </ThemeRegistry>
      </body>
    </html>
  );
}
