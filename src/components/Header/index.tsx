import { useEffect, useState } from "react";
import i18next from "i18next";


import logo from "../../assets/binary-code.png";
import brazil from "../../assets/brazil.png";
import eua from "../../assets/eua.png";
import { Swicth } from "../Switch";

import { Containe, Content, Logo, Flag } from "./style";

export function Header() {
  const ptBR = "pt-BR";
  const enUS = "en-US";

  const [lang, setLang] = useState<string>("");

  function handleChangeLanguage() {
    if (lang === enUS) {
      localStorage.setItem("i18nextLng", ptBR);
      i18next.changeLanguage(ptBR);
      setLang(ptBR);
      return;
    }

    localStorage.setItem("i18nextLng", enUS);
    i18next.changeLanguage(enUS);
    setLang(enUS);
  }

  useEffect(() => {
    const localLang = localStorage.getItem("i18nextLng") ?? ptBR;
    setLang(localLang);
  }, [lang]);

  return (
    <Containe>
      <Logo src={logo} alt="Logo" />

      <Content>
        <Flag src={brazil} alt="FlagBrazil" />
        <Swicth checked={lang === "en-US"} onChange={handleChangeLanguage} />
        <Flag src={eua} alt="FlagEua" />
      </Content>
    </Containe>
  );
}
