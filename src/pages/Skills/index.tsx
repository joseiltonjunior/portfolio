import { useTranslation } from "react-i18next";
import skills from "./skills.json";
import { Skill } from "./style";

export function Skills() {
  const { t } = useTranslation();

  return (
    <>
      {skills.map((item) => (
        <Skill key={item.name}>{item.name}</Skill>
      ))}
    </>
  );
}
