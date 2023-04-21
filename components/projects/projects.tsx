import React, { FunctionComponent } from "react";
import Card from "./card";

const Projects: FunctionComponent = () => {
  return (
    <div className="">
      <div className="pt-10 -mb-20 flex justify-evenly flex-wrap">
        <Card
          name="3D T-shirt Store"
          stack="React JS, Three JS, Openai, Express, Node JS, Framer Motion"
          image="/tshirt.png"
          link="https://github.com/divyanshu1810/T-Shirt-Store"
        />
        <Card
          name="Utter - Twitter Clone"
          stack="Next JS, TypeScript, Tailwind CSS, Next-Auth, Firebase, Context"
          image="/utter.png"
          link="https://github.com/divyanshu1810/utter"
        />
        <Card
          name="Pictorgram - Your Picture Gallery"
          stack="Next JS, Tailwind CSS, SanityIO and Groq"
          image="/pictogram.png"
          link="https://github.com/divyanshu1810/Pictogram"
        />
        <Card
          name="Intern-Pedia"
          stack="React Native and Expo"
          image="/react-native.png"
          link="https://github.com/divyanshu1810/Intern-Pedia"
        />
        <Card
          name="Recruitments Portal - Alexa Developers SRM"
          stack="Next JS, TypeScript, Tailwind CSS"
          image="/recruitments.png"
          link="https://github.com/AlexaSRM/Recruitment-Portal"
        />
        <Card
          name="SwenPaper - Your in Hand NewsPaper"
          stack="Next JS, TypeScript, NewsApi and Tailwind CSS"
          image="/swenpaper.png"
          link="https://github.com/divyanshu1810/newspaper"
        />
        <Card
          name="FluffyPaws - You All in one Petcare Shop"
          stack="React JS, Redux, TypeScript, Tailwind CSS and Crisp Chats"
          image="/fluffypaws.png"
          link="https://github.com/divyanshu1810/fluffy-paws"
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
