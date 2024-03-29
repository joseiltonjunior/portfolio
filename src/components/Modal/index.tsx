import { useModal } from '../../hooks/useModal'
import { Button } from '../Button'

import { Container, Overlay, BoxModal, Description, RowContent } from './style'

export function Modal() {
  const {
    closeModal,
    modalState: { visible, message, confirm, type, children },
  } = useModal()

  return (
    <Container isVisible={visible}>
      <Overlay onClick={() => closeModal()} />
      <BoxModal>
        {children}
        <Description>{message}</Description>

        {!type ? (
          <Button onClick={() => closeModal()}>Fechar</Button>
        ) : (
          <RowContent>
            <Button variant="secondary" onClick={closeModal}>
              Cancelar
            </Button>
            <Button
              onClick={() => {
                if (confirm) confirm()
                closeModal()
              }}
            >
              Confirmar
            </Button>
          </RowContent>
        )}
      </BoxModal>
    </Container>
  )
}
