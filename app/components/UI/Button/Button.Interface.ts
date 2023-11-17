import { ReactElement } from 'react';
import { LoadingButton, LoadingButtonProps } from '@mui/lab';
import { Button, IconButton, IconButtonProps } from '@mui/material';
import { styled } from '@mui/material/styles';

export interface WIconButtonProps extends IconButtonProps {
  icon: ReactElement;
  tooltip?: string;
}

export interface WButtonProps extends LoadingButtonProps {
  variant?: 'contained' | 'outlined' | 'text';
  textButton: string;
  color: 'error' | 'info' | 'warning' | 'primary' | 'secondary' | 'success';
}

export const ButtonTransitionProp = styled(Button)`
  ${({ theme }) => `
    min-width: 0;
    letter-spacing: '0.025rem';
        font-weight: 600;
cursor: pointer;
transition: ${theme.transitions.create(['background-color', 'transform'], {
    duration: theme.transitions.duration.leavingScreen,
  })};
&:hover {
transform: scale(1.05);
}
`}
`;

export const LoadingButtonTransitionProp = styled(LoadingButton)`
  ${({ theme }) => `
cursor: pointer;
transition: ${theme.transitions.create(['background-color', 'transform'], {
    duration: theme.transitions.duration.leavingScreen,
  })};
&:hover {
transform: scale(1.05);
}
`}
`;

export const IconButtonTransitionProps = styled(IconButton)`
  ${({ theme }) => `
    min-width: 0,
    letter-spacing: '0.025rem',
    font-weight: 600,
    cursor: pointer;
    transition: ${theme.transitions.create(['background-color', 'transform'], {
      duration: theme.transitions.duration.leavingScreen,
    })};
    &:hover {
      transform: scale(1.05);
    }
`}
`;
