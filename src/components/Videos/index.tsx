import { Card } from './Card'
import { Container, Content, NoContent } from './style'

import { useTranslation } from 'react-i18next'
import { useCallback, useEffect, useState } from 'react'

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

  const [videos, setVideos] = useState<VideosProps[]>()
  const { showToast } = useToast()

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
    <Container>
      <Content>
        {videos.map((item) => (
          <Card
            key={item.id}
            description={item.description}
            thumb={item.thumb}
            title={item.title}
            id={item.id}
            mobile
          />
        ))}
      </Content>
    </Container>
  )
}
