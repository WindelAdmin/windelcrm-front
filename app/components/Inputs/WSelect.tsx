import React, { useEffect, useState } from 'react';
import { MenuItem, TextField } from '@mui/material';
import { useField } from '@unform/core';
import { WInputSelectProps } from './interface';

export function WSelect({
  name,
  label,
  size = 'small',
  options,
  required,
  initialValue,
  ...rest
}: WInputSelectProps) {
  const { fieldName, registerField, defaultValue, clearError, error } =
    useField(name);

  const [value, setValue] = useState(initialValue || defaultValue || '');

  useEffect(() => {
    registerField({
      name: fieldName,
      getValue: () => {
        return value;
      },
      setValue: (_, newValue) => {
        setValue(newValue);
      },
    });
  }, [registerField, fieldName, value, initialValue]);

  const handleOnChange = (values: any) => {
    setValue(values.target.value);
    rest.onChange?.(values);
  };

  return (
    <TextField
      {...rest}
      fullWidth
      margin="dense"
      size={size}
      select
      label={`${label} ${required ? '*' : ''}`}
      error={!!error}
      helperText={error}
      value={value}
      onKeyDown={(e) => {
        error && clearError();
        rest.onKeyDown?.(e);
      }}
      onChange={handleOnChange}
    >
      {options.map((option, index) => {
        return (
          <MenuItem key={index} value={option.value}>
            {option.label}
          </MenuItem>
        );
      })}
    </TextField>
  );
}
