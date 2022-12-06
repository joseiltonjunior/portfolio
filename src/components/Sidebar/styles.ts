import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--gray-800);
  border-radius: 8px;
  overflow: hidden;
`;

export const Background = styled.img`
  width: 100%;
  height: 72px;
  object-fit: cover;
`;

export const ContetProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: calc(0px - 1.5rem - 6px);
`;

export const PicProfile = styled.img`
  width: calc(3rem + 12px);
  height: calc(3rem + 12px);
  border-radius: 8px;
  border: 4px solid var(--gray-900);
  outline: 2px solid var(--orange-600);
`;

export const NameProfile = styled.p`
  margin-top: 1rem;
  color: var(--gray-100);
  line-height: 1.6;
  font-weight: bold;
`;

export const InfoProfile = styled.div`
  font-size: 0.875rem;
  color: var(--gray-400);
`;

export const Footer = styled.div`
  border-top: 1px solid var(--gray-600);
  margin-top: 1.5rem;
  padding: 1.5rem 0;
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

export const Link = styled.a`
  background: var(--orange-600);
  color: var(--gray-600);

  border-radius: 50%;
  padding: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: color 0.3s;

  :hover {
    color: var(--gray-100);
  }
`;
