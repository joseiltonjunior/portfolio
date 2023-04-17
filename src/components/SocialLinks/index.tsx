import { Container, Link, Button } from './style'
import { FiGithub, FiLinkedin, FiInstagram, FiYoutube } from 'react-icons/fi'
import { VscDebugRestart } from 'react-icons/vsc'

interface linksProps {
  action(): void
}

export function SocialLinks({ action }: linksProps) {
  return (
    <Container>
      <Link
        href="https://www.linkedin.com/in/joseilton-junior/"
        target="_blank"
        rel="noopener noreferrer"
        title="Linkedln"
      >
        <FiLinkedin size={25} />
      </Link>
      <Link
        href="https://github.com/joseiltonjunior"
        target="_blank"
        rel="noopener noreferrer"
        title="Github"
      >
        <FiGithub size={25} />
      </Link>
      <Link
        href="https://www.instagram.com/dvlp.jr/"
        target="_blank"
        rel="noopener noreferrer"
        title="Instagram"
      >
        <FiInstagram size={25} />
      </Link>
      <Link
        href="https://www.youtube.com/channel/UCeJD8gJRoNW_2__3E_vizvQ"
        target="_blank"
        rel="noopener noreferrer"
        title="Canal Youtube"
      >
        <FiYoutube size={25} />
      </Link>
      <Button
        onClick={() => {
          const elem = document.getElementById('parallax')
          action()
          elem?.scrollTo(0, 0)
        }}
        title="Restart"
      >
        <VscDebugRestart size={25} />
      </Button>
    </Container>
  )
}
