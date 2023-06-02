import { useKeenSlider } from 'keen-slider/react'
import { Card } from './Card'
import { Container, Content, NoContent } from './style'

import { useTranslation } from 'react-i18next'
import { useCallback, useEffect, useState } from 'react'
import { DotCorousel } from '../DotCarousel'
import { collection, getDocs, query } from 'firebase/firestore'
import { firestore } from '~/services/firebase'
import { useToast } from '~/hooks/useToast'

interface VideosProps {
  id: string
  thumb: string
  title: string
  description: string
}

export function Videos() {
  const { t } = useTranslation()
  const [index, setIndex] = useState(0)
  const [videos, setVideos] = useState<VideosProps[]>()
  const { showToast } = useToast()
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

  const handleProjectsPortfolio = useCallback(() => {
    const q = query(collection(firestore, 'videos'))
    getDocs(q)
      .then((querySnapshot) => {
        const techsResponses = querySnapshot.docs.map(
          (doc) =>
            ({
              thumb: doc.data().thumb,
              id: doc.data().id,
              description: doc.data().description,
              title: doc.data().title,
            } as VideosProps),
        )

        setVideos(techsResponses)
      })
      .catch(() => {
        showToast('Error while fetching videos', {
          type: 'error',
          theme: 'colored',
        })
      })
  }, [showToast])

  useEffect(() => {
    handleProjectsPortfolio()
  }, [handleProjectsPortfolio])

  if (!videos) {
    return <NoContent>{t('noContent')}</NoContent>
  }

  return (
    <Container ref={sliderRef} className="ken-slider">
      <Content>
        {videos.map((item) => (
          <Card
            className="keen-slider__slide"
            key={item.id}
            description={item.description}
            thumb={item.thumb}
            title={item.title}
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
    </Container>
  )
}
