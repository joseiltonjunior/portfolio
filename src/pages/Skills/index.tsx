import skills from "./skills.json";
import { Container, Skill } from "./style";

export function Skills() {
  return (
    <>
      {skills.map((item) => (
        <Container key={item.name}>
          <Skill
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            title={item.url && `Certificado: ${item.name}`}
          >
            {item.name}
          </Skill>
        </Container>
      ))}
    </>
  );
}
