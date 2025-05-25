import { useState } from "react";
import {
  Burger,
  Container,
  Group,
  Avatar,
  Drawer,
  Button,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./HeaderSimple.module.css";

const links = [
  { link: "#about", label: "About" },
  { link: "#skills", label: "Skills" },
  { link: "#projects", label: "Projects" },
  { link: "#contact", label: "Contact" },
];

function AvatarLogo() {
  return (
    <div className={classes.avatarContainer}>
      <Avatar variant="filled" color="yellow" src="favicon.ico" />
      <b>Build With Nando</b>
    </div>
  );
}

export function HeaderSimple() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  function handleBurgerClick() {
    toggle();
  }

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={(event) => {
        // event.preventDefault();
        setActive(link.link);
        if (opened) {
          toggle();
        }
      }}>
      {link.label}
    </a>
  ));

  return (
    <>
      <Drawer position="right" opened={opened} onClose={close}>
        {items}
      </Drawer>
      <header className={classes.header}>
        <Container size="md" className={classes.inner}>
          <AvatarLogo />
          <Group gap={5} visibleFrom="xs">
            {items}
          </Group>

          <Burger
            opened={opened}
            onClick={handleBurgerClick}
            hiddenFrom="xs"
            size="sm"
          />
        </Container>
      </header>
    </>
  );
}
