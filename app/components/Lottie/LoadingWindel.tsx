'use client';
import React from 'react';
import Lottie from 'lottie-react';
import LoadingWindel from '../../../public/assets/lottie/loader-simple.json';

const style = {
  height: 100,
  width: 100,
  display: 'flex',
  alignItens: 'center',
  justifyContent: 'center',
};

export function LoadWindel() {
  return <Lottie animationData={LoadingWindel} style={style} />;
}
