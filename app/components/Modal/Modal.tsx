'use client';

import React from 'react';
import styles from './modal.module.css';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  showActionButton?: boolean;
  actionButtonText?: string;
  onActionClick?: () => void;
  actionButtonHref?: string;
}

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
  showActionButton = false,
  actionButtonText = 'Solicitar Orçamento →',
  onActionClick,
  actionButtonHref,
}: ModalProps) {
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleActionClick = () => {
    if (actionButtonHref) {
      onClose();
      // Pequeno delay para permitir que o modal feche antes do scroll
      setTimeout(() => {
        const element = document.querySelector(actionButtonHref);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 300);
    }
    if (onActionClick) {
      onActionClick();
    }
  };

  // Gerenciar overflow do body e tecla ESC
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      // Salva o overflow original
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleKeyDown);

      return () => {
        // Restaura o overflow original
        document.body.style.overflow = originalOverflow;
        document.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

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
        <div className={styles.content}>{children}</div>

        {/* Footer (opcional) */}
        {showActionButton && (
          <div className={styles.footer}>
            <button 
              className={styles.actionButton}
              onClick={handleActionClick}
            >
              {actionButtonText}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
