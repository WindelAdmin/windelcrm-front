'use client';
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
import { WButtonLoading } from '@/app/components/UI/Button/WButton.Loading';
import { WInput } from '@/app/components/UI/Inputs/WInput';
import { WInputPassword } from '@/app/components/UI/Inputs/WInputPassword';

import { SelectCompanyModal } from '@/app/components/Pages/Login/modal/SelectCompanyModal';
import { signInSchema } from '@/app/components/Pages/Login/schemas/Auth.schema';
import { useAuth } from '@/app/hooks/UseAuth.hook';
import { useEnableButton } from '@/app/hooks/UseEnableButton.hook';
import { useSnackBar } from '@/app/hooks/UseToast.hook';
import { useWForm } from '@/app/hooks/UseWForm.hook';
import { setErros } from '@/app/hooks/UseYupErrors.hook';
import { api } from '@/app/services/ApiService/axios.service';
import { encrypt } from '@/app/services/CryptoService/crypto.service';
import { AxiosError } from 'axios';

export interface SignInProps {
  email: string;
  password: string;
  confirmPassword?: string;
}

export default function AuthPage() {
  const { enableButton, handleEnableButton } = useEnableButton();

  const auth = useAuth();
  const { formRef } = useWForm();
  const snackbar = useSnackBar();
  const [listMenuItems, setListMenuItems] = useState([]);
  const [listMenuVisible, setListMenuVisible] = useState(false);

  const handleSignIn: SubmitHandler<SignInProps> = (values) => {
    signInSchema
      .validate(values, { abortEarly: false })
      .then(async () => {
       api
          .get('/preLogin', {
            params: {
              email: await encrypt(values.email),
              password: await encrypt(values.password),
            },
          })
          .then(async (response) => {
            if (response.data.companies.length === 1) {
              await auth.authenticate(values.email, values.password)
            } else {
              setListMenuItems(response.data.companies);
              setListMenuVisible(true);
            }
          })
          .catch((error: AxiosError) => {
            if (error.status === 401) {
              snackbar.showSnackBar(
                'Ops :/',
                'Usuário ou senha incorreto(s)',
                'error'
              );
            }
          });
      })
      .catch((errors: yup.ValidationError) => {
        setErros({ formRef, errors });
      });
  };

  return (
    <AuthContainer>
      <SelectCompanyModal
        items={listMenuItems}
        user={formRef.current?.getData() as { email: string; password: string }}
        visible={listMenuVisible}
      />
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
