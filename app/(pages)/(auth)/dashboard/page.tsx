'use client';

import { PageContainer } from '@/app/components/UI/PageContainer/Page.Container';
import PermissionProvider, {
  PermissionInfoProps,
} from '@/app/context/Permission.context';
import { useBackdrop } from '@/app/hooks/UseBackdrop.hook';
import { Alert } from '@mui/material';
import { useEffect } from 'react';

export default function Dashboard() {
  const backdrop = useBackdrop();

  useEffect(() => {
    backdrop.closeBackdrop();
  }, []);

  const permissionInfoPropsaRoute = {
    type: 'R',
    name: 'page.dashboard',
  } as PermissionInfoProps;

const permissionInfoPropsaAction = {
    type: 'C',
    name: 'page.dashboard.button-random',
  } as PermissionInfoProps;


  return (
    <PageContainer>
      <PermissionProvider componentInfo={permissionInfoPropsaRoute}>
        <Alert color="info">
          testando permissão de Rotas/Páginas<br></br>
        </Alert>
      </PermissionProvider>
       <PermissionProvider componentInfo={permissionInfoPropsaAction}>
              <Alert color="warning">testando permissão de componentes</Alert>
       </PermissionProvider>
      <br></br>
    </PageContainer>
  );
}
