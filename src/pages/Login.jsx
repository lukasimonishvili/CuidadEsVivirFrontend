import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f9f5e8;
  font-family: "Poppins", sans-serif;
`;

const Card = styled.div`
  background: #fff;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  margin-bottom: 1rem;
  border: 1px solid #ddd;
  border-radius: 0.5rem;
  font-size: 1rem;
  outline: none;
  transition: border 0.3s;

  &:focus {
    border-color: #6c63ff;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 0.9rem;
  background: #6c63ff;
  color: white;
  font-size: 1rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #5848d6;
  }
`;

const FooterText = styled.p`
  margin-top: 1rem;
  font-size: 0.9rem;
  color: #555;
`;

export default function Login() {
  return (
    <Container>
      <Card>
        <Title>Iniciar Sesión</Title>
        <form>
          <Input type="email" placeholder="Correo electrónico" />
          <Input type="password" placeholder="Contraseña" />
          <Button type="submit">Acceder</Button>
        </form>
        <FooterText>
          ¿No tienes cuenta? <Link to="/register">Regístrate</Link>
        </FooterText>
      </Card>
    </Container>
  );
}





