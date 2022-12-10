import { usePersistedState } from "./usePersistedState";

import { DefaultTheme, ThemeProvider } from "styled-components";

import dark from "../styles/themes/dark";

export function ThemesProvider({ children }: React.PropsWithChildren) {
  const [theme] = usePersistedState<DefaultTheme>("theme", dark);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
