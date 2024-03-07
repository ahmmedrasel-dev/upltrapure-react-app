import Feature from "./Feature/Feature";
import Slide from "./Slider/Slide";
import SupplyItems from "../../components/SupplyItems/SupplyItems";
import Footer from "../../components/Shared/Footer";
import GellaryPage from "../gellary/GellaryPage";
import SectionTitle from "../../components/Shared/SectionTitle";

const Home = () => {
  return (
    <>
      <Slide></Slide>
      <SectionTitle title="Our Supply Items" />
      <GellaryPage />
      <Feature></Feature>
      <SupplyItems></SupplyItems>
      <Footer />
    </>
  );
};

export default Home;
