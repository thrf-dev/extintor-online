import React from "react";
import styles from "./style.module.scss";

export const Copyright: React.FC = () => {
  return (
    <div className={styles.footer_copy}>
      <div className={styles.infos}>
        <h3>
          Copyright © 2025 - Extintor Online - Todos os Direitos Reservados.
          Desenvolvido por
          <a
            href="https://www.linkedin.com/in/thamiresfig/"
            target="_blank"
            rel="noreferrer"
          >
            Thamires Figueiredo
          </a>
          .
        </h3>
      </div>
    </div>
  );
};

export default Copyright;
