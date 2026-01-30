'use client';

import React, { useState } from 'react';
import styles from './services.module.css';
import { Modal } from '../Modal';
import { SectionTag } from '../shared';
import ServiceModalContent from './ServiceModalContent';
import { servicesContent } from './servicesData';
import { useCarousel } from '../../hooks/useCarousel';

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
    titlePlain: 'Desenvolvimento de Software Personalizado',
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
    titlePlain: 'Consultoria em Tecnologia da Informação',
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
    titlePlain: 'Monitoramento e Suporte a Aplicações',
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
    titlePlain: 'Integração entre Sistemas e Aplicações',
    description: 'Desenvolvimento e implementação de soluções que permite a comunicação e intercâmbio de informações e processos',
  },
];

export default function Services() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<number | null>(null);
  
  const {
    currentIndex: currentSlide,
    isTransitioning,
    next: nextSlide,
    prev: prevSlide,
    goTo: goToSlide
  } = useCarousel({ itemsLength: servicesData.length });

  const openModal = (serviceId: number) => {
    setSelectedService(serviceId);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedService(null);
  };

  return (
    <section id="servicos" className={styles.services}>
      <div className={styles.container}>
        {/* Título da Seção */}
        <div className={styles.header}>
          <SectionTag text="Nossos" coloredText="Serviços" />
        </div>

        {/* Grid de Cards - Desktop */}
        <div className={styles.grid}>
          {servicesData.map((service) => (
            <div 
              key={service.id} 
              className={styles.card}
              onClick={() => openModal(service.id)}
            >
              <img
                src={service.icon}
                alt=""
                className={styles.cardIcon}
              />
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDescription}>{service.description}</p>
              <span className={styles.cardLink}>
                Ler mais <span className={styles.arrow}>→</span>
              </span>
            </div>
          ))}
        </div>

        {/* Carrossel - Mobile */}
        <div className={styles.carousel}>
          <button
            className={`${styles.carouselButton} ${styles.carouselButtonPrev}`}
            onClick={prevSlide}
            disabled={isTransitioning}
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
                onClick={() => openModal(service.id)}
              >
                <img
                  src={service.icon}
                  alt=""
                  className={styles.cardIcon}
                />
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardDescription}>{service.description}</p>
                <span className={styles.cardLink}>
                  Ler mais <span className={styles.arrow}>→</span>
                </span>
              </div>
            ))}
          </div>

          <button
            className={`${styles.carouselButton} ${styles.carouselButtonNext}`}
            onClick={nextSlide}
            disabled={isTransitioning}
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
                disabled={isTransitioning}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedService && (
        <Modal
          isOpen={modalOpen}
          onClose={closeModal}
          title={servicesData.find(s => s.id === selectedService)?.titlePlain || ''}
          showActionButton={true}
          actionButtonText="Solicitar Orçamento →"
          actionButtonHref="#contato"
        >
          <ServiceModalContent content={servicesContent[selectedService]} />
        </Modal>
      )}
    </section>
  );
}
