import { FormHandles } from '@unform/core';
import * as yup from 'yup';

interface setErrorsProps {
  formRef: React.RefObject<FormHandles>;
  errors: yup.ValidationError;
}

export function setErrors({ formRef, errors }: setErrorsProps) {
  const validationErrors: { [key: string]: string } = {};
  errors.inner?.forEach((error) => {
    if (!error.path) return;
    validationErrors[error.path] = error.message;
  });
  formRef.current?.setErrors(validationErrors);
  return formRef;
}

