import React from "react";

import { Container } from "../../components/Container";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import MaeBeterraba from "../../assets/images/MaeBeterraba.png";
import RgsImage from "../../assets/images/rgs2010.png";

import { Content, HabboImage, Title } from "./HomeStyle";

export default function Home() {
  return (
    <Container>
      <Header />
      <Content>
        <HabboImage src={RgsImage} alt="rgs2010" />
        <Title>Rondas dph</Title>
        <HabboImage src={MaeBeterraba} alt="MaeBeterraba" />
      </Content>
      <Footer />
    </Container>
  );
}
