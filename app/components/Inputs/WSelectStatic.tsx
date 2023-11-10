import React, { useEffect, useState } from 'react';
import { Autocomplete, TextField } from '@mui/material';
import { useField } from '@unform/core';
import { WSelectStaticProps } from './interface';

export function WSelectStatic({
  label,
  name,
  options,
  required,
  ...rest
}: WSelectStaticProps) {
  const { fieldName, registerField, defaultValue, error, clearError } =
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
    <Autocomplete
      fullWidth
      openText="Abrir"
      closeText="Fechar"
      noOptionsText="Sem opções"
      loadingText="Carregando..."
      options={options}
      value={value || null}
      onChange={(_, newValue) => {
        setValue(newValue);
        clearError();
      }}
      renderOption={(props, option) => (
        <li {...props} key={`${option.label}${option.id}`}>
          {option.label}
        </li>
      )}
      autoComplete={false}
      renderInput={(params) => (
        <TextField
          {...rest}
          {...params}
          size="small"
          fullWidth
          margin="dense"
          label={`${label} ${required ? '*' : ''}`}
          error={!!error}
          helperText={error}
          autoComplete="false"
          sx={{
            textTransform: 'capitalize',
          }}
        />
      )}
    />
  );
}
