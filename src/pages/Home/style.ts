import styled from 'styled-components'
import background from '~/assets/bkgd3.jpg'

export const WebContent = styled.div`
  .firstLayer {
    background-image: url(${background});
    background-size: contain;
  }

  .info {
    color: ${(props) => props.theme.colors.Light};
    text-shadow: 3px 3px ${(props) => props.theme.colors.Dark_900};
  }

  .content-parallax {
    ::-webkit-scrollbar {
      width: 0.4rem;
    }

    ::-webkit-scrollbar-thumb {
      background: ${(props) => props.theme.colors.Primary};
    }
  }

  .scrollText {
    font-size: 2rem;
    color: ${(props) => props.theme.colors.Light};
    text-shadow: 3px 3px ${(props) => props.theme.colors.Dark_900};
    font-weight: bold;
  }

  .card {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .parallax {
    margin-right: 5%;
    width: 60%;
  }

  .sticky {
    margin-left: 10%;
    width: 15%;
  }

  @media (min-width: 1700px) {
    .parallax {
      margin-right: 10%;
    }

    .sticky {
      margin-left: 20%;
    }
  }

  @media (max-width: 900px) {
    display: none;
  }
`

export const MobileContent = styled.div`
  max-width: 70rem;
  margin: 2rem auto;
  padding: 0 1rem;

  display: none;
  grid-template-columns: 256px 1fr;
  gap: 2rem;
  align-items: flex-start;

  @media (max-width: 900px) {
    display: grid;
    grid-template-columns: 1fr;
    font-size: 87.5%;
  }
`

export const Container = styled.div`
  /* background-color: red; */
  /* width: 100%; */
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`
