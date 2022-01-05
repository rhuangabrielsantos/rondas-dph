import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Balloon from "../../components/Balloon";

import {
  Farewell,
  FarewellExternal,
  FiscalLines,
  Fun,
  Informative,
  Invite,
  Welcome,
  WelcomeExternal,
} from "../../speaks";

import { validatePassword } from "../../utils/secret";

import { Container, Title, SubTitle } from "./SpeakBalloonsStyle";

export default function SpeakBalloons() {
  const navigate = useNavigate();

  function handleCopy(title: string) {
    navigator.clipboard.writeText(title);
    toast.success("Copiado!");
  }

  useEffect(() => {
    const secret = localStorage.getItem("secret") as string;
    if (!validatePassword(secret)) {
      navigate("/secret");
    }
  }, [navigate]);

  return (
    <Container>
      <Header />

      <Title>Falas Internas:</Title>
      <SubTitle>Boas-vindas:</SubTitle>
      {Welcome.map((item, index) => (
        <Balloon key={index} title={item} onClick={() => handleCopy(item)} />
      ))}
      <SubTitle style={{ marginTop: "1rem" }}>Despedidas:</SubTitle>
      {Farewell.map((item, index) => (
        <Balloon key={index} title={item} />
      ))}
      <SubTitle style={{ marginTop: "1rem" }}>Informativas:</SubTitle>
      {Informative.map((item, index) => (
        <Balloon key={index} title={item} />
      ))}
      <SubTitle style={{ marginTop: "1rem" }}>Divertidas:</SubTitle>
      {Fun.map((item, index) => (
        <Balloon key={index} title={item} />
      ))}

      <Title style={{ marginTop: "1.5rem" }}>Falas Externas:</Title>
      <SubTitle>Boas-vindas:</SubTitle>
      {WelcomeExternal.map((item, index) => (
        <Balloon key={index} title={item} />
      ))}
      <SubTitle style={{ marginTop: "1rem" }}>Convite e eventos:</SubTitle>
      {Invite.map((item, index) => (
        <Balloon key={index} title={item} />
      ))}
      <SubTitle style={{ marginTop: "1rem" }}>Despedida:</SubTitle>
      {FarewellExternal.map((item, index) => (
        <Balloon key={index} title={item} />
      ))}

      <Title style={{ marginTop: "1.5rem" }}>Falas para os Fiscais:</Title>
      {FiscalLines.map((item, index) => (
        <Balloon key={index} title={item} />
      ))}

      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <Footer />
    </Container>
  );
}
