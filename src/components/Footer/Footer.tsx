import React from "react";
import styles from "./style.module.scss";

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_contact}>
        <h2>
          Entre em contato para solicitar um orçamento ou uma visita técnica.
          <br />
          Será um prazer atendê-lo(a)!
        </h2>

        <button>
          <a
            href="https://api.whatsapp.com/send?phone=5512997247313&text=Olá! Gostaria de fazer um orçamento."
            target="_blank"
            rel="noreferrer"
          >
            FALE CONOSCO
          </a>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
