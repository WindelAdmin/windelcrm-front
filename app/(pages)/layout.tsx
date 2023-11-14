'use client';
import 'app/components/Form/TraducoesYup.ts';
import React from 'react';

import { LayoutSidebarAppBar } from '../components/Layout';

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import ptBR from 'date-fns/locale/pt-BR';
import ThemeRegistry from '../context/Theme/ThemeRegistry';

export default function AuthenticatedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
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
