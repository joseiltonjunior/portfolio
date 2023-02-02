import { ModalProvider } from "./useModal";

export function Hooks({ children }: React.PropsWithChildren) {
  return <ModalProvider>{children}</ModalProvider>;
}
