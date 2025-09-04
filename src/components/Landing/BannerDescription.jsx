import Styled from "styled-components";

const StyledBannerDescription = Styled.div`
    position: absolute;
    left: 0;
    bottom: -100px;
    width: 908px;
    height: 254px;
    background-color: #00715D;
    border-radius: 0 150px 0 0;
    display: flex;
    align-items: center;
    justify-content: center;

    & > div {
        padding-left: 60px;

        &:first-child {
            padding-left: 0;
        }

        & > span {
            color: #ffffff;
            display: block;

            &:first-child {
                font-style: normal;
                font-weight: 600;
                font-size: 40px;
                line-height: 47px;
                letter-spacing: -0.01em;
                padding-bottom: 18px;
            }

            &:last-child {
                font-style: normal;
                font-weight: 400;
                font-size: 19.1946px;
                line-height: 175%;
                letter-spacing: -0.01em;
            }
        }
    }
`;

const BannerDescription = () => {
  return (
    <StyledBannerDescription>
      <div>
        <span>145+</span>
        <span>Campañas archivadas</span>
      </div>
      <div>
        <span>1200+</span>
        <span>Donación recibida</span>
      </div>
      <div>
        <span>545+</span>
        <span>Claridad en el último año</span>
      </div>
    </StyledBannerDescription>
  );
};

export default BannerDescription;
