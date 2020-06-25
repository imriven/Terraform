import React from "react";
import { ContainerDiv } from "../styles";
import { LogoAnimate } from "../styles";
import Logo from "../media/images/logo.png";
import { Route, Switch } from "react-router-dom";
import PlayPlanet from "../components/pp_console"
import NoobNoob from "../components/noob_console"

const Menu = () => {
  return (
    <ContainerDiv>
      <LogoAnimate>
        <img src={Logo} alt="logo" style={{ width: "80%" }} />
      </LogoAnimate>
      <Switch>
        <Route exact path="/terraform-play_planet" component={PlayPlanet} />
        <Route exact path="/terraform-play_planet" component={NoobNoob} />
      </Switch>
    </ContainerDiv>
  );
};

export default Menu;
