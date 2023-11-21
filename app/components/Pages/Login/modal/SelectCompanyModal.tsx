import { WModal } from '@/app/components/UI/Modal/Modal';
import { useAppThemeContext } from '@/app/hooks/UseAppTheme.hook';
import { useAuth } from '@/app/hooks/UseAuth.hook';
import { useBackdrop } from '@/app/hooks/UseBackdrop.hook';
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText
} from '@mui/material';
interface ListMenuProps {
  items: Array<{ id: number; name: string; cnpj: string }>;
  user: { email: string; password: string };
  isOpen: boolean;
  onClose: () => void
}

export function SelectCompanyModal({ items, user, isOpen, onClose }: ListMenuProps) {
  const auth = useAuth();
  const backdrop = useBackdrop()
  const { themeName } = useAppThemeContext();

  async function handleClickSelectCompany(newCompanyId: number) {
    await auth.authenticate(user.email, user.password, newCompanyId);
  }
  return (
    <WModal title="Seleção de empresa" open={isOpen && !backdrop.isBackdropOpen} onClose={onClose}>
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
    </WModal>
  );
}
