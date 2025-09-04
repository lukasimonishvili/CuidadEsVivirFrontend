import Styled from "styled-components";

const StyledNav = Styled.nav`
    display: flex;
    align-items: center;

    & > a {
        font-style: normal;
        font-weight: 400;
        font-size: 17px;
        line-height: 25px;
        color: #000000;
        margin-left: 49px;
        position: relative;
        z-index: 5;

        &:hover{
            &::after {
                width: 100%;
            }
        }

        &::after {
            content: "";
            position: absolute;
            width: 0%;
            height: 1px;
            background-color: #000000;
            bottom: 4px;
            right: 0;
            transition: 0.3s;
            z-index: 2;
        }

        &:first-child {
            margin-left: 0;
        }

        @media screen and (max-width: 1180px) {
            margin-left: 20px;
        }

        @media screen and (max-width: 980px) {
            margin-left: 0;
            margin-bottom: 30px;
        }
    }

    @media screen and (max-width: 980px) {
        position: absolute;
        transition: 0.3s;
        top: ${(props) => (props.open ? "0" : "-100%")};
        width: 100vw;
        height: 100vh;
        right: 0;
        background: #F9F5E8;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        z-index: 4;
    }
`;

const Navigation = ({ open, setOpen }) => {
  return (
    <StyledNav open={open} onClick={() => setOpen(false)}>
      <a href="#">Inicio</a>
      <a href="#">Sobre nosotros</a>
      <a href="#">Donar</a>
      <a href="#">Eventos</a>
      <a href="#">Contáctanos</a>
    </StyledNav>
  );
};

export default Navigation;
