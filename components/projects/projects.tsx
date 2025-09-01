import { FunctionComponent } from "react";
import Card from "./card";

const Projects: FunctionComponent = () => {
  return (
    <div className="">
      <div className="pt-10 -mb-20 flex justify-evenly flex-wrap">
        <Card
          name="BitBuddy | URL Shortener!"
          stack="React JS, TypeScript, Tailwind CSS, MongoDB, Express and Node JS"
          image="/bitbuddy.png"
          link="https://github.com/divyanshu1810/BitBuddy"
        />
      </div>
    </div>
  );
};

export default Projects;
