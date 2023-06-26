import styled from 'styled-components'

export const Container = styled.div`
  color: ${(props) => props.theme.colors.Orange};
  font-size: 3rem;
  font-weight: 800;
  text-shadow: 2px 2px 1px rgba(0, 0, 0, 0.2);
`

export const CursorSpan = styled.span`
  cursor: none;
  display: none;
  position: relative;
  display: inline-block;
  font-weight: bold;
  font-size: 3rem;
  color: transparent;

  text-shadow: '12px 12px 14px red';

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
