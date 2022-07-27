import styled from "styled-components";
import { Link } from "react-router-dom";
import { Form, Button } from "antd";

export const Content = styled.div`
  height: calc(100% - 32px);
  display: grid;
  grid-template-columns: 1fr 2fr;
  .vector {
    mix-blend-mode: multiply;
    max-width: 400px;
    margin: auto;
  }
`;

export const DragDrop = styled.div`
  margin: auto auto auto 4%;
  width: calc(100% - 4%);
  height: 90%;
  box-shadow: rgb(100 100 111 / 20%) 0px 3px 8px 0px;
  border-radius: 5px;
  background: #ffffff;
  box-shadow: rgb(114 103 233 / 20%) 0px 3px 8px 0px;
  input {
    opacity: 1;
  }
`;

export const StyledForm = styled(Form)`
  text-align: left;
  padding: 16px;
  height: 100%;
  overflow: auto;
  .title {
    font-size: 18px;
    font-weight: 600;
  }
  .horizontal-line {
    border-bottom: 2px solid #7267e9;
    border-radius: 100px;
  }
  .customer-details-fields,
  .employment-details-fields,
  .loan-details-fields {
    margin: 8px 0px;
    display: grid;
    gap: 16px;
    grid-template-columns: 1fr 1fr;
  }
  .grid-sub-col-2,
  .grid-sub-col-3 {
    display: grid;
    gap: 16px;
  }
  .grid-sub-col-2 {
    grid-template-columns: 1fr 1fr;
  }
  .grid-sub-col-3 {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const StyledButton = styled(Button)`
  width: 100%;
  border-radius: 5px;
  border: 1px solid #7267e9;
  background-color: #7267e9;
  cursor: pointer;
  color: #ffffff;
  &:hover {
    border: 1px solid #6157c9;
    background-color: #6157c9;
    color: #ffffff;
  }
`;
