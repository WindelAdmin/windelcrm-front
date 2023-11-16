import * as yup from 'yup';
import { LoginMessagesEnum } from './AuthMessage.enum';

export const signInSchema = yup.object().shape({
  email: yup.string().required(LoginMessagesEnum.MsgEmailRequired).email(LoginMessagesEnum.MsgEmailInvalid),
  password: yup
    .string()
    .min(6, LoginMessagesEnum.MsgMinCharacter)
    .required(LoginMessagesEnum.MsgPasswordRequired)
});

export const ResetPasswordSchema = yup.object().shape({
  password: yup
    .string()
    .required(LoginMessagesEnum.MsgPasswordRequired),
  confirmPassword: yup
    .string()
    .required(LoginMessagesEnum.MsgPasswordRequired)
    .oneOf([yup.ref('password')], LoginMessagesEnum.MsgPasswordCorrespond),
});

export const ForgotSendEmail = yup.object().shape({
  email: yup.string().required(LoginMessagesEnum.MsgEmailRequired).email(LoginMessagesEnum.MsgEmailInvalid),
});
