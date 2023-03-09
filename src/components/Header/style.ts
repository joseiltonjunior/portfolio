import styled from 'styled-components'

export const Containe = styled.div`
  background: ${(props) => props.theme.colors.Dark_800};
  padding: 1rem 2rem;

  display: flex;
  justify-content: center;
  height: 4.375rem;

  transition: all 0.2s;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`

export const Content = styled.div`
  margin-left: auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.3rem;
`

export const Flag = styled.img`
  width: 1.8rem;
  height: 1.8rem;
`

export const Logo = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  position: absolute;
`
