import Lottie from 'lottie-react';
import { useCallback, useEffect, useRef, useState } from 'react';

interface LottieAnmimationProps {
  animationData: any;
  typeAnimation: 'simple' | 'controll' | 'merge';
  initOptions?: {
    initialFrameInterval?: [number, number] | undefined;
    keepLastFrameInit?: boolean;
  };
  speed?: number;
  width?: number | string;
  height?: number | string;
}

type AnimationProps = {
  intervalFrame: [number, number];
  keepLastFrame: boolean;
  action?: Function;
};

export function useLottieAnimation({
  animationData: animationUrl,
  typeAnimation,
  initOptions,
  speed: speedAnimation,
  width,
  height,
}: LottieAnmimationProps) {
  const lottieRef = useRef<any>();

  const isLooping = typeAnimation !== 'controll' ? true : false;

  const [speed, setSpeed] = useState<number>(
    speedAnimation ? speedAnimation : 1
  );

  const [currentFrame, setCurrentFrame] = useState<number>(0);
  const [currentTotalFrames, setCurrentTotalFrames] = useState<number>(0);

  const [currentAnimation, setCurrentAnimation] =
    useState<AnimationProps | null>();
  const [queueAnimations, setQueueAnimations] = useState<AnimationProps[]>([]);

  const [remountKey, setRemountKey] = useState<number>(1);

  const playAnimation = (animations: AnimationProps[]) => {
    setQueueAnimations([...queueAnimations, ...animations]);
  };

   const goToAndPlay = useCallback((frame: number) => {
    lottieRef.current?.goToAndPlay(frame, true);
  }, []);

  const goToAndStop = useCallback((frame: number) => {
    lottieRef.current?.goToAndStop(frame, true);
  }, []);

  const play = () => {
    lottieRef.current?.play();
  };

  const stop = () => {
    lottieRef.current?.stop();
  };

  const destroy = () => {
    lottieRef.current?.destroy();
  };

  useEffect(() => {
    lottieRef.current?.setSpeed(speed);
  }, [speed]);

  const reset = () => {
    setCurrentAnimation(null);
    setQueueAnimations([]);
    setSpeed(1);
    setCurrentFrame(1);
    setCurrentTotalFrames(1);
    setRemountKey(remountKey + 1);
  };

  useEffect(() => {
    if (typeAnimation !== 'simple') {
      if (
        currentFrame >= currentTotalFrames - 2 &&
        currentFrame <= currentTotalFrames
      ) {
        currentAnimation?.action && currentAnimation.action();

        if (typeAnimation === 'controll') {
          if (queueAnimations.length > 0) {
            setCurrentAnimation(queueAnimations[0]);
            const newQueueAnimations = [...queueAnimations];
            newQueueAnimations.shift();
            setQueueAnimations(newQueueAnimations);
          } else {
            if (currentAnimation?.keepLastFrame) {
              goToAndStop(currentFrame);
              return;
            }

            if (currentAnimation) {
              setCurrentAnimation({ ...currentAnimation });
            } else {
              if (initOptions?.keepLastFrameInit) {
                setCurrentAnimation(null);
                return;
              }

              setCurrentAnimation({
                intervalFrame: [
                  currentFrame - (currentFrame - 2),
                  currentTotalFrames,
                ],
                keepLastFrame: false,
              });
            }
          }
        }

        if (typeAnimation === 'merge') {
          if (queueAnimations.length > 0) {
            setCurrentAnimation(queueAnimations[0]);
            const newQueueAnimations = [...queueAnimations];
            newQueueAnimations.shift();
            setQueueAnimations(newQueueAnimations);
          } else {
            if (currentAnimation?.keepLastFrame) {
              goToAndStop(currentFrame);
              return;
            }

            setCurrentAnimation(
              currentAnimation ? { ...currentAnimation } : null
            );
          }
        }
      }
    }
  }, [
    currentFrame,
    setCurrentFrame,
    typeAnimation,
    currentTotalFrames,
    currentAnimation,
    queueAnimations,
    goToAndStop,
    goToAndPlay,
    initOptions
  ]);

  useEffect(() => {
    if (typeAnimation !== 'simple') {
      if (currentAnimation && Object.keys(currentAnimation).length > 0) {
        lottieRef &&
          lottieRef?.current?.playSegments(
            currentAnimation.intervalFrame,
            true
          );
      }
    }
  }, [currentAnimation, typeAnimation]);

  useEffect(() => {
    if (typeAnimation !== 'simple') {
      if (queueAnimations.length > 0 && !currentAnimation) {
        setCurrentAnimation(queueAnimations[0]);
      }
    }
  }, [queueAnimations, setQueueAnimations, currentAnimation, typeAnimation]);

  const [lottieView] = useState(
    <Lottie
      key={remountKey}
      lottieRef={lottieRef}
      animationData={animationUrl}
      loop={isLooping}
      autoplay
      initialSegment={initOptions?.initialFrameInterval}
      style={{ width: width, height: height }}
      onEnterFrame={(frame: any) => {
        setCurrentFrame(frame.currentTime);
        setCurrentTotalFrames(frame.totalTime);
      }}
    />
  );

  return {
    lottieView,
    play,
    stop,
    destroy,
    goToAndPlay,
    goToAndStop,
    playAnimation,
    setSpeed,
    reset,
  };
}
