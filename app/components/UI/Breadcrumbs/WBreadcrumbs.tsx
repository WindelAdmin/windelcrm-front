/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import { Box, Breadcrumbs } from '@mui/material';
import * as React from 'react';


import {
  AccountCircle,
  AssessmentRounded,
  BubbleChart,
  DashboardRounded,
  HelpRounded,
  Home,
  MonetizationOnRounded,
  Notifications,
  PointOfSaleRounded,
  PostAddRounded,
  SecurityRounded,
  ShoppingCartRounded,
} from '@mui/icons-material';

import { DarkTheme } from '@/app/context/ThemeContext/Themes/DarkTheme';
import { LightTheme } from '@/app/context/ThemeContext/Themes/LightTheme';
import { useAppThemeContext } from '@/app/hooks/UseAppTheme.hook';
import Link from 'next/link';
import { TypographyText } from '../Typography/Typography.Text/WTypography.Text';
import { BreadcrumbsProps, IconMapping } from './Breadcrumbs.Interface';

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
            ? LightTheme.palette.info.main
            : DarkTheme.palette.warning.main,
      }}
      fontSize='inherit'
    />
  );
}

export function WBreadcrumbs({ father, content }: BreadcrumbsProps) {
  const { themeName } = useAppThemeContext();
  const iconToRender = getIconToRender(father);

  return (
    <Box paddingX='1rem' sx={{ pt: '1rem', pb: '1rem' }}>
      <Breadcrumbs
        aria-label='breadcrumb'
        sx={{
          color:
            themeName === 'light'
              ? LightTheme.palette.info.main
              : DarkTheme.palette.deepGrey.light,
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
                  ? LightTheme.palette.info.main
                  : DarkTheme.palette.deepGrey.light,
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
                  ? LightTheme.palette.info.main
                  : DarkTheme.palette.deepGrey.light,
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
                    ? LightTheme.palette.info.dark
                    : DarkTheme.palette.deepGrey.dark,
              }}
              fontSize='inherit'
            />
            <TypographyText
              fontSize='0.9rem'
              fontWeight={600}
              text={content}
              color={
                themeName === 'light'
                  ? LightTheme.palette.info.dark
                  : DarkTheme.palette.deepGrey.dark
              }
            />
          </Box>
        )}
      </Breadcrumbs>
    </Box>
  );
}
