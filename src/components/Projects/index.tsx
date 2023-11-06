import { ProjectProps } from '~/types/projects'

import { useKeenSlider } from 'keen-slider/react'

import { Slide, Container, Description, Title, Img, ContentInfo } from './style'
import { useCallback, useEffect, useState } from 'react'

import { Tag } from '../Tag'
import Skeleton from 'react-loading-skeleton'
import { collection, getDocs, query } from 'firebase/firestore'
import { firestore } from '~/services/firebase'
import { useToast } from '~/hooks/useToast'

export function Projects() {
  const [projects, setProjects] = useState<ProjectProps[]>()
  const { showToast } = useToast()
  const [sliderRef, instanceRef] = useKeenSlider({
    slides: {
      perView: 1,
      spacing: 48,
    },
    loop: true,
  })

  const handleProjectsPortfolio = useCallback(() => {
    const q = query(collection(firestore, 'projects'))
    getDocs(q)
      .then((querySnapshot) => {
        const techsResponses = querySnapshot.docs.map(
          (doc) =>
            ({
              imgUrl: doc.data().imgUrl,
              url: doc.data().url,
              description: doc.data().description,
              name: doc.data().name,
              techs: doc.data().techs,
              status: doc.data().status,
            } as ProjectProps),
        )

        setProjects(techsResponses)
      })
      .catch(() => {
        showToast('Error while fetching projects', {
          type: 'error',
          theme: 'colored',
        })
      })
  }, [showToast])

  useEffect(() => {
    const interval = setInterval(() => {
      instanceRef.current?.next()
    }, 5000)

    return () => {
      clearInterval(interval)
    }
  }, [instanceRef])

  useEffect(() => {
    handleProjectsPortfolio()
  }, [handleProjectsPortfolio])

  if (!projects || projects.length === 0) {
    return (
      <>
        <Skeleton height={350} />
        <Skeleton height={35} style={{ marginTop: '1rem' }} />
      </>
    )
  }

  return (
    <>
      <Container ref={sliderRef} className="ken-slider">
        {projects.length > 0 &&
          projects.map((item) => (
            <Slide
              key={item.name}
              title={`Abrir o projeto ${item.name}`}
              href={item.url}
              target="_blank"
              className="keen-slider__slide"
            >
              <Img src={item.imgUrl} alt="" />

              <ContentInfo>
                <Title>
                  {item.name}
                  {item.status === 1 && ` - Em desenvolvimento`}
                </Title>
                <Description>{item.description}</Description>
                {item.techs && (
                  <div className="tags">
                    {item.techs.map((tech) => (
                      <Tag key={tech}>{tech}</Tag>
                    ))}
                  </div>
                )}
              </ContentInfo>
            </Slide>
          ))}
      </Container>
    </>
  )
}
