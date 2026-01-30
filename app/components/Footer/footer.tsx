'use client';

import React from 'react';
import styles from './footer.module.css';
import { Logo } from '../shared';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Logo */}
          <div className={styles.logoSection}>
            <Logo variant="footer" />
          </div>

          {/* Endereço */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Endereço</h3>
            <p className={styles.sectionText}>Rua Ibrahim Pacifico da Silva, 181</p>
            <p className={styles.sectionText}>Caçapava - SP</p>
          </div>

          {/* Contato */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Contato</h3>
            <a href="mailto:alexsander.ventricci@gmail.com" className={styles.link}>
              alexsander.ventricci@gmail.com
            </a>
            <a href="tel:+5535992753388" className={styles.link}>
              +55 (35) 99275 - 33388
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className={styles.copyright}>
          <p>Copyright © 2025 - Atech Tecnologia e Sistemas Ltda</p>
        </div>
      </div>
    </footer>
  );
}
