import React from "react";
import { ContainerDiv} from "../styles";
import { LogoAnimate } from "../styles";
import Logo from "../media/images/logo.png";
import Play_net from "../components/play_planet"


const PPConsole = () => {

  return (
    <ContainerDiv>
      <LogoAnimate>
        <img src={Logo} alt="logo" style={{ width: "80%" }} />
      </LogoAnimate>
      <Play_net />
    </ContainerDiv>
  );
};

export default PPConsole;


