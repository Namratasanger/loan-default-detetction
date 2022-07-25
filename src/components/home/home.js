import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Container,
  Content,
  NavigationBar,
} from "../home/homeStyle.js";

export default function Home() {
  return (
    <Container className="home-main-page">
      <div className="wrapper">
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

        <Content>
          <div className="project-title">
            Loan Default <span>Detection</span>
          </div>
          <Button to="/predict">
            <span>Predict</span>
          </Button>
        </Content>
      </div>
    </Container>
  );
}
