'use client';

import React from 'react';
import styles from './logo.module.css';

interface LogoProps {
  variant?: 'default' | 'footer';
  className?: string;
}

export default function Logo({ variant = 'default', className = '' }: LogoProps) {
  return (
    <a 
      href="/" 
      className={`${styles.logo} ${styles[variant]} ${className}`}
      aria-label="ATECH - Página inicial"
    >
      <span className={styles.letterA}>A</span>
      <span className={styles.letterTech}>TECH</span>
    </a>
  );
}
