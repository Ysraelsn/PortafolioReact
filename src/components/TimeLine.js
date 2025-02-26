import React from "react";
import "../styles/TimeLine.css";

const TimeLineItem = ({ date, title, company, description }) => {
  return (
    <div className="timeline-item">
      <div className="timeline-item-content">
        <span className="date">{date}</span>
        <h3 className="title">{title}</h3>
        <h4 className="company">{company}</h4>
        <p className="description">{description}</p>
        <span className="circle"></span>
      </div>
    </div>
  );
};

const TimeLine = ({ experiences }) => {
  return (
    <div className="timeline-container">
      {experiences.map((experience, index) => (
        <TimeLineItem
          key={index}
          date={experience.date}
          title={experience.title}
          company={experience.company}
          description={experience.description}
        />
      ))}
    </div>
  );
};

export default TimeLine;
