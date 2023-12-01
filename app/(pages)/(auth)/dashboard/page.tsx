'use client';
import PermissionHandler from '@/app/components/Handlers/Permission.handler';
import { WBreadcrumbs } from '@/app/components/UI/Breadcrumbs/WBreadcrumbs';
import { WButton } from '@/app/components/UI/Button/WButton';
import { WButtonLoading } from '@/app/components/UI/Button/WButton.Loading';
import { WInput } from '@/app/components/UI/Inputs/WInput';
import { PageContainer } from '@/app/components/UI/PageContainer/Page.Container';
import { useWForm } from '@/app/hooks/UseWForm.hook';
import { ROUTE_DASHBOARD, ROUTE_DASHBOARD_BUTTON_EDIT } from '@/app/shared/consts/PermissionName';
import { Container } from '@mui/material';
import { SubmitHandler } from '@unform/core';
import { Form } from '@unform/web';

export default function Dashboard() {
  const { formRef, handleEdit, handleSave } = useWForm();

  const handleSubmit: SubmitHandler<{ email: string; password: string }> = (
    values
  ) => {
    console.log(values);
  };
  return (
      <PageContainer>
        <WBreadcrumbs content="Dashboard" />
        <Form
          onSubmit={handleSubmit}
          ref={formRef}
          initialData={{ email: 'wesley', password: '123' }}
        >
          <WInput name="email" label="Email" />
          <WInput name="password" label="Password" />
          <WButtonLoading
            color={'primary'}
            textButton="Salvar"
            type="submit"
            loading={false}
            sx={{ marginRight: '1rem' }}
          />

          <PermissionHandler restrictionMode='disabled'>
            <Container>
              <WButton name={ROUTE_DASHBOARD_BUTTON_EDIT} data-restriction-mode='disabled' color="secondary" textButton="Editar" />
              <WButton name={ROUTE_DASHBOARD} color="secondary" textButton="Teste" />
              <Container>
                <WButton name={ROUTE_DASHBOARD_BUTTON_EDIT} data-restriction-mode='invisible' color="secondary" textButton="Teste 222" />
                <WButton name={'button-4'} color="secondary" textButton="Teste" />
              </Container>
            </Container>
          </PermissionHandler>
        </Form>
        <br></br>
      </PageContainer>
  );
}
