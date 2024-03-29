import styled, { css } from 'styled-components'

type labelProps = {
  index: number
}

type ContainerProps = {
  disabled?: boolean
  selectIndex: number
}

interface DropdownItemNameProps {
  isSelected?: boolean
}

interface DropdownSelectionProps {
  disabled?: boolean
  isOpen?: boolean
  hasSelected?: boolean
}

export const Container = styled.div<ContainerProps>`
  position: relative;
`

export const DropdownSelection = styled.button<DropdownSelectionProps>`
  background-color: ${(props) => props.theme.colors.Dark_100};
  height: auto;
  border-radius: 8px;
  padding: 0.4rem 1rem;
  width: 100%;
  cursor: pointer;
  border: none;
  box-shadow: none;

  ::before {
    content: '';
    position: absolute;
    width: 6px;
    height: 6px;
    border: 2px solid ${(props) => props.theme.colors.Dark_900};
    right: 16px;
    top: 15px;
    border-top: 1px solid transparent;
    border-right: 1px solid transparent;
    transform: rotate(-45deg);
    transition: all 0.2s;
  }
  ${(props) =>
    props.isOpen &&
    css`
      transition: all 0.2s;
      ::before {
        top: 21px;
        transform: rotate(-225deg);
      }
    `}
`

export const SelectedItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const SelectedItemName = styled.span`
  font-weight: 600;
  font-size: 1rem;

  color: ${(props) => props.theme.colors.Dark_900};
`

export const DropdownItem = styled.div`
  cursor: pointer;

  font-weight: 400;
  font-size: 16px;

  margin-bottom: 0.5rem;
  color: ${(props) => props.theme.colors.Dark_900};

  &:hover > div {
    font-weight: 600;
  }
`

export const DropdownItemName = styled.div<DropdownItemNameProps>`
  padding: 0.2rem 0.5rem;

  ${(props) =>
    props.isSelected &&
    css`
      background: ${(props) => props.theme.colors.Dark_900};
      color: ${(props) => props.theme.colors.Light};
      border-radius: 6px;
      width: fit-content;
      font-weight: 600;
    `}
`

export const DropdownContainer = styled.div`
  background-color: ${(props) => props.theme.colors.Dark_100};
  border-radius: 8px;
  margin-top: 1rem;
  padding: 0.6rem;
  width: 100%;
  z-index: 1000;
`

export const DropdownItensContainer = styled.div`
  overflow: auto;
`

export const Label = styled.label<labelProps>`
  font-size: 0.8rem;
  color: ${(props) => props.theme.colors.Dark_600};
  display: none;

  ${(props) =>
    props.index >= 0 &&
    css`
      display: block;
      opacity: 1;
    `}
`
