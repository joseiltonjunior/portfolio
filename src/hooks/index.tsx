import { ThemesProvider } from "../hooks/theme";
import { ModalProvider } from "./useModal";

export function Hooks({ children }: React.PropsWithChildren) {
  return (
    <ThemesProvider>
      <ModalProvider>{children}</ModalProvider>
    </ThemesProvider>
  );
}
