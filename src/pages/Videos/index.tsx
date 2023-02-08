import { useEffect, useState } from "react";
import { Card } from "./Card";
import { Container, MobileView, WebView, NoContent } from "./style";

import { CardProps } from "~/types/cardVideo";

import videos from "./videos-info.json";
import thumb from "~/assets/thumb-react-ts@1x.png";
import { t } from "i18next";
import { useTranslation } from "react-i18next";

export function Videos() {
  const [infoVideos, setInfoVideos] = useState<CardProps[]>();

  const { t } = useTranslation();

  useEffect(() => {
    videos[0].thumb = thumb;

    setInfoVideos(videos);
  }, []);

  return (
    <Container>
      {infoVideos ? (
        <>
          <WebView>
            {infoVideos.map((item, index) => (
              <Card
                key={item.id}
                description={t(`descriptionVideo${index + 1}`)}
                thumb={item.thumb}
                title={t(`titleVideo${index + 1}`)}
                id={item.id}
              />
            ))}
          </WebView>

          <MobileView>
            {infoVideos.map((item) => (
              <Card
                key={item.id}
                description={item.description}
                thumb={item.thumb}
                title={item.title}
                id={item.id}
                mobile
              />
            ))}
          </MobileView>
        </>
      ) : (
        <NoContent>{t("noContent")}</NoContent>
      )}
    </Container>
  );
}
