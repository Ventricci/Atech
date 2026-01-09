'use client';

import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';

export default function Hero() {
  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url(/hero-bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'brightness(0.7)',
          zIndex: -1,
        },
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            color: 'white',
            maxWidth: '600px',
            px: { xs: 2, sm: 4 },
          }}
        >
          {/* Tag "Inovação" */}
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 1,
              mb: 3,
            }}
          >
            <Box
              sx={{
                width: 40,
                height: 2,
                bgcolor: '#25A18E',
              }}
            />
            <Typography
              sx={{
                fontSize: { xs: '0.9rem', sm: '1rem' },
                fontWeight: 400,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}
            >
              Inovação
            </Typography>
          </Box>

          {/* Título Principal */}
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              fontWeight: 600,
              lineHeight: 1.2,
              mb: 4,
            }}
          >
            Movendo seu negócio
            <br />
            em direção ao futuro
          </Typography>

          {/* Botão CTA */}
          <Button
            variant="contained"
            href="#processo"
            sx={{
              bgcolor: '#25A18E',
              color: 'white',
              borderRadius: '24px',
              px: 5,
              py: 1.5,
              textTransform: 'none',
              fontSize: '1rem',
              fontWeight: 600,
              '&:hover': {
                bgcolor: '#1E8A78',
              },
            }}
          >
            Saiba mais
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
