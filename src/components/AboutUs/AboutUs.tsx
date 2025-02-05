import React from "react";
import styles from "./style.module.scss";

interface AboutUsProps {
  aboutTitle: string;
  descricao: string;
  image: string;
}

export const AboutUs: React.FC<AboutUsProps> = ({
  aboutTitle,
  descricao,
  image,
}) => {
  return (
    <section className={styles.about} aria-labelledby="about-title">
      <div className={styles.histEqui}>
        <article className={styles.texts}>
          <header>
            <h1 id="about-title">{aboutTitle}</h1>
          </header>
          <p>{descricao}</p>
        </article>
        <figure className={styles.img}>
          <img src={image} alt={`Imagem ilustrativa sobre ${aboutTitle}`} />
        </figure>
      </div>
    </section>
  );
};

export default AboutUs;
