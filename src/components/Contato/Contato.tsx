import React from "react";
import styles from "./style.module.scss";

export const Contato: React.FC = () => {
  return (
    <section className={styles.infos}>
      <div className={styles.container}>
        <div className={styles.contact_title}>
          <h2>Horário de Funcionamento</h2>
          <div className={styles.contact_card}>
            <p>
              <span>Segunda a Sexta-feira:</span> das 8 às 18h.
              <br />
              <span>Sábado:</span> das 8h às 14h.
              <br />
              <span>Domingo:</span> fechado.
            </p>
          </div>
        </div>

        <div className={styles.contact_title}>
          <h2>Endereço</h2>
          <div className={styles.contact_card}>
            <p>
              <span>Rua Castor, 25</span>
              <br />
              Jardim Satélite <span>- São José dos Campos/SP</span>
              <br />
              <span>CEP:</span> 12.230-320
            </p>
          </div>
        </div>

        <div className={styles.contact_title}>
          <h2>Telefones</h2>
          <div className={styles.contact_card}>
            <p>
              <span>Fixo:</span> (12) 3308-0920
              <br />
              <span>WhatsApp:</span> (12) 99724-7313 / 99777-9398
            </p>
          </div>
        </div>

        <div className={styles.contact_title}>
          <h2>E-mails</h2>
          <div className={styles.contact_card}>
            <p>
              contato@extintoronline.com.br
              <br />
              vendas@extintoronline.com.br
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contato;
