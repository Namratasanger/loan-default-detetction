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
  max-height: 744px;
  height: 572px;
  margin: 24px auto 24px 24px;
  width: calc(100% - 24px);
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
  overflow: hidden;
  .containers {
    height: calc(100% - 32px);
    overflow: scroll;
  }
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
  &,
  &:focus {
    width: 100%;
    border-radius: 5px;
    border: 1px solid #7267e9;
    background-color: #7267e9;
    cursor: pointer;
    color: #ffffff;
    margin-top: 8px;
    margin-bottom: 8px;
  }
  &:hover {
    border: 1px solid #6157c9;
    background-color: #6157c9;
    color: #ffffff;
  }
`;
