import { Section } from "../Section";
import { Abbout } from "~/pages/About";

import { Container } from "./style";
import { Experience } from "~/pages/Experience";
import { Education } from "~/pages/Education";
import { Skills } from "~/pages/Skills";
import { useTranslation } from "react-i18next";

export function Content() {
  const { t } = useTranslation();

  return (
    <Container>
      <Section title={t("aboutTitle")}>
        <Abbout />
      </Section>
      <Section title={t("experienceTitle")} show>
        <Experience />
      </Section>
      <Section title={t("educationTitle")} show>
        <Education />
      </Section>
      <Section title={t("skillsTitle")} show>
        <Skills />
      </Section>
    </Container>
  );
}
