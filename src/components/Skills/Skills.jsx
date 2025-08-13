import classes from "./Skills.module.css";
import { Tooltip } from "@mantine/core";

const basic = [
  {
    name: "HTML5",
    imageUrl: "/skills/HTML5.png",
  },
  {
    name: "CSS3",
    imageUrl: "/skills/CSS3.png",
  },
  {
    name: "JavaScript",
    imageUrl: "/skills/JavaScript.png",
  },
  {
    name: "TypeScript",
    imageUrl: "/skills/TypeScript.png",
  },
];

const frontend = [
  {
    name: "Angular",
    imageUrl: "/skills/Angular.png",
  },
  {
    name: "React",
    imageUrl: "/skills/React.png",
  },
  {
    name: "Tailwind CSS",
    imageUrl: "/skills/TailwindCSS.png",
  },
];

const backend = [
  {
    name: "Node.js",
    imageUrl: "/skills/Node.js.png",
  },
  {
    name: "Express",
    imageUrl: "/skills/Express.png",
  },
];

const database = [
  {
    name: "MongoDB",
    imageUrl: "/skills/MongoDB.png",
  },
  {
    name: "PostgresSQL",
    imageUrl: "/skills/PostgresSQL.png",
  },
];

function Skill({ name, imageUrl }) {
  return (
    <Tooltip label={name}>
      <div
        className={`${classes.skill} spin`}
        style={{ backgroundImage: `url(${imageUrl})` }}></div>
    </Tooltip>
  );
}

function Skills() {
  return (
    <div className={classes.skillsContainer} id="skills">
      <h2 className={classes.skillsTitle}>Basic</h2>
      <div className={classes.skillsCategory}>
        {basic.map((e, i) => (
          <Skill key={i} name={e.name} imageUrl={e.imageUrl} />
        ))}
      </div>
      <h2 className={classes.skillsTitle}>Frontend</h2>
      <div className={classes.skillsCategory}>
        {frontend.map((e, i) => (
          <Skill key={i} name={e.name} imageUrl={e.imageUrl} />
        ))}
      </div>
      <h2 className={classes.skillsTitle}>Backend</h2>
      <div className={classes.skillsCategory}>
        {backend.map((e, i) => (
          <Skill key={i} name={e.name} imageUrl={e.imageUrl} />
        ))}
      </div>
      <h2 className={classes.skillsTitle}>Database</h2>
      <div className={classes.skillsCategory}>
        {database.map((e, i) => (
          <Skill key={i} name={e.name} imageUrl={e.imageUrl} />
        ))}
      </div>
    </div>
  );
}

export default Skills;
