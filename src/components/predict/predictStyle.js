import styled from "styled-components";
import { Link } from "react-router-dom";

export const Content = styled.div`
  text-align: center;
  height: calc(100% - 32px);
  .vector {
    display: none;
    mix-blend-mode: multiply;
    float: left;
    bottom: 4%;
    left: 0;
    width: 70%;
    position: fixed;
    height: auto;
    z-index: 10;
  }
  .upload-icon {
    margin-top: 8%;
  }
`;

export const DragDrop = styled.div`
  height: 40%;
  margin-top: 24px;
  box-shadow: rgb(100 100 111 / 20%) 0px 3px 8px 0px;
  border-radius: 5px;
  border: 1px dashed #7267e9;
  background: #ffffff;
  input {
    opacity: 1;
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
  }
`;
