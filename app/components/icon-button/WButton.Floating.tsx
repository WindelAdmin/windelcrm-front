import React, { useState, useEffect } from 'react';
import { ExpandLessRounded, ExpandMoreRounded } from '@mui/icons-material';
import { Fab } from '@mui/material';

export function IconButtonFloating() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {

      const screenHeight = window.innerHeight;
      const contentHeight = document.documentElement.scrollHeight;
      if (contentHeight > screenHeight) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  return (
    showButton && (
      <Fab
        size="small"
        color="secondary"
        aria-label="add"
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
        }}
        onClick={showButton ? scrollToTop : scrollToBottom}
      >
        {showButton ? <ExpandLessRounded /> : <ExpandMoreRounded />}
      </Fab>
    )
  );
}
