'use client';

import React, { useState } from 'react';
import styles from './process.module.css';
import { Modal } from '../Modal';
import ProcessModalContent from './ProcessModalContent';

const processSteps = [
  {
    id: 1,
    icon: '/SVGIcons/IconStrategy.svg',
    title: 'Estratégia',
    description: 'Primeiro, entendemos profundamente o que você gostaria de construir.',
  },
  {
    id: 2,
    icon: '/SVGIcons/IconPrototype.svg',
    title: 'Protótipo',
    description: 'Baseados na sua estratégia, mapeamos o fluxo da sua aplicação.',
  },
  {
    id: 3,
    icon: '/SVGIcons/IconDevelopment.svg',
    title: 'Desenvolvimento',
    description: 'Nossos programadores começam a construção da sua solução.',
  },
  {
    id: 4,
    icon: '/SVGIcons/IconDeployment.svg',
    title: 'Implantação',
    description: 'Lançamos sua aplicação, tornando-a acessível para todo seu público alvo.',
  },
];

export default function Process() {
  const [currentStep, setCurrentStep] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  const handleNext = () => {
    setCurrentStep((prev) => (prev + 1) % processSteps.length);
  };

  const handlePrev = () => {
    setCurrentStep((prev) => (prev - 1 + processSteps.length) % processSteps.length);
  };

  const handleDotClick = (index: number) => {
    setCurrentStep(index);
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <section className={styles.process} id="processo">
      <div className={styles.container}>
        <h2 className={styles.title}>Nosso Processo de Trabalho</h2>
        <div className={styles.divider}></div>

        {/* Desktop View - All steps visible */}
        <div className={styles.stepsContainerDesktop}>
          {processSteps.map((step, index) => (
            <React.Fragment key={step.id}>
              <div className={styles.stepCard}>
                <div className={styles.iconCircle}>
                  <img 
                    src={step.icon} 
                    alt={step.title} 
                    className={styles.stepIcon}
                  />
                </div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDescription}>{step.description}</p>
              </div>
              {index < processSteps.length - 1 && (
                <div className={styles.connector}></div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Mobile View - Carousel */}
        <div className={styles.carouselContainer}>
          <button 
            className={styles.carouselButton}
            onClick={handlePrev}
            aria-label="Passo anterior"
          >
            ‹
          </button>

          <div className={styles.carouselContent}>
            <div className={styles.stepCard}>
              <div className={styles.iconCircle}>
                <img 
                  src={processSteps[currentStep].icon} 
                  alt={processSteps[currentStep].title} 
                  className={styles.stepIcon}
                />
              </div>
              <h3 className={styles.stepTitle}>{processSteps[currentStep].title}</h3>
              <p className={styles.stepDescription}>{processSteps[currentStep].description}</p>
            </div>
          </div>

          <button 
            className={styles.carouselButton}
            onClick={handleNext}
            aria-label="Próximo passo"
          >
            ›
          </button>
        </div>

        {/* Carousel Dots */}
        <div className={styles.dotsContainer}>
          {processSteps.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${index === currentStep ? styles.dotActive : ''}`}
              onClick={() => handleDotClick(index)}
              aria-label={`Ir para passo ${index + 1}`}
            />
          ))}
        </div>

        {/* CTA Button */}
        <div className={styles.ctaContainer}>
          <button className={styles.ctaButton} onClick={openModal}>
            Saiba mais
          </button>
        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={modalOpen}
        onClose={closeModal}
        title="Nosso Processo de Trabalho"
        showActionButton={true}
        actionButtonText="Solicitar Orçamento →"
        actionButtonHref="#contato"
      >
        <ProcessModalContent />
      </Modal>
    </section>
  );
}
