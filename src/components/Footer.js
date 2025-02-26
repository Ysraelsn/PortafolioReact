/*import { Link } from "react-router-dom";*/
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #e1e1e1;
  color: #8000ff;
  padding: 1.5rem;
  text-align: center;
  font-size: 1.5rem;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const FooterNav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 1rem;
  a {
    color: black;
    text-decoration: none;
    &:hover {
      color: #8000ff;
    }
  }
    @media (max-width: 768px) {
    flex-direction: column;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterNav>
        {/* <Link to="/">Home</Link>
        <Link to="/about">Sobre mí</Link>
        <Link to="/projects">Proyectos</Link>
        <Link to="/contact">Contacto</Link> */}
      </FooterNav>
      <p>&copy; 2025 [Israel Sanchez]. Todos los derechos reservados.</p>
    </FooterContainer>
  );
};

export default Footer;
