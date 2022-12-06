import { Section } from "../Section";
import { Abbout } from "../../pages/Abbout";

import { Container } from "./styles";
import { Experience } from "../../pages/Experience";

export function Content() {
  return (
    <Container>
      <Section title="Abbout">
        <Abbout />
      </Section>
      <Section title="Experience">
        <Experience />
      </Section>
    </Container>
  );
}
