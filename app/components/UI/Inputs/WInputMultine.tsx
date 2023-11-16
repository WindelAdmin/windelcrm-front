import { TextField } from '@mui/material';
import { useField } from '@unform/core';
import { useEffect, useState } from 'react';
import { WTextFieldProps } from './interface';

export function WMultilineInput({
  name,
  label,
  size = 'small',
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
      label={label}
      error={!!error}
      helperText={error}
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
        rest.onChange?.(e);
      }}
      multiline
      minRows={3}
      maxRows={3}
      onKeyDown={(e) => {
        error && clearError();
        rest.onKeyDown?.(e);
      }}
    />
  );
}
