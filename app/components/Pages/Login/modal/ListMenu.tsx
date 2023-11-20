import { WModal } from '@/app/components/UI/Modal/Modal';
import { CompanyContext } from '@/app/context/UserContextCompany';
import { useAuth } from '@/app/hooks/UseAuth.hook';
import { InfoCompanyProps } from '@/app/hooks/UseInfoCompany.hook';
import { encrypt } from '@/services/CryptoService/crypto.service';
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import { useState, useContext, SetStateAction } from 'react';

interface ListMenuProps {
  items: Array<{ id: number; name: string; cnpj: string }>;
  user: { email: string; password: string };
  visible: boolean;
}

export function ListMenu({ items, user, visible }: ListMenuProps) {
  const auth = useAuth();
  async function handleClickSelectCompany(newCompanyId: number) {
    
    await auth.authenticate(
      user.email,
      user.password,
      newCompanyId
    );
  }
  return (
    <WModal title="Seleção de empresa" open={visible}>
      <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <nav aria-label="Seleção de empresas">
          <List>
            {items.map((item) => (
              <ListItem key={item.id}>
                <ListItemButton
                  onClick={() => handleClickSelectCompany(item.id)}
                >
                  <ListItemText primary={item.name} secondary={item.cnpj} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </nav>
      </Box>
    </WModal>
  );
}