import React from "react";

import { useTranslation } from "react-i18next";
import {
  Container,
  TextActivities,
  Title,
  TextInfo,
  TitleActivities,
  ContentActivities,
  Line,
} from "./style";

import experience from "./experience.json";

export function Experience() {
  const { t } = useTranslation();

  return (
    <>
      {experience.map((item, index) => (
        <Container key={index}>
          <Title>{t(`descripitionWork${index + 1}`)}</Title>

          <TextInfo>{t(`nameWork${index + 1}`)}</TextInfo>
          <TextInfo>{t(`timeWork${index + 1}`)}</TextInfo>

          <ContentActivities>
            <TextActivities>{t(`activiesWork${index + 1}`)}</TextActivities>

            {item.TECNOLOGIAS && (
              <TextActivities>
                <TitleActivities>
                  {t("sectionExperienceTextInfo")}:{" "}
                </TitleActivities>
                {t(`technologieswork${index + 1}`)}
              </TextActivities>
            )}
          </ContentActivities>
          {index + 1 !== experience.length && <Line />}
        </Container>
      ))}
    </>
  );
}
