import styled from 'styled-components'

export const Container = styled.div`
  color: ${(props) => props.theme.colors.Orange};
  font-size: 5rem;
  font-weight: 800;
`

export const CursorSpan = styled.span`
  cursor: none;
  display: none;
  position: relative;
  display: inline-block;
  font-weight: bold;
  font-size: 5rem;
  color: transparent;

  &:before {
    content: '';
    position: absolute;
    width: 15px;
    height: 100%;
    background-color: ${(props) => props.theme.colors.Orange};
    opacity: 0.5;
    animation: cursorAnimation 1s infinite;
  }

  @keyframes cursorAnimation {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`
