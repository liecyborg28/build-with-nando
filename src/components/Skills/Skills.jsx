import classes from "./Skills.module.css";
import { Tooltip } from "@mantine/core";

const basic = [
  {
    name: "HTML5",
    imageUrl:
      "https://img.icons8.com/?size=100&id=owWiEaAJmGKK&format=png&color=000000",
  },
  {
    name: "CSS3",
    imageUrl:
      "https://img.icons8.com/?size=100&id=4d9YPiN04osD&format=png&color=000000",
  },
  {
    name: "JavaScript",
    imageUrl:
      "https://img.icons8.com/?size=100&id=YX2eDFImIaWh&format=png&color=000000",
  },
  {
    name: "TypeScript",
    imageUrl:
      "https://img.icons8.com/?size=100&id=Xf1sHBmY73hA&format=png&color=000000",
  },
];

const frontend = [
  {
    name: "Angular",
    imageUrl:
      "https://img.icons8.com/?size=100&id=6SWtW8hxZWSo&format=png&color=000000",
  },
  {
    name: "React",
    imageUrl:
      "https://img.icons8.com/?size=100&id=asWSSTBrDlTW&format=png&color=000000",
  },
  {
    name: "Tailwind CSS",
    imageUrl:
      "https://img.icons8.com/?size=100&id=x7XMNGh2vdqA&format=png&color=000000",
  },
];

const backend = [
  {
    name: "Node.js",
    imageUrl:
      "https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000",
  },
  {
    name: "Express",
    imageUrl:
      "https://img.icons8.com/?size=100&id=kg46nzoJrmTR&format=png&color=000000",
  },
];

const database = [
  {
    name: "MongoDB",
    imageUrl:
      "https://img.icons8.com/?size=100&id=8rKdRqZFLurS&format=png&color=000000",
  },
  {
    name: "PostgresSQL",
    imageUrl:
      "https://img.icons8.com/?size=100&id=JRnxU7ZWP4mi&format=png&color=000000",
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
