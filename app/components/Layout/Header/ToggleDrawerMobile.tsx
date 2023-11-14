import React from 'react';
import { MenuRounded } from '@mui/icons-material';
import { useToggleDrawerMobile } from '@/app/context/toggleDrawerMobile/useToggleDrawerMobile';
import { WIconButton } from '../../Button/WButton.Icon';

export function ToggleDrawerMobile() {
  const { toggleDrawerMobile } = useToggleDrawerMobile();
  return (
    <WIconButton
      aria-label="open drawer mobile"
      onClick={() => toggleDrawerMobile(true)}
      sx={{
        display: { xs: 'flex', sm: 'flex', md: 'none' },
      }}
      icon={<MenuRounded sx={{ color: '#fff' }} />}
    />
  );
}
