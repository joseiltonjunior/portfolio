import styled, { css } from "styled-components";

interface ContainerProps {
  variant: "primary" | "secondary";
}

export const Container = styled.button<ContainerProps>`
  background-color: transparent;
  border: 1px solid var(--orange-600);
  font-weight: 600;
  padding: 0.6rem;
  height: 40px;
  border-radius: 6px;
  color: var(--orange-600);
  width: 100%;
  cursor: pointer;
  transition: all 0.3s;

  :hover:not():disabled {
    color: var(--gray-100);
    background-color: var(--orange-600);
  }

  ${(props) =>
    props.variant === "secondary" &&
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

  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.5;
      cursor: not-allowed;
    `}
`;

export const Box = styled.div`
  max-width: 18.75rem;
`;

Container.displayName = "Button";
Box.displayName = "Box";
