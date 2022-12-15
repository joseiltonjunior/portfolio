import {
  ContentActivities,
  Container,
  TextActivities,
  TextInfo,
  Title,
} from "./style";

import education from "./education.json";
import { useTranslation } from "react-i18next";
import { Line } from "~/styles/global";

export function Education() {
  const { t } = useTranslation();

  return (
    <>
      {education.map((item, index) => (
        <Container key={index}>
          <Title> {t(`descriptionEducation${index + 1}`)}</Title>

          <TextInfo>{t(`courseEducation${index + 1}`)}</TextInfo>
          <TextInfo>{t(`timeEducation${index + 1}`)}</TextInfo>

          <ContentActivities>
            <TextActivities>
              {t(`activiesEducation${index + 1}`)}
            </TextActivities>
          </ContentActivities>
          {index + 1 !== education.length && <Line />}
        </Container>
      ))}
    </>
  );
}
