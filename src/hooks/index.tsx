import { ThemesProvider } from "../hooks/theme";
import React from "react";

export function Hooks({ children }: React.PropsWithChildren) {
  return <ThemesProvider>{children}</ThemesProvider>;
}
