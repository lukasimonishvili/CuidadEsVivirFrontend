import Styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LogoImage from "../assets/img/logo.svg";
import ArrowIcon from "../assets/img/arrow-right.svg";
import Navigation from "./Navigation";
import Button from "./Button";
import Burger from "./Burger";

const StyledHeader = Styled.header`
    width: 1540px;
    margin: 0 auto;
    padding-top: 28px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 1600px) {
        width: 100%;
        padding: 0 30px;
        padding-top: 28px;
    }
`;

const StyledLogo = Styled.a`
    cursor: pointer;
    height: 40px;
    display: flex;
    align-items: center;

    & > span {
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 125.5%;
        color: #3A3A3A;
        padding-left: 5px;
    }
`;

const StyledButtonWrapper = Styled.div`
    @media screen and (max-width: 980px) {
        transition: 0.3s;
        position: fixed;
        left: ${(props) => (props.open ? "50%" : "-100%")};
        transform: translateX(-50%);
        bottom: 50px;
    }
`;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };
  return (
    <StyledHeader>
      <StyledLogo href="#">
        <img src={LogoImage} alt=" " />
        <span>Cuidad es Vivir</span>
      </StyledLogo>
      <Navigation open={isMenuOpen} setOpen={setIsMenuOpen} />
      <StyledButtonWrapper open={isMenuOpen}>
        <Button
          text="Iniciar sesión"
          onClick={handleLoginClick}
          icon={ArrowIcon}
        />
      </StyledButtonWrapper>
      <Burger open={isMenuOpen} setOpen={setIsMenuOpen} />
    </StyledHeader>
  );
};

export default Header;
