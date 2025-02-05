import React from "react";

import Header from "../components/Header/Header.tsx";
import BannerPage from "../components/BannerPage/BannerPage.tsx";
import ProductsPage from "../components/ProductsPage/ProductsPage.tsx";
import Footer from "../components/Footer/Footer.tsx";
import Copyright from "../components/Copyright/Copyright.tsx";

export const Products: React.FC = () => {
  return (
    <>
      <Header />
      <BannerPage titulo="Nossos Produtos" />
      <ProductsPage />
      <Footer />
      <Copyright />
    </>
  );
};

export default Products;
