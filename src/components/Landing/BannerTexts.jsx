import Styled from "styled-components";

const StyledBannerTexts = Styled.div`
    max-width: 611px;
    padding-top: 73px;

    & > h4 {
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 140%;
        color: #000000;
    }

    & > h2 {
        font-style: normal;
        font-weight: 700;
        font-size: 60px;
        line-height: 140%;
        color: #242A2E;
        padding-top: 17px;
    }

    & > p {
        font-style: normal;
        font-weight: 400;
        font-size: 19.1946px;
        line-height: 175%;
        letter-spacing: -0.01em;
        color: #3D3D3D;
        margin-top: 32px;
    }
`;

const BannerTexts = () => {
  return (
    <StyledBannerTexts>
      <h4>Sanando Corazones, Transformando Vidas</h4>
      <h2>Ser Parte de Cuidad es Vivi Es Compartir Esperanza</h2>
      <p>
        Nuestra misión une personas solidarias. Ayudamos a quienes más lo
        necesitan con donaciones y eventos benéficos. Comparte tu apoyo y sé
        parte del cambio real en la comunidad.
      </p>
    </StyledBannerTexts>
  );
};

export default BannerTexts;
