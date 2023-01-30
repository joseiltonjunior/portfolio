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
    modalState: { visible, message, confirm, type = "info", children },
  } = useModal();

  return (
    <Container isVisible={visible}>
      <Content>
        {children}

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
