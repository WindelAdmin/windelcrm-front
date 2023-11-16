import { useAppThemeContext } from '@/app/context/Theme/useAppThemeContext';
import React, { useState } from 'react';
import { MenuMainProps } from '../../Sidebar/Sidebar.Interface';
import { List, Paper } from '@mui/material';
import { darkTheme, lightTheme } from '@/app/context/Theme/themes';
import { MenuItemSidebar } from '../../Sidebar/MenuItemSidebar/MenuItemSidebar';

export function HeaderSidebarMobile() {
  const { themeName } = useAppThemeContext();
  const [searchData, setSearchData] = useState({
    page: 1,
  });
  const menuMain: MenuMainProps[] = [
    {
      id: 1,
      menuId: 'alex',
      parent: false,
      children: false,
      description: 'menuInicial',
      icon: null,
      link: null,
    },
    {
      id: 1,
      menuId: 'alex',
      parent: false,
      children: false,
      description: 'menuInicial',
      icon: null,
      link: null,
    },
  ];

  return (
    <>
      <Paper
        elevation={0}
        sx={{
          overflowX: 'hidden',
          borderRadius: 0,
          bgcolor:
            themeName === 'light'
              ? lightTheme.palette.info.main
              : darkTheme.palette.common.black,
        }}
      >
        <List
          sx={{
            width: '100%',
            maxWidth: 280,
            bgcolor:
              themeName === 'light'
                ? lightTheme.palette.info.main
                : darkTheme.palette.common.black,
          }}
        >
          {menuMain?.map((opt: MenuMainProps, idx: number) => (
            <MenuItemSidebar
              key={opt.id}
              module={opt}
              idx={idx}
              menuData={menuMain}
            />
          ))}
        </List>
      </Paper>
    </>
  );
}
