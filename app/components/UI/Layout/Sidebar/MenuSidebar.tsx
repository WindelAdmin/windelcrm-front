import React, { useState } from 'react';
import { List, Paper, colors } from '@mui/material';
import { useAppThemeContext } from '@/app/context/Theme/useAppThemeContext';
import { darkTheme, lightTheme } from '@/app/context/Theme/themes';


export function SidebarMenu() {
  const { themeName } = useAppThemeContext();
  const [searchData, setSearchData] = useState({
    page: 1,
  });


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
        
      </List>
    </Paper>
  );
}
