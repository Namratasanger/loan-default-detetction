import styled from "styled-components";
import { Link } from "react-router-dom";

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
  box-shadow: rgb(100 100 111 / 20%) 0px 3px 8px 0px;
  a {
    font-weight: 600;
    color: #7267e9;
    text-decoration: none;
  }
  div,
  a {
    &:hover {
      cursor: pointer;
      color: #6157c9;
    }
  }
`;

export const Content = styled.div`
  text-align: center;
  margin-top: 25%;
  .project-title {
    color: #ffffff;
    font-size: 40px;
    font-weight: 800;
    span {
      color: #7267e9;
    }
  }
`;

export const Button = styled(Link)`
  text-decoration: none;
  color: #ffffff;
  font-weight: 600;
  width: 100%;
  display: inline-block;
  width: 160px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #7267e9;
  margin: 16px auto auto;
  background-color: #7267e9;
  cursor: pointer;
  &:hover {
    border: 1px solid #6157c9;
    background-color: #6157c9;
    color: #ffffff;
  }
`;
