import BannerPage from "../components/BannerPage/BannerPage.tsx";
import Contato from "../components/Contato/Contato.tsx";
import Maps from "../components/Maps/Maps.tsx";
import Copyright from "../components/Copyright/Copyright.tsx";
import Footer from "../components/Footer/Footer.tsx";
import Header from "../components/Header/Header.tsx";

export const Contact: React.FC = () => {
  return (
    <>
      <Header />
      <BannerPage titulo="Contato" />
      <Contato />
      <Maps />
      <Footer />
      <Copyright />
    </>
  );
};

export default Contact;
