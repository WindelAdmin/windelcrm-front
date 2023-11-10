import React, { useEffect, useState } from 'react';
import { TextField } from '@mui/material';
import { NumericFormat } from 'react-number-format';
import { useField } from '@unform/core';

import { WInputPercentProps } from './interface';

export function WInputPercent({
  name,

  size = 'small',

  label,
  onValueChange,
  ...rest
}: WInputPercentProps) {
  const { fieldName, defaultValue, registerField, clearError, error } =
    useField(name);
  const [value, setValue] = useState<string>(defaultValue);

  useEffect(() => {
    registerField({
      name: fieldName,
      getValue: () => {
        const cleanValue = value?.replaceAll('.', '')?.replace(',', '.');
        return cleanValue;
      },
      setValue: (_, value) => setValue(value),
    });
  }, [fieldName, value, registerField]);

  function percent(value: string) {
    if (value) {
      value = value.replace(/\D/g, '');
      const intValue = parseInt(value, 10);
      value = (intValue / 100).toLocaleString('pt-BR', {
        style: 'decimal',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
      return value;
    } else {
      return '';
    }
  }

  return (
    <NumericFormat
      {...(rest as any)}
      customInput={TextField}
      margin='dense'
      fullWidth
      size={size}
      label={label}
      decimalSeparator=','
      thousandSeparator='.'
      prefix='% '
      value={value}
      error={!!error}
      helperText={error}
      onChange={(e) => {
        setValue(percent(e.target.value));
        rest.onChange?.(e);
      }}
      onKeyDown={(e) => {
        error && clearError();
        rest.onKeyDown?.(e);
      }}
    />
  );
}
