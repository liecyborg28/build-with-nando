import { Avatar, Card, Text } from "@mantine/core";
import classes from "./About.module.css";

function About() {
  return (
    <div className={classes.aboutContainer} id="about">
      <div className={classes.aboutCard}>
        <Avatar
          className={`${classes.aboutAvatar}`}
          variant="filled"
          color="yellow"
          size="xl"
          src="/about/avatar.jpg"
        />
        <h2 className={classes.aboutTitle}>
          Fernando Lie | Fullstack Developer
        </h2>
        <p className={classes.aboutDesc}>
          I am a passionate and results-oriented Fullstack Developer with two
          years of hands-on experience in building full-stack web applications
          using the MEAN and MERN stacks. With an academic background in
          Information Systems, I bring a strong understanding of both technology
          and business needs, enabling me to develop solutions that are not only
          technically robust but also strategically aligned with user and
          organizational goals.
        </p>
      </div>
    </div>
  );
}

export default About;
