import React, { useEffect, useState } from 'react';
import { useField } from '@unform/core';
import { DesktopDatePicker, MobileDatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import ptBR from 'date-fns/locale/pt-BR';
import { LocalizationProvider } from '@mui/x-date-pickers';
interface DateDesktopMobileProps {
  label: string;
  name: string;
  readOnly?: boolean;
  size?: 'small' | 'medium';
}


export function WDatePicker({
  label,
  name,
  readOnly = false,
  size = 'small',
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
      <MobileDatePicker
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
            helperText: error,
            error: !!error,
            margin: 'dense',
            onKeyDown: () => (error ? clearError() : undefined),
            size: size,
          },
          toolbar: {
            sx: {
              '&.MuiPickersLayout-toolbar span': {
                display: 'none',
              },
            },
          },
        }}
        sx={{
          display: { xs: 'flex', sm: 'none', md: 'none' },
        }}
      />
      <DesktopDatePicker
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
            helperText: error,
            error: !!error,
            margin: 'dense',
            onKeyDown: () => (error ? clearError() : undefined),
            defaultValue: defaultValue,
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
