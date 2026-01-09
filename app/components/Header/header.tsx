'use client';

import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const menuItems = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Processo', href: '#processo' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box
      sx={{
        width: 280,
        height: '100%',
        bgcolor: 'white',
        p: 2,
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
              component="a"
              href={item.href}
              onClick={handleDrawerToggle}
              sx={{
                py: 2,
                '&:hover': {
                  bgcolor: 'rgba(37, 161, 142, 0.1)',
                },
              }}
            >
              <ListItemText
                primary={item.label}
                sx={{
                  '& .MuiListItemText-primary': {
                    fontSize: '1.1rem',
                    fontWeight: 500,
                  },
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem sx={{ mt: 2 }}>
          <Button
            fullWidth
            variant="contained"
            href="#contato"
            sx={{
              bgcolor: '#4A90A4',
              color: 'white',
              borderRadius: '24px',
              py: 1.5,
              textTransform: 'none',
              fontSize: '1rem',
              fontWeight: 600,
              '&:hover': {
                bgcolor: '#3A7A94',
              },
            }}
          >
            Contate-nos
          </Button>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          bgcolor: 'white',
          borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
        }}
      >
        <Toolbar
          sx={{
            justifyContent: 'space-between',
            px: { xs: 2, sm: 4, md: 6, lg: 8 },
            py: 1,
          }}
        >
          {/* Logo ATECH */}
          <Box
            component="a"
            href="/"
            sx={{
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
              fontFamily: 'var(--font-orbitron)',
              fontSize: { xs: '1.5rem', sm: '1.75rem' },
              fontWeight: 600,
              letterSpacing: '0.05em',
            }}
          >
            <span style={{ color: '#25A18E' }}>A</span>
            <span style={{ color: '#16425B' }}>TECH</span>
          </Box>

          {/* Menu Desktop - Centro */}
          {!isMobile && (
            <Box
              sx={{
                display: 'flex',
                gap: 4,
                position: 'absolute',
                left: '50%',
                transform: 'translateX(-50%)',
              }}
            >
              {menuItems.map((item) => (
                <Button
                  key={item.label}
                  href={item.href}
                  sx={{
                    color: '#16425B',
                    textTransform: 'none',
                    fontSize: '1rem',
                    fontWeight: 500,
                    '&:hover': {
                      bgcolor: 'transparent',
                      color: '#25A18E',
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          )}

          {/* Botão Contate-nos Desktop / Menu Mobile */}
          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="abrir menu"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ color: '#16425B' }}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Button
              variant="contained"
              href="#contato"
              sx={{
                bgcolor: '#4A90A4',
                color: 'white',
                borderRadius: '24px',
                px: 4,
                py: 1,
                textTransform: 'none',
                fontSize: '1rem',
                fontWeight: 600,
                '&:hover': {
                  bgcolor: '#3A7A94',
                },
              }}
            >
              Contate-nos
            </Button>
          )}
        </Toolbar>
      </AppBar>

      {/* Menu Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
          },
        }}
      >
        {drawer}
      </Drawer>

      {/* Spacer para compensar o AppBar fixo */}
      <Toolbar />
    </>
  );
}
