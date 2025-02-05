import AboutUs from "../components/AboutUs/AboutUs.tsx";
import Servicos from "../components/Servicos/Servicos.tsx";
import BannerPage from "../components/BannerPage/BannerPage.tsx";
import Copyright from "../components/Copyright/Copyright.tsx";
import Footer from "../components/Footer/Footer.tsx";
import Header from "../components/Header/Header.tsx";

import historia from "../assets/images/historia.svg";
import equipamentos from "../assets/images/equipamentos.svg";

export const About: React.FC = () => {
  return (
    <>
      <Header />
      <BannerPage titulo="Quem Somos" />
      <AboutUs
        aboutTitle="Nossa História"
        descricao="A Extintor Online atua há mais de 15 anos no segmento de prevenção e combate a incêndios. Oferecemos uma ampla gama de equipamentos e sistemas, todos em conformidade com o Decreto do Corpo de Bombeiros e os órgãos de regulamentação vigentes.
Nossos produtos possuem certificação de qualidade e garantia de origem, assegurada pelos fabricantes. Além disso, trabalhamos em parceria com os melhores fornecedores do mercado, garantindo aos nossos clientes qualidade, prazos confiáveis e preços competitivos, diretamente de fábrica.
Também desenvolvemos projetos personalizados e realizamos instalações, adaptando os materiais às necessidades específicas de cada cliente, sempre buscando o melhor custo-benefício.
Nosso principal objetivo é maximizar a prevenção e garantir a segurança de pessoas e patrimônios. Contamos com uma equipe de profissionais qualificados, preparados para executar cada etapa do processo até a obtenção do AVCB (Auto de Vistoria do Corpo de Bombeiros)."
        image={historia}
      />

      <Servicos />

      <AboutUs
        aboutTitle="Equipamentos Comercializados"
        descricao="- Extintores portáteis e sobre carrinho.
- Placas de sinalização fotoluminescentes.
- Alarmes de incêndio: convencional, endereçável e wireless (sem fio).
- Bombas padrão incêndio.
- Sistemas completos de hidrantes, incluindo tubos, conexões, mangueiras, esguichos, adaptadores, tampões, chaves Storz, registros globo, abrigos de mangueiras, portas corta-fogo e barras antipânico.
- Sistemas de iluminação de emergência.
- Tintas e vernizes anti-chama.
- Sprinklers.
- E muito mais."
        image={equipamentos}
      />
      <Footer />
      <Copyright />
    </>
  );
};

export default About;
