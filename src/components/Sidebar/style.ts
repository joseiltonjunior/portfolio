import styled from 'styled-components'

export const Container = styled.div`
  background: ${(props) => props.theme.colors.Dark_800};
  border-radius: 8px;
  overflow: hidden;
`

export const Background = styled.div`
  width: 100%;
  height: 72px;

  background-image: url('https://images.unsplash.com/photo-1533709752211-118fcaf03312?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60');
  background-size: cover;
  justify-content: flex-end;
  align-items: flex-start;
  display: flex;

  padding: 0.5rem;
`

export const ContetProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: calc(0px - 1.5rem - 6px);
`

export const PicProfile = styled.img`
  width: calc(3rem + 12px);
  height: calc(3rem + 12px);
  border-radius: 8px;
  border: 4px solid ${(props) => props.theme.colors.Dark_900};
  outline: 2px solid ${(props) => props.theme.colors.Orange};
`

export const NameProfile = styled.p`
  margin-top: 1rem;
  line-height: 1.6;
  font-weight: bold;
`

export const InfoProfile = styled.div`
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.Dark_400};
`

export const Footer = styled.div`
  border-top: 1px solid ${(props) => props.theme.colors.Dark_600};
  margin-top: 1.5rem;
  padding: 1.5rem 0;
  display: flex;
  justify-content: center;
  gap: 1rem;
`

export const Link = styled.a`
  background: ${(props) => props.theme.colors.Orange};
  color: ${(props) => props.theme.colors.Dark_600};

  border-radius: 50%;
  padding: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: color 0.3s;

  :hover {
    color: ${(props) => props.theme.colors.Dark_100};
  }
`
