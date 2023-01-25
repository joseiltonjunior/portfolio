import { useModal } from "~/hooks/useModal";

import {
  Container,
  Content,
  Description,
  ButtonClose,
  ButtonConfirm,
  RowContent,
} from "./style";

export function Modal() {
  const {
    closeModal,
    modalState: { visible, message, confirm, type = "info" },
  } = useModal();

  return (
    <Container isVisible={visible}>
      <Content>
        <Description>{message}</Description>
        {type === "info" ? (
          <ButtonConfirm onClick={confirm}>Fechar</ButtonConfirm>
        ) : (
          <RowContent>
            <ButtonClose onClick={closeModal}>Cancelar</ButtonClose>
            <ButtonConfirm onClick={confirm}>Confirmar</ButtonConfirm>
          </RowContent>
        )}
      </Content>
    </Container>
  );
}
