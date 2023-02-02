import { FaPlayCircle } from "react-icons/fa";

import { useModal } from "~/hooks/useModal";
import { CardProps } from "~/types/cardVideo";
import { Container, Header, Footer, Description, Title, Video } from "./style";

export function Card({ description, thumb, title, id, mobile }: CardProps) {
  const { openModal, closeModal } = useModal();

  const videoModal = (id: string, description: string, mobile?: boolean) =>
    openModal({
      message: description,
      confirm: closeModal,
      children: (
        <Video
          src={`https://www.youtube.com/embed/${id}?autoplay=1`}
          width={mobile ? 340 : 640}
          height={mobile ? 240 : 360}
          allow="autoplay; fullscreen"
          allowFullScreen
        />
      ),
    });

  return (
    <Container>
      <Header thumb={thumb} onClick={() => videoModal(id, description, mobile)}>
        <FaPlayCircle size={40} />
      </Header>
      <Footer>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Footer>
    </Container>
  );
}
