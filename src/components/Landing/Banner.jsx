import Styled from "styled-components";
import BannerTexts from "./BannerTexts";
import BannerCard from "./BannerCard";
import BannerDescription from "./BannerDescription";

const StyledBanner = Styled.div`
    width: 100%;
    position: relative;
    margin-top: 70px;
    z-index: 3;

    & > div.container {
        display: flex;
        width: 1340px;
        margin: 0 auto;
        align-items: flex-start;
        justify-content: space-between;

        @media screen and (max-width: 1400px) {
            width: 100%;
            padding: 0 30px;
        }
    }
`;

const Banner = () => {
  return (
    <StyledBanner>
      <div className="container">
        <BannerTexts />
        <BannerCard />
      </div>
      <BannerDescription />
    </StyledBanner>
  );
};

export default Banner;
