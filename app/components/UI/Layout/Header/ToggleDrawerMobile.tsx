import { useToggleDrawerMobile } from '@/app/context/ToggleDrawerMobile/useToggleDrawerMobile';
import { MenuRounded } from '@mui/icons-material';
import { WIconButton } from '../../IconButton/WButton.Icon';

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
