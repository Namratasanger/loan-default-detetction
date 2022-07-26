import { Route, Routes, Link, useLocation } from "react-router-dom";
import Home from "components/home/home";
import Developers from "components/developers/developers";
import Predict from "components/predict/predict";
import { Container, NavigationBar } from "./appStyle.js";

function App() {
  let { pathname } = useLocation();
  // console.log(pathname);
  return (
    <div className="App">
      <Container className="home-main-page">
        <div
          className="wrapper"
          theme={{ isBackground: pathname === "/" || pathname === "/home" }}
        >
          <NavigationBar>
            <Link to="/home">Home</Link>
            <div
              onClick={() => {
                window.open(
                  "https://github.com/Namratasanger/loan-default-detetction",
                  "_blank",
                  "noopener,noreferrer"
                );
              }}
            >
              Github
            </div>
            <Link to="/developers">Developers</Link>
          </NavigationBar>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/developers" element={<Developers />}></Route>
            <Route path="/predict" element={<Predict />}></Route>
          </Routes>
        </div>
      </Container>
    </div>
  );
}

export default App;
