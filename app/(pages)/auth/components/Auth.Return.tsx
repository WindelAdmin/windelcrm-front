import { Box } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';

import { useRouter } from 'next/navigation';
import { useAppThemeContext } from '@/app/Theme/useAppTheme';
import { WButton } from '@/app/components/Button/WButton';


export function AuthReturn() {
  const { themeName } = useAppThemeContext();
  const isLightTheme = themeName === 'light';
  const router = useRouter();
  return (
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        alignSelf: 'start',
        paddingTop: '2rem',
      }}
    >
      <WButton
        color={isLightTheme ? 'info' : 'deepGrey'}
        variant='text'
        textButton='voltar'
        startIcon={<ArrowBack />}
        size='small'
        onClick={() => {
          router.push('/');
        }}
      />
    </Box>
  );
}
