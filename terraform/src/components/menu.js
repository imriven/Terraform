import React from "react";
import { ContainerDiv, AwesomeButton, ContainerRow, Para, Container2 } from "../styles";
import { LogoAnimate } from "../styles";
import Logo from "../media/images/logo.png";
import {useHistory } from "react-router-dom";
import Planet1 from "../media/images/noob_noob.png"
import Planet2 from "../media/images/play_net.png"
import PlanetText1 from "../media/images/noob_txt.png"
import PlanetText2 from "../media/images/play_net_txt.png";

const Menu = () => {

  const history = useHistory();
  const noobnoob = "/terraform-planet_noob_noob"
  const playplanet = "/terraform-play_planet"
  const route1 = () => {
    history.push(noobnoob);
  }
  const route2 = () => {
    history.push(playplanet);
  };

  return (
    <ContainerDiv>
      <LogoAnimate>
        <img src={Logo} alt="logo" style={{ width: "80%" }} />
      </LogoAnimate>
      <ContainerRow>
        <Container2>
          <img src={Planet1} alt="Planet Noob_Noob" style={{ width: "70%" }} />
          <img
            src={PlanetText1}
            alt="Planet Noob_Noob"
            style={{ width: "50%" }}
          />
          <Para>
            {" "}
            Welcome to Planet Noob Noob! Planet Noob Noob is located in the
            Dwarf Terrace System about 90 light years from Earth. Scientists
            have discovered it's potential to be terraformed so that Earthians
            can migrate to a new planet. Noob Noob is uninhabitable now. It is
            30% Carbon and has no water. Your team has created a nanobot that
            can consume carbons and excrete H2O.
            <br />
            <br /> Your job is nanobot placement but beware placing too many
            nanobots around each other causes overcrowding. If there's not
            enough Nanobots to support each other they will die. The goal is to
            reach a balance and consume enough carbon to make water.
          </Para>

          <AwesomeButton onClick={route1}>Terraform</AwesomeButton>
        </Container2>
        <Container2>
          <img src={Planet2} alt="Play Planet" style={{ width: "70%" }} />
          <img
            src={PlanetText2}
            alt="Planet Noob_Noob"
            style={{ width: "50%" }}
          />
          <Para>
            {" "}
            Play planet is a free for all! Consider it a training ground. You
            have a blank planet to place carbons and nanobots where ever you'd
            like and watch them go wild!. Nanobots convert carbons into water.{" "}
            <br />
            <br />
            There's also a randomizer. The randomizer will randomly place bots
            and carbons. You can randomize the planet and press start to see
            what happens. You can stop the simulation at any time and add more
            elements! Or you can clear the planet and start again.
            <br />
            <br />
            See what patterns you can create! Will the nanobots be able to
            sustain themselves or will they all die! Try different combinations?
            Can you create a Water World? There so many awesome possibilities to
            try!
          </Para>

          <AwesomeButton onClick={route2}>Play</AwesomeButton>
        </Container2>
      </ContainerRow>
    </ContainerDiv>
  );
};

export default Menu;
