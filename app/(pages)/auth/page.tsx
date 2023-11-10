'use client';
import * as yup from 'yup';
import React, { useState } from 'react';
import { Form } from '@unform/web';
import { SubmitHandler } from '@unform/core';
import Link from 'next/link';
import { WInput } from '@/app/components/Inputs/WInput';

import { Box, Grid, Paper, Stack } from '@mui/material';
import { AuthHeader } from './components/Auth.Header';

import { WInputPassword } from '@/app/components/Inputs/WInputPassword';
import { AuthLinks } from './components/Auth.Links';
import { TypographyLogin } from '@/app/components/Typography/Typography.Auth/Typography.Link';
import { AuthContainer } from './components/Auth.Container';
import { WBackdrop } from './components/Auth.Loading';
import { AuthCopyright } from './components/Auth.Copyright';
import { AuthCookie } from './components/Auth.Cookie';
import { regexValidatePassword } from '@/utils/Regex';
import { setErrors } from '@/utils/hooks/YupErrors';
import { getAxiosClient } from '@/services/ApiService/axios.service';
import { WButtonLoading } from '@/app/components/Button/WButton.Loading';
import { ContainerFormAuth } from './components/Auth.ContainerForm';
export default function AuthPage() {
  const [backdrop, setBackdrop] = useState(false);
  const handleSignIn= async ()=> {
    const response = await getAxiosClient().post('/login',{
      email:"master@outlook.com",
      password: "1q2w3e4r"
    })
  };
  const displayModal = () => {
    console.log("Display Modal")
    return null;
  }

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
              <Form onSubmit={handleSignIn} ref={null}>
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
