import React from "react";
import { Link } from "react-router-dom";
import { Button, Content, NavigationBar } from "components/home/homeStyle.js";

export default function Home() {
  return (
    <Content>
      <div className="project-title">
        Loan Default <span>Detection</span>
      </div>
      <Button to="/predict">
        <span>Predict</span>
      </Button>
    </Content>
  );
}
