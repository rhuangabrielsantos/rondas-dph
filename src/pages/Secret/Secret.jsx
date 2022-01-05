import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Container } from "../../components/Container";

import Button from "../../components/Button";
import Input from "../../components/Input";

import LogoImage from "../../assets/images/logo.png";
import DphImage from "../../assets/images/dph.png";

import { validatePassword } from "../../utils/secret";

import { Content, Header, Image, Title, Box } from "./SecretStyle";

export default function Secret() {
  const navigate = useNavigate();

  const [secret, setSecret] = useState("");

  function handleClick(event) {
    event.preventDefault();
    const passwordIsValid = validatePassword(secret);

    if (passwordIsValid) {
      localStorage.setItem("secret", secret);
      navigate("/");
    }

    toast.error("Senha inválida");
  }

  return (
    <Container>
      <Content>
        <Header>
          <Image src={LogoImage} />
          <Title>Rondas dph</Title>
          <Image src={DphImage} />
        </Header>

        <Box>
          <form>
            <Input
              type="password"
              placeholder="Senha de acesso"
              value={secret}
              onChange={event => setSecret(event.target.value)}
            />
            <Button
              type="submit"
              text="OK"
              enabled={secret.length > 0 ? true : false}
              onClick={handleClick}
            />
          </form>
        </Box>
      </Content>

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
    </Container>
  );
}
