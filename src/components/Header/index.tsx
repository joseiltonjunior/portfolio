import { Containe } from "./style";

import logo from "~/assets/binary-code.png";

export function Header() {
  return (
    <Containe>
      <img src={logo} alt="Logo Sidebar" />
    </Containe>
  );
}
