import styled from 'styled-components'

export const Play = styled.div`
  border: none;
  height: 28.125rem;

  iframe {
    border: none;
  }

  @media (max-width: 900px) {
    height: 15.625rem;
  }
`

export const Container = styled.div`
  border: 1px solid ${(props) => props.theme.colors.Dark_600};
  overflow: hidden;
  border-radius: 6px;

  display: grid;
  grid-template-columns: 12.5rem auto;
  cursor: pointer;

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
  }
`

export const Thumb = styled.div`
  position: relative;
  background-color: transparent;

  .iconPlay {
    position: absolute;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;
    background-color: rgba(1, 1, 1, 0.5);
  }
`

export const Img = styled.img`
  object-fit: cover;

  height: 100%;
  width: 100%;

  border-radius: 8px;
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 1rem;
  background-color: ${(props) => props.theme.colors.Dark_600};

  span {
    margin-top: 1rem;
  }
`
