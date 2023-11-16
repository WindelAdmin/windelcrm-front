import React, { useEffect, useState } from 'react';
import { useField } from '@unform/core';
import { DateTimePicker, MobileDateTimePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import ptBR from 'date-fns/locale/pt-BR';
import { LocalizationProvider } from '@mui/x-date-pickers';
interface DateDesktopMobileProps {
  label: string;
  name: string;
  size?: 'small' | 'medium';
  readOnly?: boolean;
}

export function WDateTimePicker({
  label,
  name,
  size = 'small',
  readOnly = false,
  ...rest
}: DateDesktopMobileProps) {
  const { fieldName, registerField, defaultValue, error, clearError } =
    useField(name);

  const defaultNewDate = defaultValue ? new Date(defaultValue) : new Date();
  const [value, setValue] = useState<Date | null>(defaultNewDate);

  useEffect(() => {
    registerField({
      name: fieldName,
      getValue: () => value,
      setValue: (_, newValue) => setValue(newValue),
    });
  }, [registerField, fieldName, value]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ptBR}>
      <MobileDateTimePicker
        label={label}
        value={value}
        {...rest}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        readOnly={readOnly}
        slotProps={{
          textField: {
            margin: 'dense',
            fullWidth: true,
            helperText: error,
            error: !!error,
            onKeyDown: () => (error ? clearError() : undefined),
            size: size,
          },
        }}
        sx={{
          display: { xs: 'flex', sm: 'none', md: 'none' },
        }}
      />
      <DateTimePicker
        label={label}
        value={value}
        {...rest}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        readOnly={readOnly}
        slotProps={{
          textField: {
            fullWidth: true,
            margin: 'dense',
            helperText: error,
            error: !!error,
            onKeyDown: () => (error ? clearError() : undefined),
            size: size,
          },
        }}
        sx={{
          display: { xs: 'none', sm: 'flex', md: 'flex' },
        }}
      />
    </LocalizationProvider>
  );
}
