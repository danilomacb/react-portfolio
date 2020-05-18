import React from "react";
import { Container, Image } from "react-bootstrap";

import Navigation from "./Navigation";

function Home() {
  return (
    <>
      <Navigation />
      <Container className="my-5">
        <div className="text-center">
          <Image src={process.env.PUBLIC_URL + "/images/perfil.png"} roundedCircle id="my-image" />
          <h1 className="d-inline-block mx-5">Danilo Macedo Bakun</h1>
        </div>
        <div id="my-presentation" className="my-5">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec nisl quis augue
            rhoncus tempor in quis ipsum. Vivamus placerat efficitur tincidunt. Orci varius natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris non erat ut
            magna vulputate maximus nec id odio. Suspendisse imperdiet lectus ullamcorper, bibendum
            nisl ut, efficitur ligula. Nam tristique elementum augue eget porttitor. Quisque nec
            odio tempus, euismod augue vitae, venenatis est. Curabitur malesuada eget ex id
            tincidunt. Nulla pellentesque nunc at ipsum ultricies interdum. Sed feugiat pellentesque
            risus, id rhoncus est egestas vel.
          </p>
        </div>
      </Container>
    </>
  );
}

export default Home;
