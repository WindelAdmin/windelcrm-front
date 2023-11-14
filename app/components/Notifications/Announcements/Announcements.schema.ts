import * as yup from 'yup';
export const AnnouncementsSchema = yup.object().shape({
  assunto: yup.string().required('Campo obrigatório.').trim(),
  texto: yup
    .string()
    .required('Campo obrigatório.')
    .trim()
    .max(500, 'No máximo 500 caracteres'),
});
