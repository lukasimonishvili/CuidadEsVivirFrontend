import Styled from "styled-components";

const StyledButton = Styled.button`
    display: flex;
    align-items: center;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 120%;
    letter-spacing: -0.03em;
    color: #FFFFFF;
    border-radius: 30px;
    background: #E17153;
    padding: 17px 50px;
    cursor: pointer;
    transition: 0.3s;
    margin-top: 10px;

    & > img {
        padding-left: 10px;
    }

    &:hover {
        background: rgba(225, 113, 83, 0.8);
    }
`;

const Button = ({ onClick, icon, text }) => {
  return (
    <StyledButton onClick={onClick}>
      {text} {icon && <img src={icon} alt=" " />}
    </StyledButton>
  );
};

export default Button;
