import Header from "../Header/Header";
import MainSection from "../common/MainSection/MainSection";
import Footer from "../Footer/Footer";

import { SharedLayoutContainer } from "./SharedLayout.styled";

const SharedLayout = () => {
  return (
    <SharedLayoutContainer>
      <Header />
      <MainSection />
      <Footer />
    </SharedLayoutContainer>
  );
};

export default SharedLayout;
