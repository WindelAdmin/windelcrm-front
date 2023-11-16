import { darkTheme, lightTheme } from '@/app/context/ThemeContext/themes'
import { useAppThemeContext } from '@/app/context/ThemeContext/useAppThemeContext'
import { CircleRounded, ExpandLess, ExpandMore } from '@mui/icons-material'
import {
    Collapse,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
    colors
} from '@mui/material'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { MenuMainProps } from '../Sidebar.Interface'
import { MenuSubItemProps } from './MenuSubItemSiderbar'

export function MenuSubItemSidebar({
  item,
  menuData,
  handleToggleColor,
  activeButtonLink
}: MenuSubItemProps) {
  const pathname = usePathname()
  const { themeName } = useAppThemeContext()
  const [openSubItem, setOpenSubItem] = React.useState(false)

  const handleClickSubItemSidebar = () => {
    setOpenSubItem(!openSubItem)
  }

  const menuDataItem = menuData.filter(
    (reg: MenuMainProps) => reg.icon === item.menuId
  )

  const titleAndIconColor =
    themeName === 'light' ? colors.common.white : colors.common.white

  return (
    <>
      <ListItemButton
        onClick={handleClickSubItemSidebar}
        sx={{
          borderTopRightRadius: '20px',
          borderBottomRightRadius: '20px',
          marginRight: '0.5rem',
          marginBottom: '0.2rem',
          height: '2.4rem',
          bgcolor:
            pathname === activeButtonLink && !open && themeName === 'light'
              ? lightTheme.palette.info.dark
              : themeName === 'light'
              ? lightTheme.palette.info.main
              : pathname === activeButtonLink && !open && themeName === 'dark'
              ? darkTheme.palette.primary.dark
              : darkTheme.palette.common.black,
          ':hover': {
            bgcolor:
              pathname === activeButtonLink && !open && themeName === 'light'
                ? lightTheme.palette.info.dark
                : themeName === 'light'
                ? lightTheme.palette.info.light
                : pathname === activeButtonLink && !open && themeName === 'dark'
                ? darkTheme.palette.primary.dark
                : darkTheme.palette.primary.main
          }
        }}
      >
        <ListItemText sx={{ pl: 7 }}>
          <Typography
            sx={{
              fontSize: '0.9rem',
              color: titleAndIconColor,
              fontWeight: 500
            }}
          >
            {item.description}
          </Typography>
        </ListItemText>
        {openSubItem ? (
          <ExpandLess sx={{ fontSize: '1.1rem', color: titleAndIconColor }} />
        ) : (
          <ExpandMore sx={{ fontSize: '1.1rem', color: titleAndIconColor }} />
        )}
      </ListItemButton>
      <Collapse in={openSubItem} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {menuDataItem.map((reg: MenuMainProps) =>
            reg.link?.length === 0 || !reg.link ? (
              <></>
            ) : (
              <Link
                key={reg.id}
                href={reg.link}
                passHref
                style={{ textDecoration: 'none' }}
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
                          : darkTheme.palette.primary.main
                    }
                  }}
                >
                  <ListItemIcon sx={{ pl: 7 }}>
                    <CircleRounded
                      sx={{ fontSize: '0.6rem', color: titleAndIconColor }}
                    />
                  </ListItemIcon>
                  <ListItemText sx={{ pl: 1.5 }}>
                    <Typography
                      sx={{
                        fontSize: '0.9rem',
                        color: titleAndIconColor,
                        fontWeight: 500
                      }}
                    >
                      {reg.description}
                    </Typography>
                  </ListItemText>
                </ListItemButton>
              </Link>
            )
          )}
        </List>
      </Collapse>
    </>
  )
}
