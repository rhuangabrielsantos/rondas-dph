import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { RiHomeLine } from "react-icons/ri";
import { CgFileDocument } from "react-icons/cg";
import { MdOutlineSpeakerNotes } from "react-icons/md";

import { Container, Icon, Item, Text } from "./HeaderStyle";

export default function Header() {
  const navigate = useNavigate();

  const [homeIsActive, setHomeIsActive] = useState(true);
  const [docmentsActive, setDocmentsActive] = useState(true);
  const [speakBalloonsActive, setSpeakBalloonsActive] = useState(true);

  const textMotion = {
    rest: {
      x: 0,
      color: "#BCC1C7",
      transition: {
        duration: 0.1,
        type: "tween",
        ease: "easeIn",
      },
    },
    hover: {
      x: 10,
      color: "#F6F1EB",
      transition: {
        duration: 0.4,
        type: "tween",
        ease: "easeOut",
      },
    },
    active: {
      x: 10,
      color: "#F6F1EB",
      transition: {
        duration: 0.4,
        type: "tween",
        ease: "easeOut",
      },
    },
  };

  const iconMotion = {
    rest: {
      x: 10,
      color: "#BCC1C7",
      opacity: 0,
      ease: "easeOut",
      duration: 0.2,
      type: "tween",
    },
    hover: {
      x: 5,
      color: "#F6F1EB",
      opacity: 1,
      transition: {
        duration: 0.4,
        type: "tween",
        ease: "easeIn",
      },
    },
    active: {
      x: 5,
      color: "#F6F1EB",
      opacity: 1,
      transition: {
        duration: 0.4,
        type: "tween",
        ease: "easeIn",
      },
    },
  };

  function handleRedirect(path: string) {
    navigate(path);
  }

  function handleActive(path: string) {
    if (path === "/") {
      setHomeIsActive(true);
      setSpeakBalloonsActive(false);
      setDocmentsActive(false);
    }

    if (path === "/documents") {
      setHomeIsActive(false);
      setDocmentsActive(true);
      setSpeakBalloonsActive(false);
    }

    if (path === "/speak-balloons") {
      setHomeIsActive(false);
      setDocmentsActive(false);
      setSpeakBalloonsActive(true);
    }
  }

  useEffect(() => {
    handleActive(window.location.pathname);
  });

  return (
    <Container>
      <Item
        initial="rest"
        whileHover="hover"
        animate={homeIsActive ? "active" : "rest"}
        onClick={() => handleRedirect("/")}
      >
        <Icon variants={iconMotion}>
          <RiHomeLine />
        </Icon>
        <Text variants={textMotion}>Início</Text>
      </Item>

      <Item
        initial="rest"
        whileHover="hover"
        animate={docmentsActive ? "active" : "rest"}
        onClick={() => handleRedirect("/documents")}
      >
        <Icon variants={iconMotion}>
          <CgFileDocument />
        </Icon>
        <Text variants={textMotion}>Documentos Oficiais</Text>
      </Item>

      <Item
        initial="rest"
        whileHover="hover"
        animate={speakBalloonsActive ? "active" : "rest"}
        onClick={() => handleRedirect("/speak-balloons")}
      >
        <Icon variants={iconMotion}>
          <MdOutlineSpeakerNotes />
        </Icon>
        <Text variants={textMotion}>Balões de Falas</Text>
      </Item>
    </Container>
  );
}
