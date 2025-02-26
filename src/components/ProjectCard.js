import React from "react";
import styled from "styled-components";
import { FaGithub, FaReact, FaHtml5, FaCss3 } from "react-icons/fa";

const Card = styled.div`
  background: #fff;
  border-radius: 0.8rem;
  max-width: 50rem;
 
  box-shadow: 0 0.4rem 0.8rem rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
  img {
    width: 100%;
    height: 20rem;
    object-fit: cover;
  }
  .content {
    padding: 1.5rem;
  }
  h3 {
    margin: 0;
    color: #333;
    font-size: 2.5rem;
  }
  p {
    color: #555;
    font-size: 1.8rem;
  }
    .links{
    display: flex;
    justify-content: space-between;}
  a {
    display: inline-block;
    margin-top: 1rem;
    margin-right: 1rem;
    color: #8000ff;
    text-decoration: none;
    font-size: 1.8rem;
  }
    @media (max-width: 768px) {
    h3,a{
      font-size: 2rem;
    }
    p{
      font-size: 1.5rem;
    }
`;

const ProjectCard = ({ title, description, link, imgSrc, techs, gitSrc }) => {
  return (
    <Card>
      <img src={imgSrc} alt={title} />
      <div className="content">
        <h3>{title}</h3>
        <p>{description}</p>
        <p>Tecnologías usadas: {techs}</p>
        <div class="links">
          <a href={link} target="_blank" rel="noopener noreferrer">
            Ver proyecto
          </a>
          <a href={gitSrc} target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
