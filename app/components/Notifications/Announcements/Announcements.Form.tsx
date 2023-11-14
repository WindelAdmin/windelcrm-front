import { useWForm } from '@/app/hooks/useWForm/useWForm';
import {
  AnnouncementsProps,
  ModalAnnouncemetsProps,
} from './Announcements.Interface';
import { useSnackBar } from '@/app/context/toastProvider/useToast';
import { useLoading } from '@/app/hooks/useLoading/useLoading';
import { AnnouncementsSchema } from './Announcements.schema';
import {
  MessageTitleErrorModalPost,
  MessageTitleModalPost,
} from '@/app/shared/Messages/Modal/Modal.Post';
import { setErrors } from '@/app/utils/Functions/YupErrors';
import * as yup from 'yup';
import { WModal } from '@/app/components/Modal/Modal';
import { Form } from '@unform/web';
import { Stack } from '@mui/material';
import { ContainerButtons } from '@/app/components/Form/Form.Conatiner.Buttons';
import { WButton } from '@/app/components/Button/WButton';
import { WLoadingButton } from '@/app/components/Button/WButton.Loading';
import { WInput } from '@/app/components/Form/Inputs/WInput';
import { WSwitch } from '@/app/components/Form/Inputs/WSwitch';
import { WDatePicker } from '@/app/components/Form/Inputs/WDatePicker';
import { WDateTimePicker } from '@/app/components/Form/Inputs/WTimeDatePicker';
import { WMultilineInput } from '@/app/components/Form/Inputs/WInputMultine';

export const ModalAnnouncements = ({
  isOpen,
  closeModal,
  refetch,
  record,
}: ModalAnnouncemetsProps) => {
  const { formRef, handleEdit, handleSave } = useWForm();
  const { showSnackBar } = useSnackBar();
  const { loading, setLoading } = useLoading();
  const register: AnnouncementsProps | undefined = record && {
    createdAt: record.createdAt,
    texto: record.message,
    assunto: record.title,
    validade: record.expireDate,
    urgente: record.urgent || false,
    id: record.id,
  };

  const handleCloseModal = () => {
    closeModal();
    refetch();
  };

  const createOrEditAnnouncement = async (values: AnnouncementsProps) => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    values.validade = !values.validade ? tomorrow : values.validade;
    AnnouncementsSchema.validate(values, { abortEarly: false })
      .then(async () => {
        setLoading(true);
        let response: any;
        if (!register) {
          response = await handleSave('avisos', values);
        } else {
          response = await handleEdit(`avisos/${register.id}`, values);
        }
        if (response.status == 200) {
          showSnackBar(
            MessageTitleModalPost,
            response?.data?.message,
            'success'
          );
          setLoading(false);
          refetch();
          handleCloseModal();
        } else {
          setLoading(false);
          showSnackBar(
            MessageTitleErrorModalPost,
            response?.response?.data?.message,
            'error'
          );
        }
      })
      .catch((errors: yup.ValidationError) => {
        setErrors({ formRef, errors });
      });
  };

  return (
    <WModal
      width='25rem'
      open={isOpen}
      title={!!record ? 'Editar aviso' : 'Adicionar aviso'}
    >
      <Form
        onSubmit={createOrEditAnnouncement}
        ref={formRef}
        initialData={register}
      >
        <Stack spacing={2}>
          <WInput label='Assunto' name='assunto' />

          <WMultilineInput label='Descrição' name='texto' />
          <WDateTimePicker label='Validade' name='validade' />
          <WSwitch label='Urgente' name='urgente' />

          <ContainerButtons>
            <WButton
              textButton='Voltar'
              color='deepGrey'
              onClick={handleCloseModal}
              fullWidth
              variant='outlined'
              disabled={loading}
            />
            <WLoadingButton
              loading={loading}
              type='submit'
              textButton={record ? 'Editar' : 'Cadastrar'}
              color={record ? 'info' : 'success'}
              fullWidth
            />
          </ContainerButtons>
        </Stack>
      </Form>
    </WModal>
  );
};
