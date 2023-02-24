import { SkeletonTheme } from "react-loading-skeleton";
import { ModalProvider } from "./useModal";
import { ThemeProvider } from "styled-components";
import theme from "~/styles/theme";
import "react-loading-skeleton/dist/skeleton.css";

export function Hooks({ children }: React.PropsWithChildren) {
  return (
    <ThemeProvider theme={theme}>
      <ModalProvider>
        <SkeletonTheme
          baseColor={theme.colors.Dark_800}
          highlightColor={theme.colors.Dark_300}
        >
          {children}
        </SkeletonTheme>
      </ModalProvider>
    </ThemeProvider>
  );
}
