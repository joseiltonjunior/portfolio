import styled from 'styled-components'

export const Container = styled.div`
  cursor: pointer;

  .trailsText {
    position: relative;
    width: 100%;
    height: 80px;
    line-height: 80px;
    color: ${(props) => props.theme.colors.Primary};
    font-size: 5rem;
    font-weight: 800;
    letter-spacing: -0.05em;
    will-change: transform, opacity;
    overflow: hidden;

    text-shadow: 1px 1px ${(props) => props.theme.colors.Dark_900};
  }

  .trailsText > div {
    padding-right: 0.05em;
    overflow: hidden;
  }
`
