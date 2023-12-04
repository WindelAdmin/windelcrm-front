'use client';
import PermissionHandler from '@/app/components/Handlers/Permission.handler';
import { WBreadcrumbs } from '@/app/components/UI/Breadcrumbs/WBreadcrumbs';
import { PageContainer } from '@/app/components/UI/PageContainer/Page.Container';
import { useWForm } from '@/app/hooks/UseWForm.hook';
import { Typography } from '@mui/material';

export default function Dashboard() {
  const {formRef} = useWForm()

  return (
    <PermissionHandler>
      <PageContainer>
        <WBreadcrumbs content="Dashboard" />
          <Typography>Bem vindo ao CRM :)</Typography>
      </PageContainer>
    </PermissionHandler>
  );
}
