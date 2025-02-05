import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./style.module.scss";

interface ProductCardProps {
  titulo: string;
  categoria: string;
  thumbnail: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  titulo,
  categoria,
  preco,
  thumbnail,
}) => {
  const [showPopup, setShowPopup] = useState(false); // Estado para controlar a visibilidade do pop-up
  const navigate = useNavigate();

  // Função para adicionar ao carrinho e redirecionar para a página do carrinho
  const handleAddToCart = () => {
    // Aqui você pode adicionar o produto ao carrinho (em um estado global ou localStorage, por exemplo)

    // Exemplo: Adicionar ao carrinho no localStorage
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");

    // Verifica se o produto já existe no carrinho
    const existingProduct = cart.find((item: any) => item.titulo === titulo);

    if (existingProduct) {
      // Se o produto já existir, incrementa a quantidade
      existingProduct.quantidade += 1;
    } else {
      // Caso contrário, adiciona o produto com quantidade 1
      const product = { titulo, categoria, preco, thumbnail, quantidade: 1 };
      cart.push(product);
    }

    // Salva o carrinho atualizado no localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    // Exibe o pop-up
    setShowPopup(true);
  };

  // Função para redirecionar para o carrinho
  const redirectToCart = () => {
    navigate("/carrinho");
    setShowPopup(false);
  };

  // Função para fechar o pop-up sem redirecionar
  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className={styles.product}>
      <div className={styles.product_infos}>
        <img src={thumbnail} alt={titulo} />
        <div className={styles.text_content}>
          <h2>{titulo}</h2>
          <h3>{categoria}</h3>
          {/* <p>R${preco}</p> */}
        </div>

        <button className={styles.addCart} onClick={handleAddToCart}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
            <path
              fill="#ffffff"
              d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
            />
          </svg>
          ADICIONAR
        </button>
      </div>

      {showPopup && (
        <div className={styles.popup}>
          <div className={styles.popup_content}>
            <h3>Produto adicionado ao carrinho!</h3>
            <p>Deseja ir para o carrinho agora?</p>
            <div className={styles.popup_buttons}>
              <button onClick={redirectToCart}>Sim, ir para o carrinho</button>
              <button onClick={closePopup}>Continuar comprando</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
