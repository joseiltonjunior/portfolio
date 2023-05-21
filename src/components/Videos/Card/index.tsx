import { CardProps } from '~/types/cardVideo'
import { Container, Header, Footer, Play, PlayMobile, Img } from './style'
import { useState } from 'react'
import { AiFillPlayCircle } from 'react-icons/ai'

export function Card({
  description,
  thumb,
  title,
  id,
  mobile,
  ...rest
}: CardProps) {
  const [isVisibleVideo, setIsVisibleVideo] = useState(false)

  return (
    <Container {...rest} onMouseLeave={() => setIsVisibleVideo(false)}>
      <Header thumb={thumb}>
        {isVisibleVideo ? (
          <>
            <PlayMobile
              src={`https://www.youtube.com/embed/${id}`}
              width={340}
              height={186}
              allow="autoplay; fullscreen"
              allowFullScreen
            />
            <Play
              src={`https://www.youtube.com/embed/${id}`}
              width={734}
              height={400}
              allow="autoplay; fullscreen"
              allowFullScreen
            />
          </>
        ) : (
          <>
            <div
              onClick={() => setIsVisibleVideo(true)}
              className="iconPlay"
              title={`Open video ${title}`}
            >
              <AiFillPlayCircle size={60} />
            </div>
            <Img src={thumb} />
          </>
        )}
      </Header>

      <Footer>
        <strong>{title}</strong>
        <span>{description}</span>
      </Footer>
    </Container>
  )
}
