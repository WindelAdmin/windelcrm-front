'use client';
import React, { useState } from 'react';
import * as yup from 'yup';
import { Form } from '@unform/web';
import { SubmitHandler } from '@unform/core';
import Link from 'next/link';
import { InfoOutlined } from '@mui/icons-material';
import { Box, Grid, Paper, Stack } from '@mui/material';


import { WButton } from '@/app/components/Button/WButton';
import { useAuth } from '@/app/context/userProvider/useAuth';
import { useWForm } from '@/app/hooks/useWForm';
import { signInSchema } from './components/Schema/Auth.schema';
import { setErrors } from '@/utils/hooks/YupErrors';
import { lightTheme } from '@/app/context/Theme/themes';
import { WAlert } from '@/app/components/Alert/Alert';
import { AuthContainer } from './components/Auth.Container';
import { WBackdrop } from './components/Auth.Loading';
import { AuthHeader } from './components/Auth.Header';
import { ContainerFormAuth } from './components/Auth.ContainerForm';
import { WInput } from '@/app/components/Inputs/WInput';
import { WInputPassword } from '@/app/components/Inputs/WInputPassword';
import { WButtonLoading } from '@/app/components/Button/WButton.Loading';
import { AuthLinks } from './components/Auth.Links';
import { TypographyLogin } from '@/app/components/Typography/Typography.Auth/Typography.Link';
import { AuthCopyright } from './components/Auth.Copyright';
import { AuthCookie } from './components/Auth.Cookie';
import { useSnackBar } from '@/app/context/toastProvider/useToast';
import { api } from '@/services/ApiService/axios.service';
import { encrypt } from '@/services/CryptoService/crypto.service';

export interface SignInProps {
  email: string
  password: string
  confirmPassword?: string
}


export default function AuthPage() {
  const auth = useAuth();
  const { formRef } = useWForm();
  const { showSnackBar } = useSnackBar();
  const [backdrop, setBackdrop] = useState(false);

  const handleSignIn: SubmitHandler<SignInProps> = (values) => {
    
    signInSchema
      .validate(values, { abortEarly: false })
      .then(async () => {
        const {email, password} = {email:await encrypt(values.email), password:await encrypt(values.password)}
        auth.authenticate(email, password, setBackdrop, backdrop)

      })
      .catch((errors: yup.ValidationError) => {
        setErrors({ formRef, errors });
        console.log(errors)
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
              sx={{ color: lightTheme.palette.error.light, fontSize: '3rem' }}
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
              sx={{ color: lightTheme.palette.error.light, fontSize: '3rem' }}
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
              sx={{ color: lightTheme.palette.error.light, fontSize: '3rem' }}
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
    if (auth.userMaxNumber) {
      return (
        <WAlert
          title="Limite Atingido"
          text="O número máximo de usuários contratados foi alcançado, para contratar usuários, ligue para 0800 600 2220, ou pelo e-mail comercial@windel.com.br."
          open={auth.userMaxNumber}
          icon={
            <InfoOutlined
              sx={{ color: lightTheme.palette.error.light, fontSize: '3rem' }}
            />
          }
        >
          <WButton
            textButton="Ok, Entendi"
            color="info"
            fullWidth
            onClick={() => auth.closeUserMaxNumber()}
            sx={{ width: '100%' }}
          />
        </WAlert>
      );
    }
    return null;
  };

  return (
    <AuthContainer>
      {displayModal()}
      <WBackdrop open={backdrop} />
      <Grid
        item
        xs={false}
        sm={false}
        md={6}
        lg={7}
        component={Paper}
        sx={{
          backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: 0,
        }}
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
          <Box
            maxWidth="32rem"
            sx={{
              mt: '4rem',
              width: '100%',
            }}
          >
            <ContainerFormAuth waitTime={10}>
              <Form onSubmit={handleSignIn} ref={formRef}>
                <Stack spacing={2}>
                  <WInput label="Email" name="email" fullWidth />
                  <WInputPassword label="Informe sua Senha" name="password" />
                  <WButtonLoading
                    type="submit"
                    textButton={'Acessar'}
                    color={'info'}
                    fullWidth
                  />
                </Stack>
              </Form>
            </ContainerFormAuth>
            <AuthLinks />
          </Box>
          <Box
            sx={{
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Link
              href="/faqs"
              passHref
              style={{
                textDecoration: 'none',
                color: 'inherit',
              }}
            >
              <TypographyLogin text="Problemas com Login?" />
            </Link>
          </Box>
          <AuthCopyright />
          <AuthCookie />
        </Box>
      </Grid>
    </AuthContainer>
  );
}


