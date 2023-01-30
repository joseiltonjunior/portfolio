import { FaPlayCircle } from "react-icons/fa";
import ReactPlayer from "react-player";
import { useModal } from "~/hooks/useModal";
import { Container, Header, Footer, Description, Title } from "./style";

interface CardProps {
  thumb: string;
  url: string;
  description: string;
  title: string;
  mobile?: boolean;
}

export function Card({ description, thumb, title, url, mobile }: CardProps) {
  const { openModal, closeModal } = useModal();

  const videoModal = (url: string, description: string, mobile?: boolean) =>
    openModal({
      message: description,
      confirm: closeModal,
      children: (
        <ReactPlayer
          url={url}
          controls
          width={mobile ? 340 : 640}
          height={mobile ? 240 : 360}
          light={false}
          playing
        />
      ),
    });

  return (
    <Container>
      <Header thumb={thumb} onClick={() => videoModal(url, description, mobile)}>
        <FaPlayCircle size={40} />
      </Header>
      <Footer>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Footer>
    </Container>
  );
}
