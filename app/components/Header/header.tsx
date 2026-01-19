'use client';

import React, { useState } from 'react';
import styles from './header.module.css';

const menuItems = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Processo', href: '#processo' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 900);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.toolbar}>
          {/* Logo ATECH */}
          <a href="/" className={styles.logo}>
            <span style={{ color: '#25A18E' }}>A</span>
            <span style={{ color: '#16425B' }}>TECH</span>
          </a>

          {/* Menu Desktop - Centro */}
          {!isMobile && (
            <nav className={styles.nav}>
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={styles.navLink}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          )}

          {/* Botão Contate-nos Desktop / Menu Mobile */}
          {isMobile ? (
            <button
              className={styles.menuButton}
              onClick={handleDrawerToggle}
              aria-label="abrir menu"
            >
              ☰
            </button>
          ) : (
            <a href="#contato" className={styles.ctaButton}>
              Contate-nos
            </a>
          )}
        </div>
      </header>

      {/* Menu Mobile Drawer */}
      {mobileOpen && (
        <>
          <div 
            className={styles.overlay}
            onClick={handleDrawerToggle}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              zIndex: 1100,
            }}
          />
          <div 
            className={styles.drawer}
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              bottom: 0,
              zIndex: 1200,
            }}
          >
            <div className={styles.drawerHeader}>
              <button onClick={handleDrawerToggle} style={{ border: 'none', background: 'none', fontSize: '1.5rem', cursor: 'pointer' }}>
                ✕
              </button>
            </div>
            <ul className={styles.drawerList}>
              {menuItems.map((item) => (
                <li key={item.label} className={styles.drawerItem}>
                  <a
                    href={item.href}
                    className={styles.drawerLink}
                    onClick={handleDrawerToggle}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className={styles.drawerItem}>
                <a href="#contato" className={styles.drawerCtaButton}>
                  Contate-nos
                </a>
              </li>
            </ul>
          </div>
        </>
      )}

      {/* Spacer para compensar o header fixo */}
      <div style={{ height: '80px' }} />
    </>
  );
}
