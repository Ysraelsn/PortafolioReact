import React from "react";
import TimeLine from "../components/TimeLine";
import "../styles/Experience.css";
const Experience = () => {
  const experienceData = [
    {
      date: "Enero 2025 - Presente",
      title: "Desarrollador Web - Front End",
      company: "Wayak Tech",
      description:
        "Desarrollo de aplicaciones web utilizando React. Liderazgo de equipo y gestión de proyectos con metodologías ágiles.",
    },
    {
      date: "Mayo 2024 - Agosto 2024",
      title: "Prácticas Profesionales",
      company: "Android de México",
      description:
        "Creación de aplicación web y móvil para la gestión de inventarios. Desarrollo de la aplicación web utilizando Laravel y Bootstrap. Aplicación móvil con Flutter.",
    },
    {
      date: "Septiembre 2022 - Mayo 2024",
      title: "Estudiante de Desarrollo de Software",
      company: "Universidad Tecnológica de Hermosillo",
      description:
        "Estudiante de la carrera de Desarrollo de Software. Participación en proyectos de desarrollo de software, tanto en la universidad como de manera independiente.",
    },
  ];

  return (
    <div className="experience-container">
      <h1 className="page-title">Mi Experiencia Profesional</h1>
      <p className="page-subtitle">
        Un recorrido por mi trayectoria laboral en el mundo del desarrollo web
      </p>
      <TimeLine experiences={experienceData} />
    </div>
  );
};

export default Experience;
