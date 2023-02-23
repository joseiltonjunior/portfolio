import styled, { css } from "styled-components";

interface ContainerProps {
  variant: "primary" | "secondary";
}

export const Container = styled.button<ContainerProps>`
  background-color: transparent;
  border: 1px solid ${(props) => props.theme.colors.Orange};
  font-weight: 600;
  padding: 0.6rem;
  height: 40px;
  border-radius: 6px;
  color: ${(props) => props.theme.colors.Orange};
  width: 100%;
  cursor: pointer;
  transition: all 0.3s;

  ${(props) =>
    props.variant === "secondary" &&
    css`
      border: 1px solid ${(props) => props.theme.colors.Dark_100};
      color: ${(props) => props.theme.colors.Dark_100};

      :focus {
        box-shadow: none;
      }
    `}

  ${(props) =>
    props.disabled
      ? css`
          opacity: 0.5;
          cursor: not-allowed;
        `
      : css`
          :hover {
            color: ${(props) => props.theme.colors.Dark_100};
            background-color: ${(props) => props.theme.colors.Orange};
          }

          ${props.variant === "secondary" &&
          css`
            :hover {
              color: ${(props) => props.theme.colors.Dark_600};
              background-color: ${(props) => props.theme.colors.Dark_100};
            }
          `}
        `}
`;

export const Box = styled.div`
  max-width: 18.75rem;
`;

Container.displayName = "Button";
Box.displayName = "Box";
