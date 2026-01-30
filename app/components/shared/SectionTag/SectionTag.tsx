import React from 'react';
import styles from './sectionTag.module.css';

interface SectionTagProps {
  text: string;
  coloredText?: string;
  variant?: 'left' | 'center';
}

export default function SectionTag({ text, coloredText, variant = 'center' }: SectionTagProps) {
  return (
    <div className={`${styles.tag} ${styles[variant]}`}>
      {variant === 'left' && <div className={styles.tagLine}></div>}
      <span className={styles.tagText}>
        {coloredText ? (
          <>
            <span className={styles.normalText}>{text}</span>{' '}
            <span className={styles.coloredText}>{coloredText}</span>
          </>
        ) : (
          text
        )}
      </span>
      {variant === 'center' && <div className={styles.tagLine}></div>}
    </div>
  );
}
