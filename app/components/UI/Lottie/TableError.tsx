import { useLottieAnimation } from '@/app/hooks/Lottie/useLottieAnimation';
import { Box, Stack } from '@mui/material';
import TableErrorFiles from '../../../public/assets/lottie/TableError.json';
import { TypographyTitle } from '../Typography/Typography.Title/WTypography.Title';


export function TableError() {
  const { lottieView } = useLottieAnimation({
    width: 300,
    height: 300,
    animationData: TableErrorFiles,
    typeAnimation: 'simple',
  });

  return (
    <Stack mt="6rem">
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {lottieView}
      </Box>
      <TypographyTitle
        textAlign="center"
        text="Ops! algo deu errado, tente novamente mais tarde."
        fontSize="1.4rem"
        fontWeight={500}
      />
    </Stack>
  );
}
