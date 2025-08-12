import { Avatar, Card, Text } from "@mantine/core";
import classes from "./About.module.css";

function About() {
  return (
    <div className={classes.aboutContainer} id="about">
      <div className={classes.aboutCard}>
        <img
          className={`${classes.aboutAvatar}`}
          src="./about/avatar.jpg"
          alt="avatar"
        />
        <div className={classes.aboutTextContainer}>
          <h1 className={classes.aboutTitle}>
            Fernando Lie | Software Engineer
          </h1>
          <span className={classes.aboutDesc}>
            I am a passionate and results-oriented Software Engineer with two
            years of hands-on experience in building full-stack web applications
            using the MEAN and MERN stacks. With an academic background in
            Information Systems, I bring a strong understanding of both
            technology and business needs, enabling me to develop solutions that
            are not only technically robust but also strategically aligned with
            user and organizational goals.
          </span>
        </div>
      </div>
    </div>
  );
}

export default About;
