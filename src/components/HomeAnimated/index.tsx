import React, { useState, useCallback, useRef, useEffect } from 'react'
import { useTransition, animated } from '@react-spring/web'
import { Container, Content } from './styles'

export function HomeAnimated() {
  const ref = useRef<ReturnType<typeof setTimeout>[]>([])
  const [items, set] = useState<string[]>([])
  const transitions = useTransition(items, {
    from: {
      opacity: 0,
      height: 0,
      innerHeight: 0,
      transform: 'perspective(600px) rotateX(0deg)',
      color: '#fff',
    },
    enter: [
      { opacity: 1, height: 80, innerHeight: 80 },
      { transform: 'perspective(600px) rotateX(180deg)', color: '#8128E7' },
      { transform: 'perspective(600px) rotateX(0deg)' },
    ],
    leave: [{ color: '#fff' }, { innerHeight: 0 }, { opacity: 0, height: 0 }],
    update: { color: '#8128E7' },
  })

  const reset = useCallback(() => {
    ref.current.forEach(clearTimeout)
    ref.current = []
    set([])
    ref.current.push(
      setTimeout(() => set(['Back-end', 'Front-end', 'Mobile']), 2000),
    )
    ref.current.push(setTimeout(() => set(['Back-end', 'Mobile']), 5000))
    ref.current.push(
      setTimeout(() => set(['Back-end', 'Data-base', 'Mobile']), 8000),
    )
  }, [])

  useEffect(() => {
    reset()
    return () => ref.current.forEach(clearTimeout)
  }, [reset])

  return (
    <Container>
      <Content>
        {transitions(({ innerHeight, ...rest }, item) => (
          <animated.div style={rest} onClick={reset} className="transitionItem">
            <animated.div style={{ overflow: 'hidden', height: innerHeight }}>
              {item}
            </animated.div>
          </animated.div>
        ))}
      </Content>
    </Container>
  )
}
