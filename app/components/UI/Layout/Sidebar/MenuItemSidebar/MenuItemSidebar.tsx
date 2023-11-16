import {
    Box,
    Collapse,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
    colors,
} from '@mui/material';
import { useEffect, useState } from 'react';

import {
    AssessmentRounded,
    CircleRounded,
    CreateNewFolder,
    ExpandLess,
    ExpandMore,
    HomeRounded,
    MonetizationOnRounded,
    PointOfSaleRounded,
    ShoppingCartRounded,
} from '@mui/icons-material';
import { usePathname } from 'next/navigation';
import { MenuMainProps } from '../Sidebar.Interface';

import Link from 'next/link';

import { MenuSubItemSidebar } from '../MenuSubItemSiderbar/MenuSubItemSidebar';

import { darkTheme, lightTheme } from '@/app/context/ThemeContext/themes';
import { useAppThemeContext } from '@/app/context/ThemeContext/useAppThemeContext';
import { useToggleDrawer } from '@/app/context/ToggleDrawer/useToggleDrawer';
import { useToggleDrawerMobile } from '@/app/context/ToggleDrawerMobile/useToggleDrawerMobile';
import { MenuItemProps } from './MenuItemSidebar.Interface';

const icons = [
  HomeRounded,
  CreateNewFolder,
  MonetizationOnRounded,
  ShoppingCartRounded,
  PointOfSaleRounded,
  AssessmentRounded,
];

