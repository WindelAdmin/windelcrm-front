import { ReactNode, useEffect, useState } from 'react';
import { GridContainer } from '../Grid/GridContainer';
import { GridItem } from '../Grid/GridItem';


interface ContainerFormProps {
  waitTime: number;
  children: ReactNode;
}

export function FormContainer({ waitTime, children }: ContainerFormProps) {
  const [showContent, setShowContent] = useState(false);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowContent(true);
    }, waitTime);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [waitTime]);
  return (
    <GridContainer>
      {showContent && (
        <GridItem sm={12} md={12}>
          {children}
        </GridItem>
      )}
    </GridContainer>
  );
}
