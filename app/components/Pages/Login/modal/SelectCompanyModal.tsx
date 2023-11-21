import { WModal } from '@/app/components/UI/Modal/Modal';
import { DarkTheme } from '@/app/context/ThemeContext/Themes/DarkTheme';
import { LightTheme } from '@/app/context/ThemeContext/Themes/LightTheme';
import { useAppThemeContext } from '@/app/hooks/UseAppTheme.hook';
import { useAuth } from '@/app/hooks/UseAuth.hook';
import { useBackdrop } from '@/app/hooks/UseBackdrop.hook';
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
interface ListMenuProps {
  items: Array<{ id: number; name: string; cnpj: string }>;
  user: { email: string; password: string };
  visible: boolean;
}

export function SelectCompanyModal({ items, user, visible }: ListMenuProps) {
  const auth = useAuth();
  const backdrop = useBackdrop()
  const { themeName } = useAppThemeContext();

  async function handleClickSelectCompany(newCompanyId: number) {
    await auth.authenticate(user.email, user.password, newCompanyId);
  }
  return (
    <WModal title="Seleção de empresa" open={visible && !backdrop.isBackdropOpen}>
      <Box sx={{ width: '100%', maxWidth: 360, bgcolor: themeName === 'light' ? LightTheme.palette.deepGrey.main : DarkTheme.palette.background.paper }}>
        <nav aria-label="Seleção de empresas">
          <List>
            {items.map((item) => (
              <ListItem key={item.id}>
                <ListItemButton
                  onClick={() => handleClickSelectCompany(item.id)} >
                  <ListItemText primary={item.name} secondary={`CNPJ: ${item.cnpj}`}/>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </nav>
      </Box>
    </WModal>
  );
}
