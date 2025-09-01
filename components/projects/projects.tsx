import { FunctionComponent } from "react";
import { PROJECTS } from "../../utils/constants";
import Card from "./card";

const Projects: FunctionComponent = () => {
  return (
    <div className="">
      <div className="pt-10 -mb-20 flex justify-evenly flex-wrap">
        {PROJECTS.map((project, index) => (
          <Card
            key={index}
            name={project.NAME}
            stack={project.STACK}
            image={project.IMAGE}
            link={project.LINK}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
