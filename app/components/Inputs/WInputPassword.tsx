import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Lock } from '@mui/icons-material';
import { useField } from '@unform/core';
import { FormHelperText } from '@mui/material';
import { WIconInputProps } from './interface';

export function WInputPassword({
  label,
  name,
  size = 'small',
  ...rest
}: WIconInputProps) {
  const { fieldName, registerField, defaultValue, clearError, error } =
    useField(name);
  const [value, setValue] = useState(defaultValue || '');
  const [showPassword, setShowPassword] = useState(false);
  useEffect(() => {
    registerField({
      name: fieldName,
      getValue: () => value,
      setValue: (_, newValue) => setValue({ password: newValue }),
    });
  }, [registerField, fieldName, value]);

  const handleChange = () => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
      <FormControl size={size} margin='dense' fullWidth>
        <InputLabel htmlFor='outlined-adornment-password' color='success'>
          {label}
        </InputLabel>
        <OutlinedInput
          {...rest}
          id='outlined-adornment-password'
          type={showPassword ? 'text' : 'password'}
          value={value}
          label={label}
          name={name}
          onChange={handleChange()}
          error={!!error}
          onKeyDown={(e) => {
            error && clearError();
            rest.onKeyDown?.(e);
          }}
          endAdornment={
            <InputAdornment position='end'>
              <IconButton
                aria-label='toggle password visibility'
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge='end'
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
        <FormHelperText error={!error}>{error}</FormHelperText>
      </FormControl>
    </Box>
  );
}
