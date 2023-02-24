import { useEffect, useState } from "react";
import { Card } from "./Card";
import { Container, MobileView, WebView, NoContent } from "./style";

import thumb from "~/assets/thumb-react-ts.png";
import thumb2 from "~/assets/thumb-react-storybook.png";
import thumb3 from "~/assets/thumb-skeleton.png";

import { useTranslation } from "react-i18next";

interface VideosProps {
  id: string;
  thumb: string;
}

export function Videos() {
  const [infoVideos, setInfoVideos] = useState<VideosProps[]>();

  const { t } = useTranslation();

  const videos = [
    { thumb: thumb, id: "8hUrdjSWTqU" },
    { thumb: thumb2, id: "xTsHUpVuWmo" },
    { thumb: thumb3, id: "cNARhMjDgSM" },
  ] as VideosProps[];

  useEffect(() => {
    setInfoVideos(videos);
  }, []);

  return (
    <Container>
      {infoVideos && infoVideos?.length > 0 ? (
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
            {infoVideos.map((item, index) => (
              <Card
                key={item.id}
                description={t(`descriptionVideo${index + 1}`)}
                thumb={item.thumb}
                title={t(`titleVideo${index + 1}`)}
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
