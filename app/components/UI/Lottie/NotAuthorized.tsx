'use client';

import { useLottieAnimation } from '@/app/hooks/UseLottieAnimation.hook';

export function NotAuthorizedLottieDark() {
  const { lottieView } = useLottieAnimation({
    animationData: NotAuthorizedLottieDark,
    typeAnimation: 'simple',
  });

  return lottieView;
}

export function NotAuthorizedLottieLight() {
  const { lottieView } = useLottieAnimation({
    animationData: NotAuthorizedLottieLight,
    typeAnimation: 'simple',
  });

  return lottieView;
}
