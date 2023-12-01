'use client';
import LoadingWindel from '@/public/assets/lottie/loader-simple.json';
import Lottie from 'lottie-react';

const style = {
  height: 100,
  width: 100,
  display: 'flex',
  alignItens: 'center',
  justifyContent: 'center',
};

export function LoadWindel() {
  return <Lottie animationData={LoadingWindel} autoPlay={true} style={style} />;
}
