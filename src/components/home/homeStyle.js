import styled from "styled-components";
import backgroundImage from "../../images/money-plant.png";

export const Container = styled.div`
  margin: 0px;
  width: 100vw;
  height: 100vh;
  background: url(${backgroundImage});
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  .wrapper {
    padding: 16px;
  }
  .project-title {
    color: #ffffff;
    font-size: 40px;
    font-weight: 800;
    span {
      color: #7267e9;
    }
  }
`;

export const NavigationBar = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  background-color: #ffffff;
  border-radius: 5px;
  padding: 8px 16px;
  font-size: 20px;
  color: #7267e9;
  font-weight: 600;
`;

export const Content = styled.div`
  text-align: center;
  margin-top: 25%;
`;

export const Button = styled.div`
  width: 100px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #7267e9;
  margin: 16px auto auto;
  background-color: #7267e9;
  color: #ffffff;
  font-weight: 600;
`;
