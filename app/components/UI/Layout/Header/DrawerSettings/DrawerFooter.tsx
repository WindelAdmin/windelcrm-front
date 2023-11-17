
import { LightTheme } from '@/app/context/ThemeContext/Themes/LightTheme'
import { useAppThemeContext } from '@/app/hooks/UseAppTheme.hook'
import { DashboardCustomize } from '@mui/icons-material'
import { Box, Button, Typography, colors } from '@mui/material'


export function DrawerFooter() {
  const { themeName } = useAppThemeContext()

  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor:
          themeName === 'light'
            ? LightTheme.palette.secondary.main
            : colors.grey[900],
        p: '1rem',
        position: 'absolute',
        bottom: 0,
        left: 0
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row',
          gap: '1rem',
          mb: '1.5rem'
        }}
      >
        <DashboardCustomize
          sx={{
            fontSize: '1.2rem',
            mt: '-1.5rem',
            color: colors.grey[100]
          }}
        />
        <Typography
          sx={{
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '19px',
            color: colors.grey[100]
          }}
        >
          Personalize a tela inicial do seu <strong>Windel Sistemas</strong> com
          as informações mais importantes para seu negócio.
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Button
          autoFocus
          variant="contained"
          sx={{
            fontStyle: 'normal',
            fontWeight: '600',
            fontSize: '1rem',
            lineHeight: '1.35rem',
            borderRadius: '5px',
            color: colors.grey[100],
            bgcolor:
              themeName === 'light'
                ? LightTheme.palette.warning.main
                : LightTheme.palette.primary.main,
            height: '3rem',
            width: '18rem',
            ':hover': {
              bgcolor:
                themeName === 'light'
                  ? LightTheme.palette.warning.dark
                  : LightTheme.palette.primary.dark
            }
          }}
        >
          Personalizar
        </Button>
      </Box>
    </Box>
  )
}
