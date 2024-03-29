import { useTrail, a } from '@react-spring/web'
import React, { PropsWithChildren } from 'react'

import { Container } from './styles'

interface TrailProps extends PropsWithChildren {
  open: boolean
}

export function Trail({ children, open }: TrailProps) {
  const items = React.Children.toArray(children)
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? 110 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  })

  return (
    <Container title="Click me">
      {trail.map(({ height, ...style }, index) => (
        <a.div key={index} className={'trailsText'} style={style}>
          <a.div style={{ height }}>{items[index]}</a.div>
        </a.div>
      ))}
    </Container>
  )
}
