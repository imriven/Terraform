import React from "react";
import { useHistory } from "react-router-dom";
import {
    ContainerDiv,
    AwesomeButton,
    Container,
    Para
} from "../styles";
import { LogoAnimate } from "../styles";
import Logo from "../media/images/logo.png";

const Intro = () => {
      const history = useHistory();

        const routeChange = () => {
        history.push("/terraform-menu");
  }
    
  return (
    <ContainerDiv>
      <LogoAnimate>
        <img src={Logo} alt="logo" style={{ width: "80%" }} />
      </LogoAnimate>
      <Para>
        This is John Conway's "Game Of Life" Re-imagined! The game is played on
        a grid of squares called cells, each cell is black (alive) or white
        (dead). When people are playing the game, they start by making some dead
        cells alive. Then the alive cells can make other cells alive or dead
        because of the rules of the game. The rules are:
      </Para>
      <br />
      <Para>
        &bull; Any alive cell that is touching less than two alive neighbors
        dies.
        <br />
        &bull; Any alive cell touching four or more alive neighbors dies.
        <br />
        &bull;Any alive cell touching two or three alive neighbors does nothing.
        <br />
        &bull;Any dead cell touching exactly three alive neighbors becomes
        alive.{" "}
      </Para>
      <Para>
        The way a player sets up the first alive cells starts the game. The
        first level (generation) is made by using the 4 rules. After the player
        is done changing the cells, they do the same thing all over again to
        make the next level. The game is over when all the cells are dead or all
        the cells are alive or the game is doing the same thing over and over.
        Terraform brings a new twist to the Game of Life. Your task is to
        terraform a planet with nanobots. You will be in charge of bot
        placement. But that's not all. Your task is to terraform a planet by
        placing nanobots to transform carbons to water.{" "}
      </Para>
      <Container>
        <AwesomeButton onClick={routeChange}>Proceed</AwesomeButton>
      </Container>
    </ContainerDiv>
  );
};

export default Intro;

