import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Intro from "./components/intro";
import Console from "./components/console";
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
            <Route exact path="/terraform-console" component={Console} />
          </Switch>
        </BackgroundContainer>
      </VideoBackground>
    </>
  );
}

export default App;

// https://www.youtube.com/watch?v=DvVt11mPuM0




// const App = () => {
//   return (
//     <AllContainer>
//       <SuperNav>
//         <SuperHeader>Lambda Eats</SuperHeader>
//         <div>
//           <StyledLink to="/">Home</StyledLink>
//           <StyledLink to="/pizza">Order</StyledLink>
//         </div>
//       </SuperNav>
//       <SuperContainer>
//         {/* Routes / Paths */}
//         <Route exact path="/">
//           <Home />
//         </Route>
//         <Route path="/pizza">
//           <Pizza />
//         </Route>
//         <Route path="/success">
//           <Success />
//         </Route>
//       </SuperContainer>
//     </AllContainer>
//   );
// };