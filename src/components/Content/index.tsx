import { Section } from "../Section";
import { Abbout } from "../../pages/About";

import { Container } from "./style";
import { Experience } from "../../pages/Experience";
import { Education } from "../../pages/Education";
import { Skills } from "../../pages/Skills";

export function Content() {
  return (
    <Container>
      <Section title="About">
        <Abbout />
      </Section>
      <Section title="Experience" show>
        <Experience />
      </Section>
      <Section title="Education" show>
        <Education />
      </Section>
      <Section title="Skills" show>
        <Skills />
      </Section>
    </Container>
  );
}
