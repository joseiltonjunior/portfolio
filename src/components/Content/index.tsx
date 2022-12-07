import { Section } from "../Section";
import { Abbout } from "../../pages/Abbout";

import { Container } from "./styles";
import { Experience } from "../../pages/Experience";
import { Education } from "../../pages/Education";

export function Content() {
  return (
    <Container>
      <Section title="Abbout">
        <Abbout />
      </Section>
      <Section title="Experience" show>
        <Experience />
      </Section>
      <Section title="Education" show>
        <Education />
      </Section>
    </Container>
  );
}
