import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.button`
  background-color: transparent;
  border: 1px solid var(--gray-600);
  border-radius: 6px;
  padding: 1rem 0.75rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  transition: all 0.2s;

  :hover {
    border: 1px solid var(--orange-600);
  }
`;

export const Title = styled.p`
  font-weight: 600;
  color: var(--orange-600);
  font-size: 1rem;
  text-align: left;
`;

export const Description = styled.p`
  color: var(--gray-300);
  font-size: 0.9rem;
  text-align: left;
`;

export const Info = styled.p`
  color: var(--gray-300);
  font-size: 0.75rem;
`;

export const RowContent = styled.div`
  display: flex;
  gap: 1rem;

  align-items: center;
`;

export const StarContent = styled.div`
  display: flex;
  gap: 0.3rem;
  color: var(--gray-400);
  align-items: center;
`;
