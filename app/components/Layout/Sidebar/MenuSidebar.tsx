import React, { useState } from 'react';
import { MenuItemSidebar } from './MenuItemSidebar/MenuItemSidebar';
import { List, Paper, colors } from '@mui/material';
import { fetchMenuSidebarData } from '@/app/hooks/Menu/Hook.Menu.Sidebar';
import { MenuMainProps } from './Sidebar.Interface';
import { darkTheme, lightTheme } from '../../ThemeRegistry/theme';
import { useAppThemeContext } from '@/app/context/theme/useAppTheme';

/* interface SidebarMenuProps {
  toggleDrawer: () => void;
  open: boolean;
  toggleDrawerMobile?: (event: React.KeyboardEvent | React.MouseEvent) => void;
} */

export function SidebarMenu() {
  const { themeName } = useAppThemeContext();
  const [searchData, setSearchData] = useState({
    page: 1,
  });

  const { data, isLoading, error, refetch } = fetchMenuSidebarData(
    'menu',
    searchData
  );

  const menuMain = data?.filter((reg: MenuMainProps) => reg.parent === true);

  return (
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
            menuData={data}
          />
        ))}
      </List>
    </Paper>
  );
}
