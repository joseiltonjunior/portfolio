import styled from 'styled-components'
import background from '~/assets/bkgd3.jpg'

export const WebContent = styled.div`
  background-color: 'blue';

  .pressStart {
    display: flex;
    gap: 1rem;
    align-items: center;

    background-color: rgba(0, 0, 0, 0.5);
    color: ${(props) => props.theme.colors.Orange};

    border: 1px solid ${(props) => props.theme.colors.Orange};
    border-radius: 6px;
    padding: 0.5rem 1rem;

    cursor: pointer;

    font-weight: bold;
    font-size: 1.5rem;

    transition: all 0.2s;

    :hover {
      background-color: ${(props) => props.theme.colors.Orange};
      border: 1px solid ${(props) => props.theme.colors.Orange};

      color: ${(props) => props.theme.colors.Dark_700};
    }
  }

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
      background: ${(props) => props.theme.colors.Orange};
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

export const Container = styled.main``

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`
