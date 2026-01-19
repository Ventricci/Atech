'use client';

import React from 'react';
import styles from './aboutUs.module.css';

export default function AboutUs() {
  return (
    <section id="sobre" className={styles.aboutUs}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Imagem - Oculta em mobile */}
          <div className={styles.imageWrapper}>
            <img
              src="/about-us.png"
              alt="Sobre a ATECH"
              className={styles.image}
            />
          </div>

          {/* Conteúdo de Texto */}
          <div className={styles.content}>
            {/* Tag "Sobre nós" com linha decorativa */}
            <div className={styles.tag}>
              <div className={styles.tagLine}></div>
              <span className={styles.tagText}>Sobre nós</span>
            </div>

            {/* Título Principal */}
            <h2 className={styles.title}>
              Do planejamento à entrega,
              <br />
              criamos soluções eficientes
            </h2>

            {/* Parágrafos de texto */}
            <p className={styles.paragraph}>
              Somos uma empresa de desenvolvimento de software focada em criar
              soluções digitais eficientes, seguras e sob medida para cada negócio.
            </p>

            <p className={styles.paragraph}>
              Unimos estratégia, tecnologia e design para transformar desafios em
              produtos que geram valor real, otimizam processos e impulsionam
              resultados.
            </p>

            <p className={styles.paragraph}>
              Trabalhamos de forma colaborativa, com foco em inovação, qualidade
              e transparência em todas as etapas, ajudando nossos clientes a evoluir
              e se destacar em um mercado cada vez mais digital.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}