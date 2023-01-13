import React, { FunctionComponent } from "react";
import Card from "./card";

const Projects: FunctionComponent = () => {
  return (
    <div className="">
      <div className="pt-10 -mb-20 flex justify-evenly flex-wrap">
        <Card
          name="Recruitments Portal - Alexa Developers SRM"
          stack="Next JS, TypeScript, Tailwind CSS"
          image="/recruitments.png"
          link="https://github.com/AlexaSRM/Recruitment-Portal"
        />
        <Card
          name="Events Portal - Alexa Developers SRM"
          stack="Next JS, TypeScript, Tailwind CSS"
          image="/events.png"
          link="https://github.com/AlexaSRM/events-portal"
        />
      </div>
    </div>
  );
};

export default Projects;
