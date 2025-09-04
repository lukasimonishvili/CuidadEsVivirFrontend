import Styled from "styled-components";
import BgLogo from "../../assets/img/bg-logo.svg";

const StyledBackground = Styled.div`
    position: absolute;
    z-index: 1;
    top: 0;
    right: 0;
    width: 37.5%;
    height: 730px;
    background-color: #00715D;

    &::after {
        content: "";
        position: absolute;
        right: 0;
        top: 22px;
        background-image: url(${BgLogo});
        width: 444px;
        height: 454.27px;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    }
`;

const LandingHeaderBackground = () => {
  return <StyledBackground />;
};

export default LandingHeaderBackground;
