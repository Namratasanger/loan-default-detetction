import React from "react";
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
          <div>Home</div>
          <div>Github</div>
          <div>Contact</div>
        </NavigationBar>

        <Content className="home-page-content">
          <div className="project-title">
            Loan Default <span>Detection</span>
          </div>
          <Button className="button-predict">Predict</Button>
        </Content>
      </div>
    </Container>
  );
}
