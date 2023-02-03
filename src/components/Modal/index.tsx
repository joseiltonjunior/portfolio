import { useCallback, useEffect, useState } from "react";
import { useModal } from "~/hooks/useModal";

import {
  Container,
  Overlay,
  BoxModal,
  Description,
  ButtonClose,
  ButtonConfirm,
  RowContent,
} from "./style";

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
        <Description>
          {message?.map((item, index) => (
            <p key={index}>{item.message}</p>
          ))}
        </Description>

        {!type ? (
          <ButtonConfirm onClick={confirm}>Fechar</ButtonConfirm>
        ) : (
          <RowContent>
            <ButtonClose onClick={closeModal}>Cancelar</ButtonClose>
            <ButtonConfirm onClick={confirm}>Confirmar</ButtonConfirm>
          </RowContent>
        )}
      </BoxModal>
    </Container>
  );
}
