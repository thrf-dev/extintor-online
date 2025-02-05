import React from "react";
import { useNavigate } from "react-router-dom"; // Importa o hook useNavigate
import styles from "./style.module.scss";

import abrigo from "../../assets/images/abrigosdeparede.svg";
import acessorios from "../../assets/images/acessorios.svg";
import botoeiras from "../../assets/images/botoeirasealarmes.svg";
import conexoes from "../../assets/images/conexoes.svg";
import esguichos from "../../assets/images/esguichos.svg";
import extintores from "../../assets/images/extintores.svg";
import porta from "../../assets/images/porta.svg";
import registros from "../../assets/images/registros.svg";
import sinalizacao from "../../assets/images/sinalização.svg";

export const ProdCategories: React.FC = () => {
  const navigate = useNavigate(); // Inicializa o hook de navegação

  return (
    <main className={styles.prodcategories}>
      <div className={styles.title}>
        <h1>Nossos Produtos</h1>
      </div>

      <div className={styles.products}>
        <div className={styles.product}>
          <img src={abrigo} alt="Abrigo de Parede" />
          <h2>Abrigos de Parede</h2>
          <button onClick={() => navigate("produtos")}>VER PRODUTOS</button>
        </div>

        <div className={styles.product}>
          <img src={acessorios} alt="Acessórios" />
          <h2>Acessórios</h2>
          <button onClick={() => navigate("produtos")}>VER PRODUTOS</button>
        </div>

        <div className={styles.product}>
          <img src={botoeiras} alt="Botoeiras e Alarmes" />
          <h2>Botoeiras e Alarmes</h2>
          <button onClick={() => navigate("produtos")}>VER PRODUTOS</button>
        </div>

        <div className={styles.product}>
          <img src={conexoes} alt="Conexões" />
          <h2>Conexões</h2>
          <button onClick={() => navigate("produtos")}>VER PRODUTOS</button>
        </div>

        <div className={styles.product}>
          <img src={esguichos} alt="Esguichos e Sprinklers" />
          <h2>Esguichos e Sprinklers</h2>
          <button onClick={() => navigate("produtos")}>VER PRODUTOS</button>
        </div>

        <div className={styles.product}>
          <img src={extintores} alt="Extintor de Incêndio" />
          <h2>Extintores</h2>
          <button onClick={() => navigate("produtos")}>VER PRODUTOS</button>
        </div>

        <div className={styles.product}>
          <img src={porta} alt="Porta Corta Fogo" />
          <h2>Porta Corta Fogo</h2>
          <button onClick={() => navigate("produtos")}>VER PRODUTOS</button>
        </div>

        <div className={styles.product}>
          <img src={registros} alt="Registros e Válvulas" />
          <h2>Registros e Válvulas</h2>
          <button onClick={() => navigate("produtos")}>VER PRODUTOS</button>
        </div>

        <div className={styles.product}>
          <img src={sinalizacao} alt="Sinalização" />
          <h2>Sinalização</h2>
          <button onClick={() => navigate("produtos")}>VER PRODUTOS</button>
        </div>
      </div>
    </main>
  );
};

export default ProdCategories;
