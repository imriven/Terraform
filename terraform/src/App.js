import React, {useState} from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Intro from "./components/intro";
import Menu from "./components/menu";
import Video from "./media/videos/space_sky.mp4";
import PPConsole from "./components/pp-console";
import NoobConsole from "./components/noob-console";
import { VideoBackground, BackgroundContainer } from "./styles";
import Music from "./media/music/TravelersTale.mp3"
import Sound from "react-sound";

function App() {

 const [music, setMusic] = useState(true)



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
            <Route exact path="/terraform-play_planet" component={PPConsole} />
            <Route
              exact
              path="/terraform-planet_noob_noob"
              component={NoobConsole}
            />
          </Switch>
        </BackgroundContainer>
        <div
          style={{
            margin: "10px 0 0 10px",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        >
          {music ? <Sound
            url={Music}
            playStatus={Sound.status.PLAYING}
            loop={true}
          /> : null}
          
          <a href="https://soundcloud.com/musictenno/a-travelers-tale-1">
            Music: A Traveler's Tale by Tenno
          </a>
        </div>
       
      </VideoBackground>
    </>
  );
}

export default App;
