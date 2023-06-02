import { ProjectsDataProps } from '~/types/projects'

import { useKeenSlider } from 'keen-slider/react'

import { Slide, Container, Description, Title, Img, ContentInfo } from './style'
import { useState } from 'react'
import { DotCorousel } from '../DotCarousel'
import { Tag } from '../Tag'
import Skeleton from 'react-loading-skeleton'

export function Projects({ projects }: ProjectsDataProps) {
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
      {projects.length > 1 && (
        <DotCorousel
          currentSlide={index}
          items={projects}
          instanceRef={instanceRef}
        />
      )}
    </>
  )
}
