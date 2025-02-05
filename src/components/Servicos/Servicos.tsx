import React from "react";
import styles from "./style.module.scss";
import servicos from "../../assets/images/serviços.svg";

export const Servicos: React.FC = () => {
  return (
    <section className={styles.aboutServ}>
      <div className={styles.serv}>
        <div className={styles.img}>
          <img src={servicos} alt="Pessoa usando extintor de incêndio." />
        </div>
        <div className={styles.texts}>
          <h1>Serviços prestados</h1>
          <p>
            - Elaboração e atualização de projetos.
            <br />
            - Assessoria completa para emissão ou renovação do AVCB.
            <br />
            - Treinamento de brigada de incêndio.
            <br />
            - Formação e reciclagem de bombeiros civis.
            <br />
            - Realização de checklists para identificar pendências em desacordo
            com as exigências para vistoria do Corpo de Bombeiros.
            <br />
            - Contratos eventuais, mensais ou anuais para inspeção de
            equipamentos de combate a incêndio.
            <br />
            - Emissão de ARTs necessárias para aprovação na vistoria do Corpo de
            Bombeiros.
            <br />
            - Emissão de laudos técnicos para seguradoras.
            <br />
            - Implantação de sistemas hidráulicos e elétricos de combate a
            incêndio.
            <br />
            - Recarga e teste hidrostático de mangueiras.
            <br />
            -Regulagem e instalação de portas corta-fogo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Servicos;
