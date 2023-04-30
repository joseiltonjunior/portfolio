import styled, { css } from 'styled-components'

interface DotProps {
  currentSlide: boolean
}

interface ButtonProps {
  orientation: 'prev' | 'next'
}

export const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
  margin-top: 5px;
`

export const Dot = styled.button<DotProps>`
  width: 15px;
  height: 15px;
  border: 2px solid ${(props) => props.theme.colors.Dark_100};
  background: ${(props) => props.theme.colors.Dark_100};
  border-radius: 15px;
  cursor: pointer;

  ${(props) =>
    props.currentSlide &&
    css`
      background: ${props.theme.colors.Dark_600};
    `}
`

export const Button = styled.button<ButtonProps>`
  height: 30px;
  width: 30px;
  border-radius: 30px;
  cursor: pointer;

  /* position: absolute; */
  background-color: ${(props) => props.theme.colors.Dark_100};
  border: none;

  :focus {
    box-shadow: none;
  }

  z-index: 1000;

  /* top: 50%;
  left: ${(props) => props.orientation === 'prev' && 10}px;
  right: ${(props) => props.orientation === 'next' && 10}px; */
`
