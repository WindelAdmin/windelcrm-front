import React, { useEffect, useState } from 'react';
import { TextField, TextFieldProps } from '@mui/material';
import { PatternFormatProps, PatternFormat } from 'react-number-format';
import { useField } from '@unform/core';

type TVTextFieldProps = Omit<PatternFormatProps, 'value' | 'format'> &
  Omit<TextFieldProps, 'value'> & {
    label: string;
    name: string;
    onValueChange?: (value: string) => void;
    typeInput: 'cpf' | 'cnpj' | 'cep' | 'phone' | 'celPhone';
  };
function getFormatByType(typeInput: TVTextFieldProps['typeInput']): string {
  switch (typeInput) {
    case 'cpf':
      return '###.###.###-##';
    case 'cnpj':
      return '##.###.###/####-##';
    case 'cep':
      return '#####-###';
    case 'phone':
      return '(##) ####-####';
    case 'celPhone':
      return '(##) #####-####';
    default:
      return '';
  }
}
export const WInputMask: React.FC<TVTextFieldProps> = ({
  name,
  onValueChange,
  typeInput,
  label,
  required,
  ...rest
}) => {
  const { fieldName, defaultValue, registerField, error } = useField(name);
  const [value, setValue] = useState<string>(defaultValue);
  const format = getFormatByType(typeInput);

  useEffect(() => {
    registerField({
      name: fieldName,
      getValue: () => value,
      setValue: (_, value) => setValue(value),
    });
  }, [fieldName, value, registerField]);

  const handleChange = (value: string) => {
    setValue(value);
    onValueChange && onValueChange(value);
  };

  return (
    <PatternFormat
      {...(rest as any)}
      customInput={TextField}
      label={required ? label + ' *' : label}
      margin="dense"
      fullWidth
      mask={'_'}
      size="small"
      format={format}
      value={value}
      error={!!error}
      helperText={error}
      onValueChange={({ value }) => handleChange(value)}
    />
  );
};
