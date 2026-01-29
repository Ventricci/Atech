import React from 'react';
import styles from './serviceModalContent.module.css';

interface ServiceModalContentProps {
  content: {
    introduction: string;
    offerings: {
      title: string;
      items: string[];
    };
    target: string;
  };
}

export default function ServiceModalContent({ content }: ServiceModalContentProps) {
  return (
    <>
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
    </>
  );
}
