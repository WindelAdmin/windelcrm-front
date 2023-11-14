'use client'
import { WBreadcrumbs } from "@/app/components/Breadcrumbs/WBreadcrumbs";
import { WButton } from "@/app/components/Button/WButton";
import { PageContainer } from "@/app/components/PageContainer/Page.Container";
import { TypographyTitle } from "@/app/components/Typography/Typography.Title/WTypography.Title";
function handlick(){
  console.log('handleClick')
}
import { useInfoUser } from "@/app/context/userProvider/useInfoUser";
import { AddOutlined } from "@mui/icons-material";
import { Box, useMediaQuery } from "@mui/material";

export default function Dashboard(){
  
  const metadata = {
    title: 'Windel - Dashboard',
    description: 'Pagina Dashboard',
  };
  
  const user = useInfoUser();
  const resolution = useMediaQuery('(max-width:900px)');
    return(
    <PageContainer>
       <WBreadcrumbs father="Dashboard" />
       <h1>
        dashboard
       </h1>
       <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'column', md: 'row' },
        justifyContent: 'space-between',
        alignItems: { xs: 'flex-start', sm: 'flex-start', md: 'center' },
        paddingY: '.5rem',
        paddingX: '1rem',
      }}
    >
      <TypographyTitle fontSize='1.4rem' text={metadata.title} fontWeight={600} />
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '.5rem' }}>
      

        <WButton
          onClick={handlick}
          size='small'
          startIcon={
            <AddOutlined
              sx={{
                ml: { xs: '0.6rem', sm: '0.6rem', md: 0 },
                fontWeight: 600,
              }}
            />
          }
          textButton={resolution ? '' : 'Adicionar'}
          color='success'
          disabled={false}
        />
      </Box>
    </Box>

    </PageContainer>
  )
}