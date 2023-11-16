import { Grid } from '@mui/material';
import { ReactNode } from 'react';
interface AuthContainerProps {
  children: ReactNode;
}
export function AuthContainer({ children }: AuthContainerProps) {
  return (
    <Grid container maxWidth="xs" 
    sx={{ 
      height: '90vh', 
      display: 'flex',
      justifyContent: 'center' }}>
      {children}
    </Grid>
  );
}
