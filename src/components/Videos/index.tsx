import { useKeenSlider } from 'keen-slider/react'
import { Card } from './Card'
import { Container, Content, NoContent } from './style'

import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import { DotCorousel } from '../DotCarousel'

interface VideosProps {
  videos: {
    id: string
    thumb: string
  }[]
}

export function Videos({ videos }: VideosProps) {
  const { t } = useTranslation()
  const [index, setIndex] = useState(0)
  const [sliderRef, instanceRef] = useKeenSlider({
    slides: {
      perView: 1,
      spacing: 48,
    },
    loop: true,
    slideChanged(slider) {
      setIndex(slider.track.details.rel)
    },
  })

  return (
    <Container ref={sliderRef} className="ken-slider">
      {videos.length > 0 ? (
        <>
          <Content>
            {videos.map((item, index) => (
              <Card
                className="keen-slider__slide"
                key={item.id}
                description={t(`descriptionVideo${index + 1}`)}
                thumb={item.thumb}
                title={t(`titleVideo${index + 1}`)}
                id={item.id}
                mobile
              />
            ))}
          </Content>

          <DotCorousel
            currentSlide={index}
            items={videos}
            instanceRef={instanceRef}
          />
        </>
      ) : (
        <NoContent>{t('noContent')}</NoContent>
      )}
    </Container>
  )
}
