import React from "react";
import styles from "./style.module.scss";

// Função BannerPage com SEO melhorado
export function BannerPage({ titulo }: { titulo: string }) {
  return (
    <section className={styles.bannerPage} aria-labelledby="banner-title">
      <div className={styles.titulo}>
        <h1 id="banner-title">{titulo}</h1>
      </div>
    </section>
  );
}

export default BannerPage;
