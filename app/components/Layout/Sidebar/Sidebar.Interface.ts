export interface MenuMainProps {
  id: number;
  menuId: string;
  parent: boolean;
  children: boolean;
  description: string;
  icon: string | null;
  link: string | null;
}
