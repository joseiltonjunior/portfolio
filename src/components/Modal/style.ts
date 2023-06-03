import styled from 'styled-components'

interface ContainerProps {
  isVisible: boolean
}

export const Container = styled.div<ContainerProps>`
  position: fixed;
  width: 100vw;
  height: 100vh;

  display: ${(props) => (props.isVisible ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;

  z-index: 1000;
`

export const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 100%;
`

export const BoxModal = styled.div`
  position: absolute;
  background-color: ${(props) => props.theme.colors.Dark_600};
  padding: 1rem;
  border-radius: 6px;
  width: 100%;
  max-width: 50rem;

  @media (max-width: 558px) {
    max-width: 23.125rem;
  }
`

export const Description = styled.div`
  padding: 1rem 0;
  margin-bottom: 1rem;
  text-align: left;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const RowContent = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 1fr;

  justify-content: center;
`
