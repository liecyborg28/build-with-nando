import {
  IconAt,
  IconPhoneCall,
  IconBrandInstagram,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import { Avatar, Group, Text } from "@mantine/core";
import classes from "./Contact.module.css";

function UserInfoIcons() {
  const contacts = [
    {
      view: "buildwithnando@gmail.com",
      link: "https://mail.google.com/mail/?view=cm&fs=1&to=buildwithnando@gmail.com&su=Business Inquiries&body=Hi,%2C%20I'm%20interested%20in%20your%20portofolio.",
    },
    {
      view: "+62 (852) 506 213 75",
      link: "https://wa.me/6285250621375",
    },
    {
      view: "lie_cyborg",
      link: "https://instagram.com/lie_cyborg",
    },
    {
      view: "Fernando Lie",
      link: "https://www.linkedin.com/in/fernando-lie-08936b234",
    },
  ];

  function handleClick(link) {
    window.open(link, "_blank", "noopener,noreferrer");
  }
  return (
    <div>
      <Group wrap="nowrap">
        <Avatar src="/about/avatar.jpg" size={94} radius="md" />
        <div>
          <Text fz="lg" fw={500} className={classes.name}>
            Let's build something together:
          </Text>

          <Group wrap="nowrap" gap={10} mt={3}>
            <IconAt stroke={1.5} size={16} className={classes.icon} />
            <Text
              className={classes.contact}
              onClick={() => handleClick(contacts[0].link)}
              fz="xs"
              c="dimmed">
              {contacts[0].view}
            </Text>
          </Group>

          <Group wrap="nowrap" gap={10} mt={5}>
            <IconPhoneCall stroke={1.5} size={16} className={classes.icon} />
            <Text
              className={classes.contact}
              onClick={() => handleClick(contacts[1].link)}
              fz="xs"
              c="dimmed">
              {contacts[1].view}
            </Text>
          </Group>

          <Group wrap="nowrap" gap={10} mt={5}>
            <IconBrandInstagram
              stroke={1.5}
              size={16}
              className={classes.icon}
            />
            <Text
              className={classes.contact}
              onClick={() => handleClick(contacts[2].link)}
              fz="xs"
              c="dimmed">
              {contacts[2].view}
            </Text>
          </Group>

          <Group wrap="nowrap" gap={10} mt={5}>
            <IconBrandLinkedin
              stroke={1.5}
              size={16}
              className={classes.icon}
            />
            <Text
              className={classes.contact}
              onClick={() => handleClick(contacts[3].link)}
              fz="xs"
              c="dimmed">
              {contacts[3].view}
            </Text>
          </Group>
        </div>
      </Group>
    </div>
  );
}

export function Contact() {
  return (
    <div className={classes.contacts} id="contact">
      <div className={classes.contactsContainer}>
        <UserInfoIcons />
      </div>
    </div>
  );
}
