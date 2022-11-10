import styled from "styled-components";

export const ToggleContainer = styled.label`
  
    .toggle-switch {
      position: absolute;
      display: inline-block;
      width: 50px;
      height: 25px;
      margin: 0 0.75rem;
      z-index: 2;
    }
    .toggle-switch input[type="checkbox"] {
      display: none;
    }
    .toggle-switch .switch {
      position: absolute;
      cursor: pointer;
      background-color: rgba(34, 95, 62, 1);
      border-radius: 25px;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      transition: background-color 0.2s ease;
    }
    .toggle-switch .switch::before {
      position: absolute;
      content: "";
      left: 2px;
      top: 2px;
      width: 21px;
      height: 21px;
      background-color: #1A2E1F;
      border-radius: 50%;
      transition: transform 0.3s ease;
    }
    .toggle-switch input[type="checkbox"]:checked + .switch::before {
      transform: translateX(25px);
      background-color: #1A2E1F;
    }
    .toggle-switch input[type="checkbox"]:checked + .switch {
      background-color: #5EFFA8;
    }
  
`;
