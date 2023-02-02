import styled from "styled-components";

export const Checkbox = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

export const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--gray-400);
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 12px;

  :before {
    position: absolute;
    content: "";
    height: 12px;
    width: 12px;
    border-radius: 50%;
    background-color: var(--gray-100);
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }
`;

export const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 24px;
  height: 12px;

  ${Checkbox}:checked + ${Slider} {
    background-color: var(--orange-600);
  }

  ${Checkbox}:focus + ${Slider} {
    box-shadow: 0 0 1px var(--orange-600);
  }

  ${Checkbox}:checked + ${Slider}:before {
    -webkit-transform: translateX(12px);
    -ms-transform: translateX(12px);
    transform: translateX(12px);
  }
`;
