import { GrNext, GrPrevious } from 'react-icons/gr'
import { KeenSliderInstance, KeenSliderHooks } from 'keen-slider/react'
import { Container, Dot, Button } from './styles'
import { ProjectsDataProps } from '~/types/projects'
import { MutableRefObject } from 'react'

interface DotCarouselProps extends ProjectsDataProps {
  instanceRef: MutableRefObject<KeenSliderInstance<
    {},
    {},
    KeenSliderHooks
  > | null>
  currentSlide: number
}

export function DotCorousel({
  projects,
  instanceRef,
  currentSlide,
}: DotCarouselProps) {
  return (
    <Container>
      <Button
        orientation="prev"
        onClick={(e) => {
          instanceRef.current?.prev()
        }}
      >
        <GrPrevious />
      </Button>
      <div style={{ gap: '0.5rem', display: 'flex' }}>
        {projects.map((product, index) => (
          <Dot currentSlide={currentSlide === index} key={product.name} />
        ))}
      </div>
      <Button
        orientation="next"
        onClick={(e) => {
          instanceRef.current?.next()
        }}
      >
        <GrNext />
      </Button>
    </Container>
  )
}
