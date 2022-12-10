import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--gray-800);
  border-radius: 8px;
  overflow: hidden;
`;

export const Settings = styled(Container)`
  min-height: 8rem;
  padding: 1rem;
  height: auto;
`;

export const ContentSettings = styled.div`
  margin-top: 1rem;
`;

export const HeaderSettings = styled.div`
  display: flex;
  justify-content: space-between;

  color: var(--gray-100);
  font-weight: bold;
`;

export const ButtonSetting = styled.button`
  border: none;
  background: transparent;
  color: var(--gray-100);
  cursor: pointer;
  transition: color 0.2s;

  :hover {
    color: var(--orange-600);
  }
`;

export const Background = styled.div`
  width: 100%;
  height: 72px;

  background-image: url("https://images.unsplash.com/photo-1533709752211-118fcaf03312?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60");
  background-size: cover;
  justify-content: flex-end;
  align-items: flex-start;
  display: flex;

  padding: 0.5rem;
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
