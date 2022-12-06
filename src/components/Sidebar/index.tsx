import {
  Container,
  Background,
  ContetProfile,
  PicProfile,
  NameProfile,
  InfoProfile,
  Footer,
  Link,
} from "./styles";
import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";

export function Sidebar() {
  return (
    <Container>
      <Background
        src="https://images.unsplash.com/photo-1533709752211-118fcaf03312?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
        alt="background_sidebar"
      />

      <ContetProfile>
        <PicProfile
          src="https://avatars.githubusercontent.com/u/47725788?v=4"
          alt="pic_profile"
        />
        <NameProfile>Junior Ferreira</NameProfile>
        <InfoProfile>Front-end Developer</InfoProfile>
      </ContetProfile>

      <Footer>
        <Link
          href="https://www.linkedin.com/in/joseilton-junior/"
          target="_blank"
          rel="noopener noreferrer"
          title="Linkedln"
        >
          <FiLinkedin size={20} />
        </Link>
        <Link
          href="https://github.com/joseiltonjunior"
          target="_blank"
          rel="noopener noreferrer"
          title="Github"
        >
          <FiGithub size={20} />
        </Link>
        <Link
          href="https://www.instagram.com/dvlp.jr/"
          target="_blank"
          rel="noopener noreferrer"
          title="Instagram"
        >
          <FiInstagram size={20} />
        </Link>
      </Footer>
    </Container>
  );
}
