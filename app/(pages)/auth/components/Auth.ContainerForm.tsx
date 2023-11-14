import React, { useState, useEffect, ReactNode } from 'react';
import { Box } from '@mui/material';
interface ContainerFormProps {
  waitTime: number;
  children: ReactNode;
}
export function ContainerFormAuth({ waitTime, children }: ContainerFormProps) {
  const [showContent, setShowContent] = useState(false);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowContent(true);
    }, waitTime);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [waitTime]);
  return showContent && <Box>{children}</Box>;
}
