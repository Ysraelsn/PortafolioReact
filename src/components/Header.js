import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import styled from "styled-components";
import logo from "../assets/logo.png";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 4rem;
  background-color: #e1e1e1;
  color: #fff;
  position: sticky;
  z-index: 1000;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2.2rem;
    padding: 1rem 2rem;
  }
`;

const Logo = styled.img`
  height: 5rem;
  width: auto;

  @media (min-width: 768px) {
    height: 3.5rem;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 2rem;
  a {
    color: #000;
    text-decoration: none;
    font-size: 1.7rem;
    &:hover {
      color: #8000ff;
    }
  }
    @media (max-width: 768px) {
    flex-direction: column;
    a{
      font-size: 2.8rem;
    }
   

`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.2rem;
  a {
    color: #000;
    font-size: 2rem;
    &:hover {
      color: #8000ff;
    }
  }
    @media (max-width: 768px) {
    a{
      font-size: 2.3rem;
    }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo src={logo} alt="Logo" />
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/about">Sobre mí</Link>
        <Link to="/projects">Proyectos</Link>
        <Link to="/experience">Experiencia</Link>
        <Link to="/contact">Contacto</Link>
      </Nav>
      <SocialLinks>
        <a
          href="https://github.com/Ysraelsn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/israelsanchezn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
      </SocialLinks>
    </HeaderContainer>
  );
};

export default Header;
