'use client';

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'var(--font-poppins), sans-serif',
    fontSize: 16,
    // Configurações para cada variante
    h1: {
      fontFamily: 'var(--font-poppins), sans-serif',
    },
    h2: {
      fontFamily: 'var(--font-poppins), sans-serif',
    },
    h3: {
      fontFamily: 'var(--font-poppins), sans-serif',
    },
    h4: {
      fontFamily: 'var(--font-poppins), sans-serif',
    },
    h5: {
      fontFamily: 'var(--font-poppins), sans-serif',
    },
    h6: {
      fontFamily: 'var(--font-poppins), sans-serif',
    },
    body1: {
      fontFamily: 'var(--font-poppins), sans-serif',
      fontSize: '1rem', // 16px
    },
    body2: {
      fontFamily: 'var(--font-poppins), sans-serif',
      fontSize: '0.875rem', // 14px
    },
    button: {
      fontFamily: 'var(--font-poppins), sans-serif',
      fontSize: '1rem', // 16px
    },
  },
  palette: {
    primary: {
      main: '#25A18E',
      dark: '#1E8A78',
    },
    secondary: {
      main: '#16425B',
    },
  },
});

export default theme;
