import { Box, Dialog, DialogContent } from '@mui/material';
import { TypographyTitle } from '../Typography/Typography.Title/WTypography.Title';

import { darkTheme, lightTheme } from '@/app/context/Theme/themes';
import { useAppThemeContext } from '@/app/context/Theme/useAppThemeContext';
import { WModalProps } from "./Modal.interface";
''
export function WModal({
  open,
  title,
  icon,
  children,
  width = '20rem',
}: WModalProps) {
  const { themeName } = useAppThemeContext();
  return (
    <Dialog
      open={open}
      sx={{
        '& .MuiDialog-paper': {
          borderRadius: '10px',
          width: width,
          bgcolor:
            themeName === 'light'
              ? lightTheme.palette.common.white
              : darkTheme.palette.common.black,
        },
      }}
    >
      <Box
        sx={{
          marginTop: '.5rem',
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
          padding: 2,
          borderRadius: '10px',
        }}
      >
        {children}
      </DialogContent>
    </Dialog>
  );
}
