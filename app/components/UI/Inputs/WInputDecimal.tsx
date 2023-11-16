import { TextField } from '@mui/material';
import { useField } from '@unform/core';
import { useEffect, useState } from 'react';
import { WInputDecimalProps } from './interface';

export function WInputDecimal({
  name,
  label,
  size = 'small',
  decimalScale = 2,
  ...rest
}: WInputDecimalProps) {
  const { fieldName, registerField, defaultValue, clearError, error } =
    useField(name);
  const treatedDefaultValue = decimal(
    Number(String(defaultValue))?.toFixed(decimalScale)
  );
  const [value, setValue] = useState(treatedDefaultValue || '');

  useEffect(() => {
    registerField({
      name: fieldName,
      getValue: () => {
        const cleanValue = value
          .replace(/[^\d,.]/g, '')
          .replaceAll('.', '')
          .replace(',', '.');
        return cleanValue;
      },
      setValue: (_, newValue) => {
        setValue(newValue);
      },
    });
  }, [registerField, fieldName, value]);

  function decimal(value: string) {
    value = value.replace(/\D/g, '');
    if (value) {
      const intValue = parseInt(value);
      value = (intValue / 100).toLocaleString('pt-BR', {
        minimumFractionDigits: decimalScale,
        maximumFractionDigits: decimalScale,
      });
      return value;
    } else {
      return '';
    }
  }
  return (
    <TextField
      {...rest}
      fullWidth
      margin='dense'
      size={size}
      label={label}
      error={!!error}
      helperText={error}
      value={value}
      onChange={(e) => {
        setValue(decimal(e.target.value));
        rest.onChange?.(e);
      }}
      onKeyDown={(e) => {
        error && clearError();
        rest.onKeyDown?.(e);
      }}
    />
  );
}
