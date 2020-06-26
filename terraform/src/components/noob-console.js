import React from "react";
import { ContainerDiv, Container3, ContainerRow} from "../styles";
import { LogoAnimate } from "../styles";
import Logo from "../media/images/logo.png";
import Noob from "../components/noobnoob"
import Nanobots from "../media/images/place_nanobots.png";
import Carbon from "../media/images/place_carbons.png";
import Start from "../media/images/press_start.png";
import Convert from "../media/images/convert_txt.png";
import Habitable from "../media/images/willbecomehabit_txt.png"


const NoobConsole = () => {

  return (
    <ContainerDiv>
      <LogoAnimate>
        <img src={Logo} alt="logo" style={{ width: "80%" }} />
      </LogoAnimate>
      <Container3>
        <ContainerRow>
          <div>
            <img src={Nanobots} alt="Nanobots" style={{ width: "100%" }} />
          </div>
          <div>
            <img src={Carbon} alt="Carbon" style={{ width: "100%" }} />
          </div>
        </ContainerRow>
        <ContainerRow>
          <div>
            <img src={Convert} alt="Stop" style={{ width: "100%" }} />
          </div>
          <div style={{ margins: "25%" }}>
            <img src={Habitable} alt="Stop" style={{ width: "100%" }} />
          </div>
        </ContainerRow>
        <div style={{ margins: "25%" }}>
            <img src={Start} alt="Start" style={{ width: "100%" }} />
          </div>
      </Container3>

      <Noob />
    </ContainerDiv>
  );
};

export default NoobConsole;


