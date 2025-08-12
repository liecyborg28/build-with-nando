import { Carousel } from "@mantine/carousel";
import { Button, Card, Group, Image, Text } from "@mantine/core";
import classes from "./Projects.module.css";
import { motion } from "framer-motion";

const projects = [
  {
    name: "General POS",
    desc: "General POS is a scalable Point of Sale system built with the MEAN Stack, designed to support modern business operations. It includes real-time analytics, multi-business and warehouse management, product variation handling, and secure transactions.",
    images: [
      "/projects/1/1.png",
      "/projects/1/2.png",
      "/projects/1/3.png",
      "/projects/1/4.png",
      "/projects/1/5.png",
    ],
    link: "https://general-pos-fe.vercel.app",
    techs: ["MongoDB", "Express", "Angular", "NodeJS", "Bootstrap", "Primeng"],
  },
];

function CarouselCard({ name, desc, images, link }) {
  function handleClick() {
    window.open(link, "_blank", "noopener,noreferrer");
  }

  const slides = images.map((image) => (
    <Carousel.Slide key={image}>
      <Image src={image} height={220} />
    </Carousel.Slide>
  ));

  return (
    <Card radius="md" withBorder padding="xl" className={classes.carouselCard}>
      <Card.Section>
        <Carousel
          withIndicators
          emblaOptions={{ loop: true }}
          classNames={{
            root: classes.carousel,
            controls: classes.carouselControls,
            indicator: classes.carouselIndicator,
          }}>
          {slides}
        </Carousel>
      </Card.Section>

      <Group justify="space-between" mt="lg">
        <Text fw={500} fz="lg">
          {name}
        </Text>
      </Group>

      <Text fz="sm" c="dimmed" mt="sm">
        {desc}
      </Text>

      <Group justify="space-between" mt="md">
        {link ? (
          <Button onClick={handleClick} radius="md">
            Visit Demo
          </Button>
        ) : (
          ""
        )}
      </Group>
    </Card>
  );
}

export function Projects() {
  return (
    <div id="projects" className={classes.projects}>
      <h1 className={classes.projectsTitle}>My Projects</h1>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }} // animasi sekali saja saat 20% elemen terlihat
        className="p-4 bg-white shadow-lg rounded-lg">
        <div className={classes.projectsContainer}>
          {projects.map((e, i) => (
            <CarouselCard
              key={i}
              name={e.name}
              desc={e.desc}
              images={e.images}
              link={e.link}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
