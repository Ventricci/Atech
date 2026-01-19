'use client';

import React, { useState } from 'react';
import styles from './services.module.css';

const servicesData = [
  {
    id: 1,
    icon: '/SVGIcons/IconCard1.svg',
    title: (
      <>
        Desenvolvimento de
        <br />
        Software Personalizado
      </>
    ),
    description: 'Criação de sistemas e aplicações sob medida, desenvolvidos conforme as necessidades específicas de cada cliente',
  },
  {
    id: 2,
    icon: '/SVGIcons/IconCard2.svg',
    title: (
      <>
        Consultoria em Tecnologia
        <br />
        da Informação
      </>
    ),
    description: 'Análise, orientação e proposição de soluções tecnológicas voltadas à melhoria de processos, sistemas e infraestrutura de TI',
  },
  {
    id: 3,
    icon: '/SVGIcons/IconCard3.svg',
    title: (
      <>
        Monitoramento e Suporte
        <br />
        a Aplicações
      </>
    ),
    description: 'Acompanhamento contínuo do funcionamento de softwares, com identificação preventiva de falhas, correções e ajustes técnicos',
  },
  {
    id: 4,
    icon: '/SVGIcons/IconCard4.svg',
    title: (
      <>
        Integração entre
        <br />
        Sistemas e Aplicações
      </>
    ),
    description: 'Desenvolvimento e implementação de soluções que permite a comunicação e intercâmbio de informações e processos',
  },
];

export default function Services() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % servicesData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + servicesData.length) % servicesData.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section id="servicos" className={styles.services}>
      <div className={styles.container}>
        {/* Título da Seção */}
        <div className={styles.header}>
          <div className={styles.tag}>
            <h2 className={styles.tagText}>
              <span style={{ color: '#16425B' }}>Nossos</span>{' '}
              <span style={{ color: '#3A7CA5' }}>Serviços</span>
            </h2>
            <div className={styles.tagLine}></div>
          </div>
        </div>

        {/* Grid de Cards - Desktop */}
        <div className={styles.grid}>
          {servicesData.map((service) => (
            <div key={service.id} className={styles.card}>
              <img
                src={service.icon}
                alt=""
                className={styles.cardIcon}
              />
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDescription}>{service.description}</p>
              <a href="#" className={styles.cardLink}>
                Ler mais <span className={styles.arrow}>→</span>
              </a>
            </div>
          ))}
        </div>

        {/* Carrossel - Mobile */}
        <div className={styles.carousel}>
          <button
            className={`${styles.carouselButton} ${styles.carouselButtonPrev}`}
            onClick={prevSlide}
            aria-label="Anterior"
          >
            ‹
          </button>

          <div className={styles.carouselTrack}>
            {servicesData.map((service, index) => (
              <div
                key={service.id}
                className={`${styles.carouselCard} ${
                  index === currentSlide ? styles.carouselCardActive : ''
                }`}
                style={{
                  transform: `translateX(-${currentSlide * 100}%)`,
                }}
              >
                <img
                  src={service.icon}
                  alt=""
                  className={styles.cardIcon}
                />
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardDescription}>{service.description}</p>
                <a href="#" className={styles.cardLink}>
                  Ler mais <span className={styles.arrow}>→</span>
                </a>
              </div>
            ))}
          </div>

          <button
            className={`${styles.carouselButton} ${styles.carouselButtonNext}`}
            onClick={nextSlide}
            aria-label="Próximo"
          >
            ›
          </button>

          {/* Indicadores (bolinhas) */}
          <div className={styles.carouselIndicators}>
            {servicesData.map((_, index) => (
              <button
                key={index}
                className={`${styles.indicator} ${
                  index === currentSlide ? styles.indicatorActive : ''
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
