'use client';

import React from 'react';
import styles from './serviceModal.module.css';

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: {
    introduction: string;
    offerings: {
      title: string;
      items: string[];
    };
    target: string;
  };
}

export default function ServiceModal({ isOpen, onClose, title, content }: ServiceModalProps) {
  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={styles.backdrop} onClick={handleBackdropClick}>
      <div className={styles.modal}>
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
          <button 
            className={styles.closeButton} 
            onClick={onClose}
            aria-label="Fechar modal"
          >
            ×
          </button>
        </div>

        {/* Content */}
        <div className={styles.content}>
          <p className={styles.introduction}>{content.introduction}</p>

          <div className={styles.offerings}>
            <h3 className={styles.offeringsTitle}>{content.offerings.title}</h3>
            <ul className={styles.offeringsList}>
              {content.offerings.items.map((item, index) => {
                const [itemTitle, ...itemDescription] = item.split(':');
                return (
                  <li key={index} className={styles.offeringsItem}>
                    <strong>{itemTitle}:</strong>
                    {itemDescription.join(':')}
                  </li>
                );
              })}
            </ul>
          </div>

          <p className={styles.target}>
            <strong>Indicado para:</strong> {content.target}
          </p>
        </div>

        {/* Footer */}
        <div className={styles.footer}>
          <button className={styles.actionButton}>
            Solicitar Orçamento →
          </button>
        </div>
      </div>
    </div>
  );
}