export function MenuItemSidebar({ module, idx, menuData }: MenuItemProps) {
  const pathname = usePathname();
  const { themeName } = useAppThemeContext();
  const { open, toggleDrawer } = useToggleDrawer();
  const { toggleDrawerMobile, openMobile } = useToggleDrawerMobile();
  const Icon = icons[idx];

  const [openItem, setOpenItem] = useState(false);
  const [activeButtonLink, setActiveButtonLink] = useState(null);

  const handleClickItemSidebar = () => {
    handleClickOpenMenu();
    setOpenItem(!openItem);
    openMobile && toggleDrawerMobile(true);
  };

  const handleToggleColor = (link: any) => {
    setActiveButtonLink(link);
    openMobile && toggleDrawerMobile(false);
  };

  useEffect(() => {
    !open && setOpenItem(false);
  }, [open]);

  const menuDataItem = menuData.filter(
    (reg: MenuMainProps) => reg.icon === module.menuId
  );
  const titleAndIconColor =
    themeName === 'light' ? colors.common.white : colors.common.white;

  const handleClickOpenMenu = () => {
    !open && toggleDrawer();
    openMobile && toggleDrawerMobile(false);
  };

  return (
    <Box>
      {module.link ? (
        <Link href={module.link} passHref style={{ textDecoration: 'none' }}>
          <ListItemButton
            onClick={handleClickOpenMenu}
            sx={{
              bgcolor:
                pathname === module.link && themeName === 'light'
                  ? lightTheme.palette.info.dark
                  : themeName === 'light'
                  ? lightTheme.palette.info.main
                  : pathname === module.link && themeName === 'dark'
                  ? darkTheme.palette.primary.dark
                  : darkTheme.palette.common.black,

              borderTopRightRadius: '20px',
              borderBottomRightRadius: '20px',
              marginRight: '0.5rem',
              ':hover': {
                bgcolor:
                  pathname === module.link && themeName === 'light'
                    ? lightTheme.palette.info.dark
                    : themeName === 'light'
                    ? lightTheme.palette.info.light
                    : pathname === module.link && themeName === 'dark'
                    ? darkTheme.palette.primary.dark
                    : darkTheme.palette.primary.main,
              },
              marginBottom: '0.2rem',
              fontWeight: 500,
            }}
          >
            <ListItemIcon sx={{ pl: 1 }}>
              <Icon fontSize="small" sx={{ color: titleAndIconColor }} />
            </ListItemIcon>
            <Typography
              sx={{
                fontSize: '0.9rem',
                fontWeight: 500,
                color: titleAndIconColor,
              }}
            >
              {module.description}
            </Typography>
          </ListItemButton>
        </Link>
      ) : (
        <>
          <ListItemButton
            onClick={handleClickItemSidebar}
            sx={{
              borderTopRightRadius: '20px',
              borderBottomRightRadius: '20px',
              marginRight: '0.5rem',
              bgcolor:
                pathname === activeButtonLink && !open && themeName === 'light'
                  ? lightTheme.palette.info.dark
                  : themeName === 'light'
                  ? lightTheme.palette.info.main
                  : pathname === activeButtonLink &&
                    !open &&
                    themeName === 'dark'
                  ? darkTheme.palette.primary.dark
                  : darkTheme.palette.common.black,
              ':hover': {
                bgcolor:
                  pathname === activeButtonLink &&
                  !open &&
                  themeName === 'light'
                    ? lightTheme.palette.info.dark
                    : themeName === 'light'
                    ? lightTheme.palette.info.light
                    : pathname === activeButtonLink &&
                      !open &&
                      themeName === 'dark'
                    ? darkTheme.palette.primary.dark
                    : darkTheme.palette.primary.main,
              },
              marginBottom: '0.2rem',
              height: '2.4rem',
            }}
          >
            <ListItemIcon sx={{ pl: 1 }}>
              <Icon fontSize="small" sx={{ color: titleAndIconColor }} />
            </ListItemIcon>
            <ListItemText>
              <Typography
                sx={{
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  color: titleAndIconColor,
                }}
              >
                {module.description}
              </Typography>
            </ListItemText>
            {openItem ? (
              <ExpandLess
                sx={{ fontSize: '1.1rem', color: titleAndIconColor }}
              />
            ) : (
              <ExpandMore
                sx={{ fontSize: '1.1rem', color: titleAndIconColor }}
              />
            )}
          </ListItemButton>
          <Collapse in={openItem} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {menuDataItem.map((reg: MenuMainProps) =>
                reg.link?.length === 0 || !reg.link ? (
                  <MenuSubItemSidebar
                    key={reg.id}
                    item={reg}
                    menuData={menuData}
                    activeButtonLink={activeButtonLink}
                    handleToggleColor={handleToggleColor}
                  />
                ) : (
                  <Link
                    href={reg.link}
                    passHref
                    style={{ textDecoration: 'none' }}
                    key={reg.id}
                  >
                    <ListItemButton
                      onClick={() => handleToggleColor(reg.link)}
                      sx={{
                        borderTopRightRadius: '20px',
                        borderBottomRightRadius: '20px',
                        marginRight: '0.5rem',
                        marginBottom: '0.2rem',
                        height: '2.4rem',
                        bgcolor:
                          pathname === reg.link && themeName === 'light'
                            ? lightTheme.palette.info.dark
                            : themeName === 'light'
                            ? lightTheme.palette.info.main
                            : pathname === reg.link && themeName === 'dark'
                            ? darkTheme.palette.primary.dark
                            : darkTheme.palette.common.black,
                        ':hover': {
                          bgcolor:
                            pathname === reg.link && themeName === 'light'
                              ? lightTheme.palette.info.dark
                              : themeName === 'light'
                              ? lightTheme.palette.info.light
                              : pathname === reg.link && themeName === 'dark'
                              ? darkTheme.palette.primary.dark
                              : darkTheme.palette.primary.main,
                        },
                      }}
                    >
                      <ListItemIcon sx={{ pl: 7 }}>
                        <CircleRounded
                          sx={{ fontSize: '0.6rem', color: titleAndIconColor }}
                        />
                      </ListItemIcon>
                      <Typography
                        sx={{
                          pl: 1.5,
                          fontSize: '0.9rem',
                          color: titleAndIconColor,
                          fontWeight: 500,
                        }}
                      >
                        {reg.description}
                      </Typography>
                    </ListItemButton>
                  </Link>
                )
              )}
            </List>
          </Collapse>
        </>
      )}
    </Box>
  );
}
