import styled from "styled-components";

export const StyledInput = styled.div`
  position: relative;
  input {
    border-radius: 5px;
  }
  .label {
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 12px;
    top: 4px;
    transition: 0.2s ease all;
  }

  .as-placeholder {
    color: gray;
  }

  .as-label {
    top: -8px;
    font-size: 12px !important;
    background: white;
    padding: 0 4px;
    margin-left: -4px;
  }
`;
