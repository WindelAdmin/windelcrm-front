import { useAppThemeContext } from '@/app/hooks/UseAppTheme.hook';
import { FormControlLabel, Switch, SwitchProps } from '@mui/material';
import { useField } from '@unform/core';
import { useEffect, useState } from 'react';


type TVSwitchProps = SwitchProps & {
  name: string;
  label: string;
};
export function WSwitch({ name, label, ...rest }: TVSwitchProps) {
  const { themeName } = useAppThemeContext();
  const { fieldName, registerField, defaultValue, error, clearError } =
    useField(name);

  const [value, setValue] = useState(defaultValue || false);

  useEffect(() => {
    registerField({
      name: fieldName,
      getValue: () => value,
      setValue: (_, newValue) => setValue(newValue),
    });
  }, [registerField, fieldName, value]);

  return (
    <FormControlLabel
      control={
        <Switch
          {...rest}
          checked={value}
          color={themeName == 'light' ? 'info' : 'primary'}
          onChange={(e, checked) => {
            setValue(checked);
            rest.onChange?.(e, checked);
            error && clearError();
          }}
        />
      }
      label={label}
    />
  );
}
