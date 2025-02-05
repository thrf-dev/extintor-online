import React, { useState, useEffect } from "react";
import styles from "./style.module.scss";

import addBtn from "../../assets/images/plus.svg";
import exBtn from "../../assets/images/minus.svg";

export const Carrinho: React.FC = () => {
  const [cart, setCart] = useState<any[]>([]);
  const [thankYouMessage, setThankYouMessage] = useState(false);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    document: "",
    cep: "",
    street: "",
    city: "",
    state: "",
    houseNumber: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const loadCart = () => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    const cartWithQuantity = storedCart.map((item: any) => ({
      ...item,
      quantity: item.quantity || 1,
    }));
    setCart(cartWithQuantity);
  };

  const updateQuantity = (index: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    const updatedCart = [...cart];
    updatedCart[index].quantity = newQuantity;
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const removeItem = (index: number) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  useEffect(() => {
    loadCart();
  }, []);

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!userData.name) newErrors.name = "O nome é obrigatório.";
    if (!userData.email || !/\S+@\S+\.\S+/.test(userData.email))
      newErrors.email = "E-mail inválido.";
    if (!userData.document || !/^\d{11,14}$/.test(userData.document))
      newErrors.document = "CPF ou CNPJ inválido.";
    if (!userData.cep || userData.cep.length !== 8)
      newErrors.cep = "CEP inválido.";
    if (!userData.houseNumber)
      newErrors.houseNumber = "Número da casa é obrigatório.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const generateWhatsAppMessage = () => {
    const uniqueOrderId = `PED${Date.now()}-${Math.floor(Math.random() * 10)}`;
    let message = `🛒 *Orçamento via Site*:\n\n`;
    message += `*ID do Pedido:* ${uniqueOrderId}\n\n`;
    message += `*Nome:* ${userData.name}\n`;
    message += `*E-mail:* ${userData.email}\n`;
    message += `*CPF/CNPJ:* ${userData.document}\n`;
    message += `*CEP:* ${userData.cep}\n`;
    message += `*Endereço:* ${userData.street}, ${userData.houseNumber}, ${userData.city} - ${userData.state}\n\n`;
    cart.forEach((item) => {
      message += `*Produto:* ${item.titulo}\n`;
      message += `*Quantidade:* ${item.quantity}\n`;
    });
    setCart([]);
    localStorage.removeItem("cart");
    setThankYouMessage(true);
    return message;
  };

  const handleSendToWhatsApp = () => {
    if (!validateForm()) return;
    const message = generateWhatsAppMessage();
    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = "+5512997247313";
    const link = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(link, "_blank");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleCepChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const cep = event.target.value.replace(/\D/g, "");
    setUserData((prevState) => ({
      ...prevState,
      cep,
    }));

    if (cep.length === 8) {
      try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();

        if (data.erro) {
          setErrors((prevState) => ({
            ...prevState,
            cep: "CEP não encontrado.",
          }));
        } else {
          setUserData((prevState) => ({
            ...prevState,
            street: data.logradouro || "",
            city: data.localidade || "",
            state: data.uf || "",
          }));
          setErrors((prevState) => ({
            ...prevState,
            cep: "",
          }));
        }
      } catch {
        setErrors((prevState) => ({
          ...prevState,
          cep: "Erro ao buscar o CEP. Tente novamente.",
        }));
      }
    } else {
      setErrors((prevState) => ({
        ...prevState,
        cep: "CEP inválido. Digite 8 números.",
      }));
    }
  };

  return (
    <div className={styles.container}>
      {thankYouMessage ? (
        <div className={styles.thankYouMessage}>
          <h2>Cotação enviada com sucesso!</h2>
          <p>
            Desde já agradecemos a preferência, entraremos em contato em breve.
          </p>
        </div>
      ) : (
        <>
          <table className={styles.cart_table}>
            <thead>
              <tr>
                <th className={styles.thprod}>Produto</th>
                <th>Qtd.</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cart.length > 0 ? (
                cart.map((item, index) => (
                  <tr key={index}>
                    <td>{item.titulo}</td>
                    <td>
                      <div className={styles.quantity_controls}>
                        <button
                          onClick={() =>
                            updateQuantity(index, item.quantity - 1)
                          }
                          disabled={item.quantity <= 1}
                        >
                          <img src={exBtn} alt="Diminuir" />
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() =>
                            updateQuantity(index, item.quantity + 1)
                          }
                        >
                          <img src={addBtn} alt="Aumentar" />
                        </button>
                      </div>
                    </td>
                    <td className={styles.tdremove}>
                      <button onClick={() => removeItem(index)}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                        >
                          <path
                            fill="#c7c7c7"
                            d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"
                          />
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5}>Carrinho vazio</td>
                </tr>
              )}
            </tbody>
          </table>

          {cart.length > 0 && (
            <div className={styles.cart_form}>
              <div className={styles.infos}>
                <h3>Informe seus dados para orçamento</h3>
                <div>
                  <label htmlFor="name">Nome completo:</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Insira seu nome"
                    value={userData.name}
                    onChange={handleInputChange}
                  />
                  {errors.name && <p className={styles.error}>{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email">E-mail:</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Insira seu e-mail"
                    value={userData.email}
                    onChange={handleInputChange}
                  />
                  {errors.email && (
                    <p className={styles.error}>{errors.email}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="document">CPF ou CNPJ:</label>
                  <input
                    type="text"
                    name="document"
                    placeholder="Insira seu CPF ou CNPJ sem pontos ou traços. Ex.: 12345678901"
                    value={userData.document}
                    onChange={handleInputChange}
                  />
                  {errors.document && (
                    <p className={styles.error}>{errors.document}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="cep">CEP:</label>
                  <input
                    type="text"
                    name="cep"
                    placeholder="Insira seu CEP"
                    value={userData.cep}
                    onChange={handleCepChange}
                  />
                  {errors.cep && <p className={styles.error}>{errors.cep}</p>}
                </div>
                <div>
                  <label htmlFor="houseNumber">Número:</label>
                  <input
                    type="text"
                    name="houseNumber"
                    placeholder="Número da casa"
                    value={userData.houseNumber}
                    onChange={handleInputChange}
                  />
                  {errors.houseNumber && (
                    <p className={styles.error}>{errors.houseNumber}</p>
                  )}
                </div>
              </div>
              <button onClick={handleSendToWhatsApp}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path
                    fill="#ffffff"
                    d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
                  />
                </svg>
                ENVIAR
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Carrinho;
