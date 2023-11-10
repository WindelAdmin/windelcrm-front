import {
  AutocompleteProps,
  OutlinedInputProps,
  OutlinedTextFieldProps,
  TextFieldProps,
} from '@mui/material';
import { ReactNode } from 'react';

export type DateDesktopMobileProps = OutlinedTextFieldProps & {
  label: string;
  name: string;
};

export type WTextFieldProps = TextFieldProps & {
  name: string;
  label: string;
  size?: 'small' | 'medium';
  required?: boolean;
};

export type WIconInputProps = OutlinedInputProps & {
  name: string;
  label: string;
  size?: 'small' | 'medium';
  required?: boolean;
  position?: 'end' | 'start';
  icon?: ReactNode;
};

export type WInputSelectProps = TextFieldProps & {
  name: string;
  label: string;
  size?: 'small' | 'medium';
  options: any[];
  disabledOptions?: any[];
  required?: boolean;
  initialValue?: any;
};

export type WSelectAsyncPersonProps = AutocompleteProps<any, any, any, any> & {
  isExternalLoading?: boolean;
  label: 'cliente' | 'fornecedor';
  name: string;
};

export type WInputDecimalProps = TextFieldProps & {
  name: string;
  label: string;
  size?: 'small' | 'medium';
  decimalScale?: number;
  required?: boolean;
};

export type WInputPercentProps = TextFieldProps & {
  name: string;
  label: string;
  size?: 'small' | 'medium';
  onValueChange?: (value: string) => void;
  required?: boolean;
};

export type WSelectAsyncProps = TextFieldProps & {
  isExternalLoading?: boolean;
  label: string;
  name: string;
  route: string;
  searchKey: string;
  size?: 'small' | 'medium';
  required?: boolean;
  filter?: any;
};

export type WSelectStaticProps = TextFieldProps & {
  label: string;
  name: string;
  options: any;
  required?: boolean;
};

export type TAutoCompleteOption = {
  id: number;
  label: string;
};
