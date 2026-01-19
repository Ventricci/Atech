'use client';

import React from 'react';
import styles from './hero.module.css';

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Tag "Inovação" */}
          <div className={styles.tag}>
            <div className={styles.tagLine}></div>
            <span className={styles.tagText}>Inovação</span>
          </div>

          {/* Título Principal */}
          <h1 className={styles.title}>
            Movendo seu negócio
            <br />
            em direção ao futuro
          </h1>

          {/* Botão CTA */}
          <a href="#processo" className={styles.ctaButton}>
            Saiba mais
          </a>
        </div>
      </div>
    </div>
  );
}
