import { darkTheme, lightTheme } from '@/app/context/Theme/themes';
import { useAppThemeContext } from '@/app/context/Theme/useAppThemeContext';
import { useAvatarContext } from '@/app/context/avatarProvider/useAvatarProvider';
import { useInfoUser } from '@/app/context/userProvider/useInfoUser';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import { Box } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { useEffect, useRef, useState } from 'react';
import { TypographyTitle } from '../Typography/Typography.Title/WTypography.Title';
import CustomAvatarProps from './Avatar.Interface';

export function WAvatar({
  size = 28,
  fontSize = '0.8rem',
  border,
  borderColor,
  marginTop,
  borderRadius,
  openFileDialog = false,
}: CustomAvatarProps) {
  const user = useInfoUser();
  const { picture, handleChangeAvatar } = useAvatarContext();
  const { themeName } = useAppThemeContext();
  const [isMouseOver, setIsMouseOver] = useState(false);

  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleAvatarClick = () => {
    if (openFileDialog && inputRef.current) {
      inputRef.current.click();
    }
  };

  useEffect(() => {}, []);

  const handleFileChange = async () => {
    console.log('função asincrona');
  };

  return (
    <Box
      onClick={handleAvatarClick}
      onMouseEnter={() => setIsMouseOver(true)}
      onMouseLeave={() => setIsMouseOver(false)}
      sx={{
        position: 'relative',
        display: 'inline-block',
      }}
    >
      <Box
        sx={{
          position: 'relative',
        }}
      >
        {picture ? (
          <Avatar
            src={picture}
            alt={user?.name}
            sx={{
              marginTop: marginTop,
              border: border,
              borderColor: borderColor,
              borderRadius: borderRadius,
              width: size,
              height: size,
              color: '#fff',
              fontSize: fontSize,
              bgcolor:
                themeName === 'light'
                  ? lightTheme.palette.info.main
                  : darkTheme.palette.primary.main,
              opacity: isMouseOver ? 1 : 1,
              position: 'relative',
            }}
          />
        ) : (
          <Avatar
            alt={user?.name}
            sx={{
              marginTop: marginTop,
              border: border,
              borderColor: borderColor,
              borderRadius: borderRadius,
              width: size,
              height: size,
              bgcolor:
                themeName === 'light'
                  ? lightTheme.palette.info.main
                  : darkTheme.palette.primary.dark,
              color: '#fff',
              fontSize: '0.9rem',
              pt: '3px',
            }}
          />
        )}
        {isMouseOver && openFileDialog && (
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              width: '92%',
              height: '92%',
              zIndex: 2,
              flexDirection: 'column',
              cursor: 'pointer',
            }}
          >
            <CameraIcon style={{ color: '#fff', fontSize: '2rem' }} />
            <TypographyTitle
              fontSize="1rem"
              fontWeight={700}
              text="Selecione"
              color={
                themeName === 'light'
                  ? lightTheme.palette.common.white
                  : lightTheme.palette.background.default
              }
            />
          </Box>
        )}
      </Box>
      {openFileDialog && (
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          style={{ display: 'none' }}
          onChange={handleFileChange}
        />
      )}
    </Box>
  );
}
