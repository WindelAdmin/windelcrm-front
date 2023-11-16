'use client';
import WindelLottie from '@/public/assets/lottie/loader-windel.json';
import { Box } from '@mui/material';
import Lottie from 'lottie-react';

const style = {
  height: 100,
  width: 100,
};

export function WindelLoading() {
  return (
    <Box>
      <Lottie animationData={WindelLottie} style={style} />
    </Box>
  );
}
