import skills from "./skills.json";
import { Container, Skill } from "./style";

export function Skills() {
  return (
    <>
      {skills.map((item) => (
        <Container key={item.name}>
          <Skill>{item.name}</Skill>
        </Container>
      ))}
    </>
  );
}
