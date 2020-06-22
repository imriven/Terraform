import React from "react";
import { ContainerDiv} from "../styles";
import { LogoAnimate } from "../styles";
import Logo from "../media/images/logo.png";
import Grid from "../components/grid"


const Console = () => {

  return (
    <ContainerDiv>
      <LogoAnimate>
        <img src={Logo} alt="logo" style={{ width: "80%" }} />
      </LogoAnimate>
      <Grid />
    </ContainerDiv>
  );
};

export default Console;


