'use client';
import { useAppThemeContext } from '@/app/context/Theme/useAppTheme';
import { Box, Grid, Paper, Stack } from '@mui/material';
import { useRouter } from 'next/navigation';
import { AuthContainer } from './Auth.Container';
import { WButton } from '@/app/components/Button/WButton';
import { GridContainer } from '@/app/components/Grid/GridContainer';
import { GridItem } from '@/app/components/Grid/GridItem';
import { TypographyText } from '@/app/components/Typography/Typography.Text/WTypography.Text';
import { TypographyTitle } from '@/app/components/Typography/Typography.Title/WTypography.Title';
import { ArrowBack } from '@mui/icons-material';

export const PolicyTerms = () => {
  const { themeName } = useAppThemeContext();
  const isLightTheme = themeName === 'light';
  const router = useRouter();

  return (
    <AuthContainer>
      <Grid
        item
        xs={false}
        sm={false}
        md={6}
        lg={5}
        component={Paper}
        sx={{
          backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: 0,
        }}
      />
      <Grid item xs={12} sm={12} md={6} lg={7}>
        <Box
          sx={{
            mx: { xs: 4, sm: 12, md: 8 },
            p: { xs: 1, sm: 1 },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              alignSelf: 'start',
              paddingTop: '2rem',
            }}
          >
            <WButton
              color={isLightTheme ? 'info' : 'deepGrey'}
              variant="text"
              textButton="voltar"
              startIcon={<ArrowBack />}
              size="small"
              onClick={() => {
                router.back();
              }}
            />
          </Box>

          <GridContainer
            justifyContent="center"
            marginTop="4rem"
            maxHeight="10%"
            overflow="auto"
          >
            <GridItem sm={12} md={12}>
              <TypographyTitle
                fontSize="1.4rem"
                fontWeight={500}
                text="POLÍTICA DE PRIVACIDADE E USO DE DADOS PESSOAIS"
              />
              <Stack>
                <TypographyTitle
                  fontSize="1.2rem"
                  fontWeight={400}
                  text="1. INTRODUÇÃO"
                />
                <TypographyText
                  fontSize="0.9rem"
                  fontWeight={300}
                  align="justify"
                  textAlign="left"
                  text="A Política de Privacidade e Uso de Dados Pessoais tem como objetivo principal evidenciar:"
                />
                <TypographyText
                  fontSize="0.9rem"
                  fontWeight={300}
                  align="justify"
                  textAlign="left"
                  text="- A transparência do compromisso da Windel Sistemas em garantir a proteção dos dados fornecidos pelos titulares de dados."
                />
                <TypographyText
                  fontSize="0.9rem"
                  fontWeight={300}
                  align="justify"
                  textAlign="left"
                  text="- Que não fornecemos informações pessoais para terceiros sem a devida autorização e não divulgamos informações que possam identificar os titulares dos dados, salvo em casos de pedido judicial ou determinação legal."
                />
                <TypographyText
                  fontSize="0.9rem"
                  fontWeight={300}
                  align="justify"
                  textAlign="left"
                  text="- Que a Windel Sistemas não comercializa dados pessoais dos titulares que estão sob sua guarda.
            A presente Política abrange o tratamento que a Windel Sistemas concede às informações capazes de identificar os usuários, coletadas diretamente em nosso site, locais de atendimento, e armazenadas em bases de dados eletrônicos por meio dos cadastros preenchidos.
            A aceitação da nossa Política se dará quando você acessar ou utilizar o site, aplicativo ou serviços da Windel Sistemas. Isso indicará que você está ciente e em total acordo com a forma como utilizamos as suas informações e seus dados, cujo tratamento se dá em observância a Lei Geral de Proteção de Dados Pessoais n° 13.709/2018 (LGPD).
            
            "
                />
              </Stack>
              <Stack>
                <TypographyTitle
                  fontSize="1.2rem"
                  fontWeight={400}
                  text="2. COLETA DE DADOS"
                />
                <TypographyText
                  fontSize="0.9rem"
                  fontWeight={300}
                  align="justify"
                  textAlign="left"
                  text="- Via formulário: Todos os dados coletados são considerados de legítimo interesse, ou seja, são dados fornecidos por livre e espontânea vontade do usuário para viabilizar um canal de contato entre as partes."
                />
                <TypographyText
                  fontSize="0.9rem"
                  fontWeight={300}
                  align="justify"
                  textAlign="left"
                  wordBreak="break-word"
                  text='- Cookies para análise estatística: todos os dados são coletados de forma anonimizada. Caso aceite os cookies os dados são coletados de forma não-anonimizadas. Segue abaixo um link com informações sobre anonimização.
              https://support.google.com/analytics/answer/2763052?hl=pt-BR"'
                />
              </Stack>
              <Stack>
                <TypographyTitle
                  fontSize="1.2rem"
                  fontWeight={400}
                  text="3. USO DOS DADOS"
                />
                <TypographyText
                  fontSize="0.9rem"
                  fontWeight={300}
                  align="justify"
                  textAlign="left"
                  text="Os dados fornecidos pelo usuário via formulário serão utilizados apenas pela empresa Windel Sistemas e jamais serão fornecidos a terceiros sem o prévio consentimento."
                />
              </Stack>
              <Stack>
                <TypographyTitle
                  fontSize="1.2rem"
                  fontWeight={400}
                  text="4. ARMAZENAMENTO DOS DADOS"
                />
                <TypographyText
                  fontSize="0.9rem"
                  fontWeight={300}
                  align="justify"
                  textAlign="left"
                  text="Os dados pessoais fornecidos via formulário são armazenado em programa CRM. Salvo solicitação expressa do usuário, tais informações serão armazenadas permanentemente."
                />
              </Stack>
              <Stack>
                <TypographyTitle
                  fontSize="1.2rem"
                  fontWeight={400}
                  text="5. LEGISLAÇÃO APLICÁVEL E JURISDIÇÃO"
                />
                <TypographyText
                  fontSize="0.9rem"
                  fontWeight={300}
                  align="justify"
                  textAlign="left"
                  text="A presente Política de Privacidade será interpretada segundo a legislação brasileira, no idioma português, sendo eleito o foro da cidade de Caxias do Sul/RS para dirimir qualquer litígio ou controvérsia envolvendo o presente documento."
                />
              </Stack>
              <Stack>
                <TypographyTitle
                  fontSize="1.2rem"
                  fontWeight={400}
                  text="6. ATUALIZAÇÃO DA POLÍTICA DE PRIVACIDADE E USO DE DADOS"
                />
                <TypographyText
                  fontSize="0.9rem"
                  fontWeight={300}
                  align="justify"
                  textAlign="left"
                  text="A Windel Sistemas se reserva ao direito de alterar essa Política sempre que necessário, visando fornecer ao titular de dados mais segurança e transparência. Sempre que houver alterações que ensejem novas autorizações, será publicada uma nova versão."
                />
              </Stack>
              <Stack>
                <TypographyTitle
                  fontSize="1.2rem"
                  fontWeight={400}
                  text="7. CONDIÇÕES GERAIS"
                />
                <TypographyText
                  fontSize="0.9rem"
                  fontWeight={300}
                  align="justify"
                  textAlign="left"
                  text="A Windel Sistemas Ltda se reserva ao direito de notificar seus clientes de qualquer informação que afete a segurança dos produtos ou serviços fornecidos. Se você tiver alguma pergunta sobre esta Política de Privacidade ou as práticas deste site, por gentileza entre em contato pelo e-mail: controladoria@windel.com.br."
                />
              </Stack>
              <TypographyText
                marginTop="1rem"
                fontSize="0.9rem"
                fontWeight={300}
                align="justify"
                textAlign="left"
                text="Versão 2021.06.01"
              />
            </GridItem>
          </GridContainer>
        </Box>
      </Grid>
    </AuthContainer>
  );
};
