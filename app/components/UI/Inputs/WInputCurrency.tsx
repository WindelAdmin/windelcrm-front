import { TextField } from '@mui/material';
import { useField } from '@unform/core';
import { useCallback, useEffect, useState } from 'react';
import { WInputDecimalProps } from './interface';

export function WInputCurrency({
  name,
  label,
  size = 'small',
  decimalScale = 2,
  ...rest
}: WInputDecimalProps) {
  const { fieldName, registerField, defaultValue, clearError, error } =
    useField(name);
  const currencyCallback = useCallback(
    (value: string) => {
      value = value.replace(/[^\d-]/g, '');
      if (value) {
        const intValue = parseInt(value, 10);
        value = (intValue / 100).toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
          minimumFractionDigits: decimalScale,
          maximumFractionDigits: decimalScale,
        });
        return value;
      } else {
        return (value = (0).toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
          minimumFractionDigits: decimalScale,
          maximumFractionDigits: decimalScale,
        }));
      }
    },
    [decimalScale]
  );

  const treatedDefaultValue = currencyCallback(
    Number(String(defaultValue))?.toFixed(decimalScale)
  );
  const [value, setValue] = useState(treatedDefaultValue || '');


  useEffect(() => {
    registerField({
      name: fieldName,
      getValue: () => {
        const cleanValue = value
          .replace(/[^\d-,.]/g, '')
          .replaceAll('.', '')
          .replace(',', '.');
        return cleanValue;
      },
      setValue: (_, newValue) => {
        setValue(currencyCallback(newValue));
      },
    });
  }, [registerField, fieldName, value, currencyCallback]);

  return (
    <TextField
      {...rest}
      fullWidth
      margin="dense"
      size={size}
      label={label}
      error={!!error}
      helperText={error}
      value={value}
      onChange={(e) => {
        setValue(currencyCallback(e.target.value));
        rest.onChange?.(e);
      }}
      onKeyDown={(e) => {
        error && clearError();
        rest.onKeyDown?.(e);
      }}
    />
  );
}
