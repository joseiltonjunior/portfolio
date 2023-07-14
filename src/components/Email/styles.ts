import styled from 'styled-components'

export const Container = styled.div`
  border-radius: 8px;
  overflow: hidden;

  gap: 8px;

  form {
    display: grid;
    grid-template-columns: 0.9fr 1fr;

    height: 100%;

    @media (max-width: 900px) {
      margin-top: 1rem;
      grid-template-columns: 1fr;
    }
  }

  strong {
    font-size: 1;
    text-align: center;
  }

  button {
    margin-top: 4rem;
  }
`

export const UserInfo = styled.div`
  padding-right: 16px;
  display: flex;
  flex-direction: column;

  gap: 2rem;
  border-right: 1px solid ${(props) => props.theme.colors.Dark_600};

  @media (max-width: 900px) {
    padding: 0;
    border: none;
  }
`

export const MessageInfo = styled.div`
  padding-left: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 900px) {
    padding: 0;
    margin-top: 2rem;
  }
`
