import { useCallback, useEffect, useState } from 'react'
import { CursorSpan, Container } from './styles'

interface TypingEffectProps {
  text: string
  isHideCursor?: boolean
  delay?: number
}

export function TypingEffect({ text, isHideCursor, delay }: TypingEffectProps) {
  const [currentText, setCurrentText] = useState('')
  const [isVisibleCursor, setIsVisibleCursor] = useState(false)

  const handleTypingEffect = useCallback((text: string, i = 0) => {
    if (i < text.length) {
      setIsVisibleCursor(true)

      setCurrentText(text.slice(0, i + 1))
      setTimeout(() => handleTypingEffect(text, i + 1), 200)
    } else if (i >= currentText.length && isHideCursor) {
      setIsVisibleCursor(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    setTimeout(() => handleTypingEffect(text), delay ?? 200)
  }, [delay, handleTypingEffect, text])

  return (
    <Container>
      {currentText} {isVisibleCursor && <CursorSpan>|</CursorSpan>}
    </Container>
  )
}
