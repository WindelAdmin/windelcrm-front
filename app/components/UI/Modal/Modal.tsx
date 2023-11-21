import { Box, Dialog, DialogContent } from '@mui/material';
import { TypographyTitle } from '../Typography/Typography.Title/WTypography.Title';

import { DarkTheme } from '@/app/context/ThemeContext/Themes/DarkTheme';
import { LightTheme } from '@/app/context/ThemeContext/Themes/LightTheme';
import { useAppThemeContext } from '@/app/hooks/UseAppTheme.hook';
import { WModalProps } from "./Modal.interface";
''
export function WModal({
  open,
  onClose,
  title,
  icon,
  children,
  width = '20rem',
}: WModalProps) {
  const { themeName } = useAppThemeContext();
  return (
    <Dialog
      onClose={onClose}
      open={open}
      sx={{
        '& .MuiDialog-paper': {
          borderRadius: '10px',
          width: width,
          bgcolor:
            themeName === 'light'
              ? LightTheme.palette.common.white
              : DarkTheme.palette.common.black,
        },
      }}
    >
      <Box
        sx={{
          marginTop: '2rem',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          fontSize: '5rem',
        }}
      >
        {icon}
      </Box>
      <TypographyTitle
        fontWeight={700}
        text={title}
        textAlign={'center'}
        sx={{
          fontSize: { xs: '1.2rem', sm: '1.4rem' },
        }}
      />

      <DialogContent
        sx={{
          padding: 1,
          borderRadius: '10px',
        }}
      >
        {children}
      </DialogContent>
    </Dialog>
  );
}
