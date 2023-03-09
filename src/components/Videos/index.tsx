import { Card } from './Card'
import { Container, MobileView, WebView, NoContent } from './style'

import { useTranslation } from 'react-i18next'

interface VideosProps {
  videos: {
    id: string
    thumb: string
  }[]
}

export function Videos({ videos }: VideosProps) {
  const { t } = useTranslation()

  return (
    <Container>
      {videos.length > 0 ? (
        <>
          <WebView>
            {videos.map((item, index) => (
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
            {videos.map((item, index) => (
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
        <NoContent>{t('noContent')}</NoContent>
      )}
    </Container>
  )
}
