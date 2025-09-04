import Styled from "styled-components";

const StyledBurger = Styled.div`
  width: 20px;
  height: 20px;
  position: relative;
  display: none;

  & > div {
    width: 100%;
    height: 2px;
    background-color: #000000;
    border-radius: 10px;
    position: absolute;
    left: 0;
    cursor: pointer;
    transition: 0.3s;

    &:first-child {
        top: ${(props) => (props.open ? "50%" : "0")};
        transform: ${(props) =>
          props.open ? "rotate(45deg) translateY(-50%)" : "rotate(0)"};
    }

    &:nth-child(2) {
        top: 50%;
        transform: ;
        transform: ${(props) =>
          props.open
            ? "translateY(-50%) rotate(45deg)"
            : "translateY(-50%) rotate(0deg)"};
    }

    &:last-child {
        bottom: ${(props) => (props.open ? "50%" : "0")};
        transform: ${(props) =>
          props.open ? "rotate(-45deg) translateY(50%)" : "rotate(0)"};

    }
  }

  @media screen and (max-width: 980px) {
    display: block;
  }
`;

const Burger = ({ open, setOpen }) => {
  const toggleMenu = () => {
    setOpen(!open);
  };
  return (
    <StyledBurger onClick={toggleMenu} open={open}>
      <div></div>
      <div></div>
      <div></div>
    </StyledBurger>
  );
};

export default Burger;
