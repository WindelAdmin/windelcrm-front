'use client';

import { useLottieAnimation } from '@/app/hooks/Lottie/useLottieAnimation';
import notAuthorizedDark from '../../../public/assets/lottie/notAuthorizedDark.json';
import notAuthorizedLight from '../../../public/assets/lottie/notAuthorizedLight.json';



export function NotAuthorizedLottieDark() {
  const { lottieView } = useLottieAnimation({
    animationData: notAuthorizedDark,
    typeAnimation: 'simple',
  });

  return lottieView;
}

export function NotAuthorizedLottieLight() {
  const { lottieView } = useLottieAnimation({
    animationData: notAuthorizedLight,
    typeAnimation: 'simple',
  });

  return lottieView;
}
