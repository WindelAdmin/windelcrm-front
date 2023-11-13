import { FormHandles } from '@unform/core';
import * as yup from 'yup';

interface setErrorsProps {
  formRef: React.RefObject<FormHandles>;
  errors: yup.ValidationError;
}

export function setErrors({ formRef, errors }: setErrorsProps) {
  const validationErrors: { [key: string]: string } = {};
  formRef.current?.setErrors(validationErrors);
  return formRef;
}
