import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const HeroSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #8000ff;
  color: black;
  text-align: center;
  padding: 2rem;
`;

const HeroContent = styled.div`
  max-width: 60rem;
  h1 {
    font-size: 5rem;
    margin-bottom: 2rem;
  }
  p {
    font-size: 2.5rem;
    margin-bottom: 2.5rem;
  }
  a {
    background-color: #e1e1e1;
    color: black;
    padding: 1rem 3rem;
    text-decoration: none;
    font-size: 2rem;
    border-radius: 0.5rem;
    &:hover {
      background-color: black;
      color: #e1e1e1;
    }
  }
`;

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <HeroSection>
        <HeroContent>
          <h1>¡Hola! Soy Israel Sánchez</h1>
          <p>No sé hacer nada pero me gusta el dinero</p>
          <a href="about">Conóceme más</a>
        </HeroContent>
      </HeroSection>
    </motion.div>
  );
};

export default Home;
