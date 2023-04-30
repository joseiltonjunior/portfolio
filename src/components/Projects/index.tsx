import { ProjectsDataProps } from '~/types/projects'

import { useKeenSlider } from 'keen-slider/react'

import { Slide, Container, Description, Title, Img, ContentInfo } from './style'
import { useState } from 'react'
import { DotCorousel } from '../DotCarousel'

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

  return (
    <>
      <Container ref={sliderRef} className="ken-slider">
        {projects.map((item) => (
          <Slide
            key={item.name}
            title={`Abrir o projeto ${item.name}`}
            href={item.url}
            target="_blank"
            className="keen-slider__slide"
          >
            <div>
              <Img src={item.icon} alt="" />

              <ContentInfo>
                <Title>
                  {item.name}
                  {item.stage === 'dev' && ` - Em desenvolvimento`}
                </Title>
                <Description>{item.description}</Description>
                <Description>Tecnologias usadas: {item.skills}</Description>
              </ContentInfo>
            </div>
          </Slide>
        ))}
      </Container>
      {projects.length > 1 && (
        <DotCorousel
          currentSlide={index}
          projects={projects}
          instanceRef={instanceRef}
        />
      )}
    </>
  )
}
