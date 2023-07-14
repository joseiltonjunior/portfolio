import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  background-color: ${(props) => props.theme.colors.Dark_800};

  border-radius: 8px;

  gap: 8px;

  form {
    flex-direction: column;
    display: flex;
    gap: 1.2rem;
    margin-top: 2rem;

    @media (max-width: 900px) {
      margin-top: 1rem;
    }
  }

  strong {
    font-size: 1.3rem;
    text-align: center;

    @media (max-width: 900px) {
      font-size: 1rem;
    }
  }

  button {
    margin-top: 4rem;
  }
`

export const FlexRowResponsive = styled.div`
  display: flex;
  gap: 8px;
  justify-content: space-between;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`
