import { WModal } from '@/app/components/UI/Modal/Modal';
import { useAppThemeContext } from '@/app/hooks/UseAppTheme.hook';
import { useAuth } from '@/app/hooks/UseAuth.hook';
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import { useState } from 'react';
interface ListMenuProps {
  items: Array<{ id: number; name: string; cnpj: string }>;
  user: { email: string; password: string };
  visible: boolean;
  setBackdrop: any
}

export function ListMenu({ items, user, visible, setBackdrop }: ListMenuProps) {
  const auth = useAuth();
  const [isLoading, setIsLoading] = useState(false)
  async function handleClickSelectCompany(newCompanyId: number) {
    setIsLoading(true)
    setBackdrop(true)
    await auth.authenticate(user.email, user.password, newCompanyId);
  }
  return (
    <WModal title="Seleção de empresa" open={visible && !isLoading}>
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
