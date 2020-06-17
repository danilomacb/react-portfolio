import React from "react";
import { Container, Image } from "react-bootstrap";

function Home() {
  return (
    <Container className="my-5">
      <div className="text-center">
        <Image src={process.env.PUBLIC_URL + "/images/perfil.png"} roundedCircle id="my-image" />
        <h1 className="d-inline-block mx-5">Danilo Macedo Bakun</h1>
      </div>
      <div id="my-presentation" className="my-5">
        <p>
          Olá, seja bem vindo ao meu site portfólio. Eu sou desenvolvedor web full-stack júnior, com
          foco em React no front-end e Node no back-end. Sou formado em Ciência da Computação e
          apaixonado por tecnologia, estou sempre aprendendo coisas novas para me atualizar e me
          aprimorar. Também tenho interesse em Linux, gosto de testar distros diferentes,
          principalmente as baseadas em Ubuntu.
        </p>
      </div>
    </Container>
  );
}

export default Home;
