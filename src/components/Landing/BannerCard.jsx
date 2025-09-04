import Styled from "styled-components";
import ChildrenImage from "../../assets/img/children.jpg";
import Button from "../Button";
import { useNavigate } from "react-router-dom";

const StyledBannerCard = Styled.div`
    width: 537px;
    border-radius: 53px;
    border: 1px solid #000000;
    background: #ffffff;
    padding: 15px;
    padding-bottom: 40px;

    & > p {
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
        text-transform: capitalize;
        color: #383F42;
        margin-top: 42px;
    }

    & > h2 {
        font-style: normal;
        font-weight: 500;
        font-size: 38px;
        line-height: 110%;
        color: #262A2C;
        margin-top: 9px;
    }

    & > h3 {
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 180%;
        color: #3D3D3D;
        opacity: 0.6;
        margin-top: 18px;
        margin-bottom: 30px;
    }

    & > button {
        width: 100%;
        align-items: center;
        display: block;
    }
`;

const StyledImageWrapper = Styled.div`
    width: 100%;
    height: 430px;
    background-image: url(${(props) => props.image});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 53px;
`;

const BannerCard = () => {
  const navigate = useNavigate();

  const navigateToDonate = () => {
    navigate("/donate");
  };

  return (
    <StyledBannerCard>
      <StyledImageWrapper image={ChildrenImage} />
      <p>A pocos clics de dar felicidad</p>
      <h2>Ayuda a John Doe</h2>
      <h3>Una vida depende ahora de tu ayuda</h3>
      <Button text="Donar ahora" onClick={navigateToDonate} />
    </StyledBannerCard>
  );
};

export default BannerCard;
