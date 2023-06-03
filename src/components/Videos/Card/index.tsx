import { CardProps } from '~/types/cardVideo'
import { Container, Thumb, Info, Play, Img } from './style'

import { AiFillPlayCircle } from 'react-icons/ai'
import { useModal } from '~/hooks/useModal'

export function Card({
  description,
  thumb,
  title,
  id,
  mobile,
  ...rest
}: CardProps) {
  const { openModal } = useModal()

  return (
    <Container
      {...rest}
      onClick={() =>
        openModal({
          message: description,
          children: (
            <Play>
              <iframe
                src={`https://www.youtube.com/embed/${id}`}
                width={'100%'}
                height={'100%'}
                allow="autoplay; fullscreen"
                allowFullScreen
              />
            </Play>
          ),
        })
      }
    >
      <Thumb>
        <>
          <div className="iconPlay" title={`Open video ${title}`}>
            <AiFillPlayCircle size={60} />
          </div>
          <Img src={thumb} />
        </>
      </Thumb>

      <Info>
        <strong>{title}</strong>
        <span>{description}</span>
      </Info>
    </Container>
  )
}
