import Styled from "styled-components";
import Header from "../components/Landing/Header";
import LandingHeaderBackground from "../components/Landing/LandingHeaderBackground";
import Banner from "../components/Landing/Banner";

const StyledLanding = Styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #F9F5E8;
    position: relative;
`;

const Landing = () => {
  return (
    <StyledLanding>
      <Header />
      <LandingHeaderBackground />
      <Banner />
    </StyledLanding>
  );
};

export default Landing;
