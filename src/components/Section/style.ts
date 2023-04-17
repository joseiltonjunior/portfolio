import styled from 'styled-components'

export const Container = styled.div`
  background: ${(props) => props.theme.colors.Dark_800};

  border-radius: 8px;
  padding: 2rem;

  width: 800px;

  @media (max-width: 900px) {
    width: 100%;
  }
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ShowButton = styled.button`
  background-color: transparent;
  border: none;
  color: ${(props) => props.theme.colors.Dark_100};
  line-height: 0;
  transition: color, 0.2s;
  cursor: pointer;

  :hover {
    color: ${(props) => props.theme.colors.Orange};
  }
`

export const Title = styled.p`
  font-size: 1.15rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.Dark_100};
`

export const Content = styled.div`
  margin-top: 1rem;
`

export const Box = styled.div`
  max-width: 70rem;
`

Container.displayName = 'Section'
Box.displayName = 'Box'
