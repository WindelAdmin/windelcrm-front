'use client'
import * as React from 'react';
import { Box, Breadcrumbs } from '@mui/material';


import {
  PostAddRounded,
  MonetizationOnRounded,
  ShoppingCartRounded,
  PointOfSaleRounded,
  AssessmentRounded,
  BubbleChart,
  AccountCircle,
  Home,
  SecurityRounded,
  DashboardRounded,
  HelpRounded,
  Notifications,
} from '@mui/icons-material';

import { TypographyText } from '../Typography/Typography.Text/WTypography.Text';
import Link from 'next/link';
import { BreadcrumbsProps, IconMapping } from './Breadcrumbs.Interface';

import { darkTheme, lightTheme } from '@/app/context/Theme/themes';
import { useAppThemeContext } from '@/app/context/Theme/useAppThemeContext';
const iconMap: IconMapping[] = [
  {
    fatherValue: 'Cadastros',
    icon: <PostAddRounded sx={{ mr: '.5rem' }} fontSize='inherit' />,
  },
  {
    fatherValue: 'Financeiro',
    icon: <MonetizationOnRounded sx={{ mr: '.5rem' }} fontSize='inherit' />,
  },
  {
    fatherValue: 'Compras',
    icon: <ShoppingCartRounded sx={{ mr: '.5rem' }} fontSize='inherit' />,
  },
  {
    fatherValue: 'Vendas',
    icon: <PointOfSaleRounded sx={{ mr: '.5rem' }} fontSize='inherit' />,
  },
  {
    fatherValue: 'Relatórios',
    icon: <AssessmentRounded sx={{ mr: '.5rem' }} fontSize='inherit' />,
  },
  {
    fatherValue: 'Perfil',
    icon: <AccountCircle sx={{ mr: '.5rem' }} fontSize='inherit' />,
  },
  {
    fatherValue: 'Funções',
    icon: <SecurityRounded sx={{ mr: '.5rem' }} fontSize='inherit' />,
  },
  {
    fatherValue: 'Dashboard',
    icon: <DashboardRounded sx={{ mr: '.5rem' }} fontSize='inherit' />,
  },
  {
    fatherValue: 'Central de Ajuda',
    icon: <HelpRounded sx={{ mr: '.5rem' }} fontSize='inherit' />,
  },
  {
    fatherValue: 'Central de Notificações',
    icon: <Notifications sx={{ mr: '.5rem' }} fontSize='inherit' />,
  },
];

function getIconToRender(father: string | undefined): React.ReactElement {
  const { themeName } = useAppThemeContext();
  const matchedIcon = iconMap.find((item) => item.fatherValue === father);
  return matchedIcon ? (
    matchedIcon.icon
  ) : (
    <Home
      sx={{
        mr: 0.5,
        color:
          themeName === 'light'
            ? lightTheme.palette.info.main
            : darkTheme.palette.warning.main,
      }}
      fontSize='inherit'
    />
  );
}

export function WBreadcrumbs({ father, content }: BreadcrumbsProps) {
  const { themeName } = useAppThemeContext();
  const iconToRender = getIconToRender(father);

  return (
    <Box paddingX='1rem' sx={{ pt: '1rem' }}>
      <Breadcrumbs
        aria-label='breadcrumb'
        sx={{
          color:
            themeName === 'light'
              ? lightTheme.palette.info.main
              : darkTheme.palette.deepGrey.light,
        }}
      >
        <Link
          href='/dashboard'
          passHref
          style={{
            textDecoration: 'none',
            color: 'inherit',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Home
            sx={{
              mr: 0.5,
              color:
                themeName === 'light'
                  ? lightTheme.palette.info.main
                  : darkTheme.palette.deepGrey.light,
            }}
            fontSize='inherit'
          />
          <TypographyText fontSize='0.865rem' fontWeight={600} text='Home' />
        </Link>
        {father && (
          <Link
            href='/dashboard'
            passHref
            style={{
              textDecoration: 'none',
              color:
                themeName === 'light'
                  ? lightTheme.palette.info.main
                  : darkTheme.palette.deepGrey.light,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            {iconToRender}
            <TypographyText fontSize='0.9rem' fontWeight={600} text={father} />
          </Link>
        )}
        {content && (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <BubbleChart
              sx={{
                mr: 0.5,
                color:
                  themeName === 'light'
                    ? lightTheme.palette.info.dark
                    : darkTheme.palette.deepGrey.dark,
              }}
              fontSize='inherit'
            />
            <TypographyText
              fontSize='0.9rem'
              fontWeight={600}
              text={content}
              color={
                themeName === 'light'
                  ? lightTheme.palette.info.dark
                  : darkTheme.palette.deepGrey.dark
              }
            />
          </Box>
        )}
      </Breadcrumbs>
    </Box>
  );
}
