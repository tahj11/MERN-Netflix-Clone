import React from "react";
import styled from "styled-components";
import background from "../assets/login.jpg";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  img {
    height: 100vh;
    width: 200vw;
  }
`;

function BackgroundImage() {
  return (
    <Container>
      <img src={background} alt="background" />
    </Container>
  );
}

export default BackgroundImage;
