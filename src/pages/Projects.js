import React from "react";
import ProjectCard from "../components/ProjectCard";
import styled from "styled-components";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/t2.png";
import image3 from "../assets/t3.png";
import { FaCss3, FaHtml5, FaReact } from "react-icons/fa";

const ProjectsContainer = styled.section`
  padding: 50px 20px;
  background-color: #f9f9f9;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    justify-items: center;
    width: 100%;
  }
`;

const Projects = () => {
  const projects = [
    {
      title: "Proyecto 1",
      description: "Página Web de una Tienda de Muebles",
      link: "https://tiendamueblesbasica.netlify.app/",
      imgSrc: image1,
      techs: [
        <FaHtml5 color="#ff5733" size="2.5rem" />,
        <FaCss3 color="#2965f1" size="2.5rem" />,
      ],
      gitSrc: "https://github.com/Ysraelsn/EcommerceMuebleria",
    },
    {
      title: "Proyecto 2",
      description: "Landing Page para una Tienda de Audífonos",
      link: "https://headphoneslandingpractice.netlify.app/",
      techs: [
        <FaHtml5 color="#ff5733" size="2.5rem" />,
        <FaCss3 color="#2965f1" size="2.5rem" />,
      ],
      imgSrc: image2,
      gitSrc: "https://github.com/Ysraelsn/Headphones",
    },
    {
      title: "Proyecto 3",
      description: "Sitio Web de una Empresa de Arquitectura",
      link: "https://architecturelandingpractice.netlify.app/",
      techs: [
        <FaHtml5 color="#ff5733" size="2.5rem" />,
        <FaCss3 color="#2965f1" size="2.5rem" />,
        <FaReact color="#61dbfb" size="2.5rem" />,
      ],
      imgSrc: image3,
      gitSrc: "https://github.com/Ysraelsn/ArchitecturePage",
    },
  ];

  return (
    <ProjectsContainer>
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </ProjectsContainer>
  );
};

export default Projects;
