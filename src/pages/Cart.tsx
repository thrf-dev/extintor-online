import React from "react";

import Header from "../components/Header/Header.tsx";
import BannerPage from "../components/BannerPage/BannerPage.tsx";
import Footer from "../components/Footer/Footer.tsx";
import Copyright from "../components/Copyright/Copyright.tsx";
import Carrinho from "../components/Carrinho/Carrinho.tsx";

export const Cart: React.FC = () => {
  return (
    <>
      <Header />
      <BannerPage titulo="Revisar Cotação" />
      <Carrinho />
      <Footer />
      <Copyright />
    </>
  );
};

export default Cart;
