import React from "react";
import { ContainerDiv, Container3, ContainerRow, Container } from "../styles";
import { LogoAnimate } from "../styles";
import Logo from "../media/images/logo.png";
import PlayNet from "../components/play-planet"
import Nanobots from "../media/images/place_nanobots.png"
import Carbon from "../media/images/place_carbons.png";
import Start from "../media/images/press_start.png"
import Stop from "../media/images/press_stop.png"



const PPConsole = () => {

  return (
    <ContainerDiv>
      <LogoAnimate>
        <img src={Logo} alt="logo" style={{ width: "80%" }} />
      </LogoAnimate>
      <Container3>
        <ContainerRow>
          <div style={{ marginBottom: "3%" }}>
            <img src={Nanobots} alt="Nanobots" style={{ width: "100%" }} />
          </div>
          <div style={{ marginBottom: "3%" }}>
            <img src={Carbon} alt="Carbon" style={{ width: "100%" }} />
          </div>
        </ContainerRow>
        <Container>
          <div style={{ marginBottom: "3%" }}>
            <img src={Start} alt="Start" style={{ width: "100%" }} />
          </div>
          <div style={{ marginBottom: "3%" }}>
            <img src={Stop} alt="Stop" style={{ width: "100%" }} />
          </div>
        </Container>
      </Container3>

      <PlayNet />
    </ContainerDiv>
  );
};

export default PPConsole;


