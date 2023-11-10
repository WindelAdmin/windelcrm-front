import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import { useField } from '@unform/core';
import { FormHelperText } from '@mui/material';
import { WIconInputProps } from './interface';

export function WInputIcon({
  label,
  name,
  size = 'small',
  position = 'end',
  icon,
  ...rest
}: WIconInputProps) {
  const { fieldName, registerField, defaultValue, clearError, error } =
    useField(name);
  const [value, setValue] = useState(defaultValue || '');
  useEffect(() => {
    registerField({
      name: fieldName,
      getValue: () => value,
      setValue: (_, newValue) => {
        setValue(newValue);
      },
    });
  }, [registerField, fieldName, value]);

  const handleChange = () => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <Box>
      <FormControl size={size} margin='dense' fullWidth>
        <InputLabel>{label}</InputLabel>
        <OutlinedInput
          {...rest}
          id={name}
          value={value}
          label={label}
          name={name}
          onChange={handleChange()}
          error={!!error}
          onKeyDown={(e) => {
            error && clearError();
            rest.onKeyDown?.(e);
          }}
          startAdornment={
            position === 'start' && (
              <InputAdornment position='start'>
                <IconButton edge='start'>{icon}</IconButton>
              </InputAdornment>
            )
          }
          endAdornment={
            position === 'end' && (
              <InputAdornment position='end'>
                <IconButton edge='end'>{icon}</IconButton>
              </InputAdornment>
            )
          }
        />
        <FormHelperText error={!!error}>{error}</FormHelperText>
      </FormControl>
    </Box>
  );
}
