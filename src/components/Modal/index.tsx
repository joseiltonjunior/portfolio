import { useModal } from "../../hooks/useModal";
import { Button } from "../Button";

import { Container, Overlay, BoxModal, Description, RowContent } from "./style";

export function Modal() {
  const {
    closeModal,
    modalState: { visible, message, confirm, type, children },
  } = useModal();

  return (
    <Container isVisible={visible}>
      <Overlay onClick={() => closeModal()} />
      <BoxModal>
        {children}
        <Description>{message}</Description>

        {!type ? (
          <Button onClick={closeModal} title="Fechar">
            Fechar
          </Button>
        ) : (
          <RowContent>
            <Button
              variant="secondary"
              onClick={closeModal}
              title="Cancelar"
            />
            <Button onClick={confirm} title="Confirmar">
              Confirmar
            </Button>
          </RowContent>
        )}
      </BoxModal>
    </Container>
  );
}
