'use client';
import { InfoOutlined } from '@mui/icons-material';
import { Box, Container, Grid, Stack } from '@mui/material';
import { SubmitHandler } from '@unform/core';
import { Form } from '@unform/web';
import { useState } from 'react';
import * as yup from 'yup';

import { AuthContainer } from '@/app/components/Pages/Login/Auth.Container';
import { AuthCookie } from '@/app/components/Pages/Login/Auth.Cookie';
import { AuthCopyright } from '@/app/components/Pages/Login/Auth.Copyright';
import { AuthHeader } from '@/app/components/Pages/Login/Auth.Header';
import { AuthLinks } from '@/app/components/Pages/Login/Auth.Links';
import { WBackdrop } from '@/app/components/Pages/Login/Auth.Loading';
import { WAlert } from '@/app/components/UI/Alert/Alert';
import { WButton } from '@/app/components/UI/Button/WButton';
import { WButtonLoading } from '@/app/components/UI/Button/WButton.Loading';
import { WInput } from '@/app/components/UI/Inputs/WInput';
import { WInputPassword } from '@/app/components/UI/Inputs/WInputPassword';
import { LightTheme } from '@/app/context/ThemeContext/Themes/LightTheme';

import { signInSchema } from '@/app/components/Pages/Login/schemas/Auth.schema';
import { useAuth } from '@/app/hooks/UseAuth.hook';
import { useEnableButton } from '@/app/hooks/UseEnableButton.hook';
import { useWForm } from '@/app/hooks/UseWForm.hook';
import { setErros } from '@/app/hooks/UseYupErrors.hook';
import { api } from '@/services/ApiService/axios.service';
import { encrypt } from '@/services/CryptoService/crypto.service';
import { ListMenu } from '@/app/components/Pages/Login/modal/ListMenu';

export interface SignInProps {
  email: string;
  password: string;
  confirmPassword?: string;
}

export default function AuthPage() {
  const { enableButton, handleEnableButton } = useEnableButton();

  const auth = useAuth();
  const { formRef } = useWForm();
  const [backdrop, setBackdrop] = useState(false);
  const [listMenuItems, setListMenuItems] = useState([]);
  const [listMenuVisible, setListMenuVisible] = useState(false);
  const handleSignIn: SubmitHandler<SignInProps> = (values) => {
    signInSchema
      .validate(values, { abortEarly: false })
      .then(async () => {
        const response = await api.get('/preLogin', {
          params: {
            email: await encrypt(values.email),
            password: await encrypt(values.password),
          },
        });
        if (response.data.companies.length !== 1) {
          await auth.authenticate(values.email, values.password);
        } else {
          setListMenuItems(response.data.companies);
          setListMenuVisible(true);
        }
      })
      .catch((errors: yup.ValidationError) => {
        setErros({ formRef, errors });
      });
  };

  const displayModal = () => {
    if (auth.userNotFound) {
      return (
        <WAlert
          title="Usuário não encontrado"
          text="Desculpe, não encontramos um usuário vinculado ao seu e-mail em nossa base de dados."
          open={auth.userNotFound}
          icon={
            <InfoOutlined
              sx={{ color: LightTheme.palette.error.light, fontSize: '3rem' }}
            />
          }
        >
          <WButton
            textButton="Ok, Entendi"
            color="info"
            fullWidth
            onClick={() => auth.closeUserNotFoundModal()}
            sx={{
              margin: '.5rem',
              borderRadius: '10px',
            }}
          />
        </WAlert>
      );
    }
    if (auth.hasAuthError) {
      return (
        <WAlert
          title="Ops! Algo deu errado"
          text="Desculpe, no momento estamos em processo de atualização do sistema. Por favor, tente novamente em alguns minutos. Agradecemos pela compreensão!"
          open={auth.hasAuthError}
          icon={
            <InfoOutlined
              sx={{ color: LightTheme.palette.error.light, fontSize: '3rem' }}
            />
          }
        >
          <WButton
            textButton="Ok, Entendi"
            color="info"
            fullWidth
            onClick={() => auth.closeHasAuthErrorModal()}
            sx={{
              margin: '.5rem',
            }}
          />
        </WAlert>
      );
    }
    if (auth.userUnauthorized) {
      return (
        <WAlert
          title="Acesso não autorizado"
          text="Você não está autorizado a acessar esta área. Por favor, faça login com as credenciais corretas."
          open={auth.userUnauthorized}
          icon={
            <InfoOutlined
              sx={{ color: LightTheme.palette.error.light, fontSize: '3rem' }}
            />
          }
        >
          <WButton
            textButton="Ok, Entendi"
            color="info"
            fullWidth
            onClick={() => auth.closeUserUnauthorizedModal()}
            sx={{
              margin: '.5rem',
              borderRadius: '10px',
            }}
          />
        </WAlert>
      );
    }
    return null;
  };
  return (
    <AuthContainer>
      <ListMenu
        items={listMenuItems}
        user={formRef.current?.getData() as { email: string; password: string }}
        visible={listMenuVisible}
      />
      {displayModal()}
      <WBackdrop open={backdrop} />
      <Grid item xs={12} sm={12} md={6} lg={5}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            width: '100%',
          }}
        >
          <AuthHeader />
          <Container
            sx={{
              width: '32rem',
              marginTop: '2rem',
            }}
          >
            <Form onSubmit={handleSignIn} ref={formRef}>
              <Stack spacing={2}>
                <WInput label="Email" name="email" fullWidth />
                <WInputPassword
                  label="Informe sua Senha"
                  name="password"
                  onChange={handleEnableButton}
                />
                <WButtonLoading
                  type="submit"
                  textButton={'Acessar'}
                  color={'info'}
                  fullWidth
                  disabled={enableButton}
                />
              </Stack>
            </Form>
          </Container>
          <AuthLinks />
        </Box>
        <AuthCopyright />
        <AuthCookie />
      </Grid>
    </AuthContainer>
  );
}
