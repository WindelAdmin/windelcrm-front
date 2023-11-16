import { TextField } from '@mui/material';
import { useField } from '@unform/core';
import { useEffect, useState } from 'react';
import { WTextFieldProps } from './interface';

export function WInput({
  name,
  label,
  size = 'small',
  required = false,
  maxLength = null,
  readOnly = false,
  ...rest
}: WTextFieldProps) {
  const { fieldName, registerField, defaultValue, clearError, error } =
    useField(name);

  const [value, setValue] = useState(defaultValue || '');

  useEffect(() => {
    registerField({
      name: fieldName,
      getValue: () => value,
      setValue: (_, newValue) => setValue(newValue),
    });
  }, [registerField, fieldName, value]);

  return (
    <TextField
      {...rest}
      fullWidth
      margin='dense'
      size={size}
      name={name}
      label={required ? label + ' *' : label}
      error={!!error}
      helperText={error}
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
        rest.onChange?.(e);
      }}
      onKeyDown={(e) => {
        error && clearError();
        rest.onKeyDown?.(e);
      }}
      inputProps={{ maxLength: maxLength, readOnly: readOnly }}
    />
  );
}
