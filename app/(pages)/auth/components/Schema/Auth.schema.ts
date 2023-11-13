import { regexValidatePassword } from '@/utils/Regex';
import * as yup from 'yup';
import { msgEmailRequired, msgEmailInvalid, msgPasswordRequired, msgMinCharacter, msgPassword, msgPasswordCorrespond } from './Auth.Message';




export const signInSchema = yup.object().shape({
  email: yup.string().required(msgEmailRequired).email(msgEmailInvalid),
  password: yup
    .string()
    .required(msgPasswordRequired)
});

export const ResetPasswordSchema = yup.object().shape({
  password: yup
    .string()
    .required(msgPasswordRequired)
    .matches(regexValidatePassword, msgPassword),
  confirmPassword: yup
    .string()
    .required(msgPasswordRequired)
    .oneOf([yup.ref('password')], msgPasswordCorrespond),
});

export const ForgotSendEmail = yup.object().shape({
  email: yup.string().required(msgEmailRequired).email(msgEmailInvalid),
});
