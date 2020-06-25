import React from "react";
import { ContainerDiv} from "../styles";
import { LogoAnimate } from "../styles";
import Logo from "../media/images/logo.png";
import Noob from "../components/noob_noob"


const Console = () => {

  return (
    <ContainerDiv>
      <LogoAnimate>
        <img src={Logo} alt="logo" style={{ width: "80%" }} />
      </LogoAnimate>
      <Noob />
    </ContainerDiv>
  );
};

export default Console;


