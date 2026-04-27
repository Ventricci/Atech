'use client';

import React from 'react';
import Link from 'next/link';
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
      aria-label="Linfa Tecnologia - Página inicial"
    >
	      <span className={styles.firstWord}>Linfa</span>
	      <span className={styles.secondWord}>Tecnologia</span>
    </a>
  );
}
