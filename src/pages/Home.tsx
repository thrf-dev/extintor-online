import Banner from "../components/Banner/Banner.tsx";
import Copyright from "../components/Copyright/Copyright.tsx";
import Footer from "../components/Footer/Footer.tsx";
import Header from "../components/Header/Header.tsx";
import ProdCategories from "../components/ProdCategories/ProdCategories.tsx";

export const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Banner />
      <ProdCategories />
      <Footer />
      <Copyright />
    </>
  );
};

export default Home;
