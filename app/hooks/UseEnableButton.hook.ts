import { ChangeEvent, useState } from 'react';

export function useEnableButton(initialState = true) {
  const [enableButton, setEnableButton] = useState(initialState);

  const handleEnableButton = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      setEnableButton(false);
    } else {
      setEnableButton(true);
    }
  };

  return { enableButton, handleEnableButton };
}
