import { useTranslation } from "react-i18next";
import skills from "./skills.json";
import { Skill } from "./style";

export function Skills() {
  const { t } = useTranslation();

  return (
    <>
      {skills.map((item) => (
        <div>
          <Skill
            key={item.name}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            title={item.url && `Certificado: ${item.name}`}
          >
            {item.name}
          </Skill>
        </div>
      ))}
    </>
  );
}
