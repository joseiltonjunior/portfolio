import { useEffect, useState } from "react";
import { Card } from "./Card";
import { Container, MobileView, WebView, NoContent } from "./style";

import { CardProps } from "~/types/cardVideo";

import videos from "./videos-info.json";
import { t } from "i18next";

export function Videos() {
  const [infoVideos, setInfoVideos] = useState<CardProps[]>();

  useEffect(() => {
    setInfoVideos(videos);
  }, []);

  return (
    <Container>
      {infoVideos ? (
        <>
          <WebView>
            {infoVideos.map((item) => (
              <Card
                key={item.id}
                description={item.description}
                thumb={item.thumb}
                title={item.title}
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
