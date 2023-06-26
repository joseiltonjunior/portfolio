import styled from 'styled-components'

export const Container = styled.div`
  background: linear-gradient(
    30deg,
    ${(props) => props.theme.colors.Orange},
    ${(props) => props.theme.colors.Dark_800}
  );

  -webkit-box-shadow: 0px 0.5px 5px 0px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 0px 0.5px 5px 0px rgba(0, 0, 0, 0.5);
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.5);

  padding: 0.5rem 1rem;

  display: flex;
  justify-content: center;

  transition: all 0.2s;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`

export const Content = styled.div`
  margin-left: auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.3rem;
`

export const Flag = styled.img`
  width: 1.8rem;
  height: 1.8rem;
`
