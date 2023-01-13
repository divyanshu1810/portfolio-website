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
        <Card
          name="Windbnb - UI Clone of Airbnb"
          stack="Next JS, TypeScript, Tailwind CSS"
          image="/windbnb.png"
          link="https://github.com/divyanshu1810/Windbnb"
        />
        <Card
          name="KzForms - A form that accepts User Details and logs the data"
          stack="Next JS, TypeScript, Tailwind CSS"
          image="/kzforms.png"
          link="https://github.com/divyanshu1810/kzforms"
        />
        <Card
          name="Random-Text-Generator - Generate Random texts using an API"
          stack="Next JS, TypeScript, Tailwind CSS"
          image="/rtg.png"
          link="https://github.com/divyanshu1810/Random-Text-Generator"
        />
        <Card
          name="The Next Tech Lab - Official Website of SRM Next Tech Lab"
          stack="Next JS, TypeScript, Tailwind CSS"
          image="/ntl.png"
          link="https://github.com/NextTechLab/ntl-frontend"
        />
        <Card
          name="Netflix - UI Clone of Netflix that fetches data from an API"
          stack="React JS, Axios and JavaScript"
          image="/netflix.png"
          link="https://github.com/divyanshu1810/Netflix-Clone"
        />
      </div>
    </div>
  );
};

export default Projects;
