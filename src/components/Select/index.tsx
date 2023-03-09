import { ReactNode, useEffect, useState } from 'react'

import {
  Container,
  Label,
  DropdownContainer,
  DropdownItensContainer,
  SelectedItem,
  DropdownSelection,
  DropdownItem,
  DropdownItemName,
  SelectedItemName,
} from './style'

type ItensDropdownProps = {
  value: string
  name: ReactNode
}

type SelectProps = {
  label: string
  itens: ItensDropdownProps[]
  defaultValue: string
  disabled?: boolean
  onAction(item: ItensDropdownProps): void
}

export function Select({
  label,
  itens,
  defaultValue,
  onAction,
  disabled,
}: SelectProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [selectedItemIndex, setSelectedItemIndex] = useState(0)

  useEffect(() => {
    const itemFoundIndex = itens.findIndex(
      (item) => item.value === defaultValue,
    )

    setSelectedItemIndex(itemFoundIndex)
  }, [defaultValue, itens])

  return (
    <Container
      selectIndex={selectedItemIndex}
      disabled={disabled}
      onBlur={() => {
        setTimeout(() => setIsDropdownOpen(false), 200)
      }}
    >
      <DropdownSelection
        disabled={disabled}
        onClick={() => {
          setIsDropdownOpen(!isDropdownOpen)
        }}
        isOpen={isDropdownOpen}
        hasSelected={selectedItemIndex > 0}
      >
        <SelectedItem>
          <Label index={selectedItemIndex}>{label}</Label>
          <SelectedItemName>
            {selectedItemIndex >= 0 &&
            itens.length !== 0 &&
            selectedItemIndex < itens.length
              ? itens[selectedItemIndex].name
              : label}
          </SelectedItemName>
        </SelectedItem>
      </DropdownSelection>

      {isDropdownOpen && (
        <DropdownContainer>
          <DropdownItensContainer>
            {itens.map((item, index) => (
              <DropdownItem
                key={item.value}
                onClick={() => {
                  if (onAction) onAction(item)
                  setSelectedItemIndex(index)
                  setIsDropdownOpen(false)
                }}
              >
                <DropdownItemName isSelected={index === selectedItemIndex}>
                  {item.name}
                </DropdownItemName>
              </DropdownItem>
            ))}
          </DropdownItensContainer>
        </DropdownContainer>
      )}
    </Container>
  )
}
