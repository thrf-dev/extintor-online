import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import styles from "./style.module.scss";

export const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  // Fecha o menu ao redimensionar para desktop
  useEffect(() => {
    const handleResize = () => {
      const isMobileView = window.innerWidth <= 768;
      setIsMobile(isMobileView);

      if (!isMobileView) {
        setMenuOpen(false); // Garante que o menu está fechado no desktop
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav>
          {/* Logo */}
          <Link to="/" className={styles.logo}>
            <img src={logo} alt="Logo Extintor Online" />
          </Link>

          {/* Botão hamburguer (apenas no mobile) */}
          {isMobile && (
            <button
              className={`${styles.hamburger} ${menuOpen ? styles.open : ""}`}
              onClick={toggleMenu}
              aria-label="Menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          )}

          {/* Menu */}
          <ul
            className={`${styles.navMenu} ${
              menuOpen && isMobile ? styles.active : ""
            }`}
          >
            <li>
              <Link to="/" onClick={() => setMenuOpen(false)}>
                INÍCIO
              </Link>
            </li>
            <li>
              <Link to="/produtos" onClick={() => setMenuOpen(false)}>
                PRODUTOS
              </Link>
            </li>
            <li>
              <Link to="/quem-somos" onClick={() => setMenuOpen(false)}>
                QUEM SOMOS
              </Link>
            </li>
            <li>
              <Link to="/contato" onClick={() => setMenuOpen(false)}>
                CONTATO
              </Link>
            </li>
            <button>
              <Link to="/carrinho">CARRINHO</Link>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path
                  fill="#ffffff"
                  d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
                />
              </svg>
            </button>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
