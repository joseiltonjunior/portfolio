import styled, { css } from "styled-components";

interface ContainerProps {
  typeButton: "primary" | "secondary";
}

export const Container = styled.button<ContainerProps>`
  background-color: transparent;
  border: 1px solid var(--orange-600);
  font-weight: 600;
  padding: 0.6rem;
  border-radius: 6px;
  color: var(--orange-600);
  width: 100%;
  cursor: pointer;
  transition: all 0.3s;

  :hover {
    color: var(--gray-100);
    background-color: var(--orange-600);
  }

  ${(props) =>
    props.typeButton === "secondary" &&
    css`
      border: 1px solid var(--gray-100);
      color: var(--gray-100);

      :focus {
        box-shadow: none;
      }

      :hover {
        color: var(--gray-600);
        background-color: var(--gray-100);
      }
    `}
`;
