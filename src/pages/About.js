import React from "react";
import styled from "styled-components";
import profilePic from "../assets/profile.jpg";

const AboutContainer = styled.section`
  display: flex;
  justify-content: center;
  padding: 5rem 2rem;
  background-color: #fff;
  text-align: center;
`;

const ProfileContainer = styled.div`
  max-width: 80rem;
  display: flex;
  align-items: center;
  gap: 3rem;
  @media (max-width: 768px) {
  flex-direction: column;
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  height: 25rem;
  width: 25rem;
  object-fit: cover;
  @media (max-width: 768px) {
    height: 150px;
    width: 150px;
  }
`;

const AboutText = styled.div`
  max-width: 60rem;
  h1 {
    font-size: 4rem;
    margin-bottom: 2rem;
    color: #8000ff;
  }
  p {
    font-size: 2rem;
    color: black;
    line-height: 2;
    text-align: justify;
  }
    @media (max-width: 768px) {
    h1{
    font-size: 3rem;
    }
    p{
      font-size: 2rem;
      
    }
`;

const About = () => {
  return (
    <AboutContainer>
      <ProfileContainer>
        <ProfileImage src={profilePic} alt="Foto de perfil" />
        <AboutText>
          <h1>Sobre mí</h1>
          <p>
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            malesuada, nunc non efficitur facilisis, odio elit fermentum nunc, a
            volutpat metus nisl ac eros. Sed nec lacus nec justo vestibulum
          </p>
          <p>
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            malesuada, nunc non efficitur facilisis, odio elit fermentum nunc, a
            volutpat metus nisl ac eros. Sed nec lacus nec justo vestibulum
          </p>
        </AboutText>
      </ProfileContainer>
    </AboutContainer>
  );
};

export default About;
