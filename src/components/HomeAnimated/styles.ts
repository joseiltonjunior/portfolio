import styled from 'styled-components'

export const Content = styled.div`
  min-width: 100px;
  padding: 0 20px;
  margin: 0 auto;
  height: 260px;

  .transitionItem {
    overflow: hidden;
    width: 100%;
    color: white;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 5em;
    font-weight: 800;
    text-transform: uppercase;
    will-change: transform, opacity, height;
    white-space: nowrap;
    cursor: pointer;
    line-height: 80px;
    text-shadow: 1px 1px 1px #202024;
  }
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: center;
`
