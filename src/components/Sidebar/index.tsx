import {
  Container,
  Background,
  ContetProfile,
  PicProfile,
  NameProfile,
  InfoProfile,
  Footer,
  Link,
  Settings,
  ButtonSetting,
  HeaderSettings,
  ContentSettings,
  ButtonCloseSettings,
} from "./style";
import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";
import { FaCog } from "react-icons/fa";
import { ImExit } from "react-icons/im";
import { useEffect, useState } from "react";
import i18next from "i18next";
import { Select } from "../Select";

import { useTranslation } from "react-i18next";
import { usePersistedState } from "~/hooks/usePersistedState";
import { DefaultTheme } from "styled-components";

import light from "~/styles/themes/light";
import dark from "~/styles/themes/dark";

export function Sidebar() {
  const [settings, setSettings] = useState(false);
  const [lang, setLang] = useState(localStorage.getItem("i18nextLng") ?? "");

  const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", dark);

  const { t } = useTranslation();

  function handleChangeLanguage(newLang: string) {
    setLang(newLang);
    i18next.changeLanguage(newLang);
  }

  function handleChangeTheme(theme: string) {
    setTheme(theme === "light" ? light : dark);

    window.location.reload();
  }

  return (
    <>
      {!settings ? (
        <Container>
          <Background>
            <ButtonSetting
              title={t("openSettings") ?? ""}
              onClick={() => setSettings(true)}
            >
              <FaCog size={18} />
            </ButtonSetting>
          </Background>

          <ContetProfile>
            <PicProfile
              src="https://avatars.githubusercontent.com/u/47725788?v=4"
              alt="pic_profile"
            />
            <NameProfile>Junior Ferreira</NameProfile>
            <InfoProfile>Software Developer</InfoProfile>
          </ContetProfile>

          <Footer>
            <Link
              href="https://www.linkedin.com/in/joseilton-junior/"
              target="_blank"
              rel="noopener noreferrer"
              title="Linkedln"
            >
              <FiLinkedin size={20} />
            </Link>
            <Link
              href="https://github.com/joseiltonjunior"
              target="_blank"
              rel="noopener noreferrer"
              title="Github"
            >
              <FiGithub size={20} />
            </Link>
            <Link
              href="https://www.instagram.com/dvlp.jr/"
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram"
            >
              <FiInstagram size={20} />
            </Link>
          </Footer>
        </Container>
      ) : (
        <Settings>
          <HeaderSettings>
            {t("settings")}
            <ButtonCloseSettings
              onClick={() => setSettings(false)}
              title={t("closeSettings") ?? ""}
            >
              <ImExit />
            </ButtonCloseSettings>
          </HeaderSettings>
          <ContentSettings>
            <Select
              label={t("lang")}
              onAction={(item) => handleChangeLanguage(item.value)}
              defaultValue={lang}
              itens={[
                { name: t("portugues"), value: "pt_BR" },
                { name: t("ingles"), value: "en_US" },
              ]}
            />
            <Select
              label={t("theme")}
              onAction={(item) => handleChangeTheme(item.value)}
              defaultValue={theme.title}
              itens={[
                { name: "Light", value: "light" },
                { name: "Dark", value: "dark" },
              ]}
            />
          </ContentSettings>
        </Settings>
      )}
    </>
  );
}
