import Styled from "styled-components";
import Header from "./components/Header";

const StyledMain = Styled.main`
  width: 100%;
  min-height: 100vh;
  background-color: #F9F5E8;
`;

function App() {
  return (
    <StyledMain>
      <Header />
    </StyledMain>
  );
}

export default App;
