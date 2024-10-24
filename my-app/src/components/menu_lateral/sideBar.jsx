import * as React from 'react';
import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';

export default function SideBar() {
  return (
    <ThemeProvider
      theme={{
        palette: {
          primary: {
            main: '#0a5700',
            dark: '#0a5700',
          },
        },
      }}
    >
      <Box
        sx={{
          marginLeft: 0,
          width: 400,
          height: 1000,
          borderRadius: 0,
          bgcolor: 'primary.main',
          '&:hover': {
            bgcolor: 'primary.dark',
          },
        }}
      >

      </Box>
    </ThemeProvider>
  );
}