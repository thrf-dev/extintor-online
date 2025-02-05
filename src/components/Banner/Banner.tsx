import React from "react";
import styles from "./styles.module.scss";

export const Banner: React.FC = () => {
  return (
    <section
      className={styles.banner}
      aria-labelledby="banner-title"
      aria-describedby="banner-description"
    >
      <div>
        <h1 id="banner-title">Olá, seja bem-vindo(a)!</h1>
        <p id="banner-description">
          A Extintor Online tem mais de 15 anos de experiência em prevenção e
          combate a incêndios. Oferecemos equipamentos e sistemas que atendem ao
          Decreto do Corpo de Bombeiros e às normas vigentes, com foco na
          segurança de pessoas e patrimônios.
        </p>
      </div>
    </section>
  );
};

export default Banner;
