import styled from "styled-components";

interface ContainerProps {
  isVisible: boolean;
}

export const Container = styled.div<ContainerProps>`
  position: fixed;
  width: 100vw;
  height: 100vh;

  display: ${(props) => (props.isVisible ? "flex" : "none")};
  align-items: center;
  justify-content: center;
`;

export const Overlay = styled.div<ContainerProps>`
  background-color: rgba(0, 0, 0, 0.8);
  display: ${(props) => (props.isVisible ? "block" : "none")};
  width: 100%;
  height: 100%;
`;

export const BoxModal = styled.div`
  position: absolute;
  background-color: var(--gray-600);
  padding: 1rem;
  border-radius: 6px;

  max-width: 800px;
`;

export const Description = styled.div`
  padding: 1rem 0;
  margin-bottom: 1rem;
  text-align: left;
`;

export const ButtonClose = styled.button`
  background-color: transparent;
  border: 1px solid var(--gray-100);
  font-weight: 600;
  padding: 0.6rem;
  border-radius: 6px;
  color: var(--gray-100);
  width: 100%;
  cursor: pointer;
  transition: all 0.3s;

  :focus {
    box-shadow: none;
  }

  :hover {
    color: var(--gray-600);
    background-color: var(--gray-100);
  }
`;

export const ButtonConfirm = styled.button`
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
`;

export const RowContent = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 1fr;

  justify-content: center;
`;
