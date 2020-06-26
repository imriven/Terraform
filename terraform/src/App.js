import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Intro from "./components/intro";
import Menu from "./components/menu";
import Video from "./media/videos/space_sky.mp4";

import { VideoBackground, BackgroundContainer } from "./styles";

function App() {
  return (
    <>
      <VideoBackground>
        <video
          style={{
            zIndex: -1,
            objectFit: "cover",
            width: "100vw",
            height: "100vh",
            position: "fixed",
            top: 0,
            left: 0,
          }}
          autoPlay
          loop
          muted
        >
          <source src={Video} type="video/mp4" />
        </video>

        <BackgroundContainer>
          <Switch>
            <Route exact path="/" component={Intro} />
            <Route exact path="/terraform-menu" component={Menu} />
          </Switch>
        </BackgroundContainer>
        {/* <div
          style={{
            margin: "10px 0 0 10px",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        >
          <p>
            <audio
              src="./media/music/A Travelers Tale.mp3"
              autoplay="true"
              loop
              type="audio/mpeg"
            ></audio>
            <a href="https://soundcloud.com/musictenno/a-travelers-tale-1">
              Music: A Traveler's Tale by Tenno
            </a>
          </p>
        </div> */}
        <audio
          autoplay
          src="https://soundcloud.com/musictenno/a-travelers-tale-1"
          type="audio/mpeg"
        ></audio>
      </VideoBackground>
    </>
  );
}

export default App;
