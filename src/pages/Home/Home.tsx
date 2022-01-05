import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Container } from "../../components/Container";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import MaeBeterraba from "../../assets/images/MaeBeterraba.png";
import RgsImage from "../../assets/images/rgs2010.png";

import { validatePassword } from "../../utils/secret";

import { Content, HabboImage, Title } from "./HomeStyle";

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const secret = localStorage.getItem("secret") as string;
    if (!validatePassword(secret)) {
      navigate("/secret");
    }
  }, [navigate]);

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
