import React from 'react';
import styles from './processModalContent.module.css';

export default function ProcessModalContent() {
  return (
    <>
      <p className={styles.introduction}>
        Trabalhamos com uma metodologia estruturada em 4 etapas fundamentais, garantindo que cada projeto seja desenvolvido com excelência do início ao fim.
      </p>

      <div className={styles.steps}>
        <div className={styles.step}>
          <div className={styles.stepNumber}>1</div>
          <div className={styles.stepContent}>
            <h3 className={styles.stepTitle}>Estratégia</h3>
            <p className={styles.stepDescription}>
              Primeiro, na fase de <strong>Estratégia</strong>, entendemos profundamente o que você gostaria de construir, realizando reuniões para compreender seus objetivos, desafios e expectativas, mapeando requisitos e alinhando a visão do projeto com as necessidades reais do seu negócio.
            </p>
          </div>
        </div>

        <div className={styles.step}>
          <div className={styles.stepNumber}>2</div>
          <div className={styles.stepContent}>
            <h3 className={styles.stepTitle}>Protótipo</h3>
            <p className={styles.stepDescription}>
              Em seguida, no <strong>Protótipo</strong>, baseados na sua estratégia, mapeamos o fluxo da sua aplicação, criando wireframes, mockups e protótipos interativos que permitem visualizar como o sistema funcionará antes mesmo do desenvolvimento começar.
            </p>
          </div>
        </div>

        <div className={styles.step}>
          <div className={styles.stepNumber}>3</div>
          <div className={styles.stepContent}>
            <h3 className={styles.stepTitle}>Desenvolvimento</h3>
            <p className={styles.stepDescription}>
              Na etapa de <strong>Desenvolvimento</strong>, nossos programadores começam a construção da sua solução, transformando o protótipo em um sistema funcional, robusto e escalável, trabalhando de forma ágil com entregas incrementais e comunicação constante.
            </p>
          </div>
        </div>

        <div className={styles.step}>
          <div className={styles.stepNumber}>4</div>
          <div className={styles.stepContent}>
            <h3 className={styles.stepTitle}>Implantação</h3>
            <p className={styles.stepDescription}>
              Por fim, na <strong>Implantação</strong>, lançamos sua aplicação, tornando-a acessível para todo seu público alvo, realizando testes finais, configurando servidores e garantindo que tudo esteja funcionando perfeitamente.
            </p>
          </div>
        </div>
      </div>

      <p className={styles.conclusion}>
        Todo o processo é executado de forma transparente, colaborativa e focada no seu sucesso, sempre mantendo você informado sobre o andamento do projeto, do planejamento à entrega.
      </p>
    </>
  );
}
