import { GrNext, GrPrevious } from 'react-icons/gr'
import { KeenSliderInstance, KeenSliderHooks } from 'keen-slider/react'
import { Container, Dot, Button } from './styles'

import { MutableRefObject } from 'react'

interface DotCarouselProps {
  instanceRef: MutableRefObject<KeenSliderInstance<
    {},
    {},
    KeenSliderHooks
  > | null>
  currentSlide: number
  items: any[]
}

export function DotCorousel({
  items,
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
        {items.map((product, index) => (
          <Dot currentSlide={currentSlide === index} key={index} />
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
