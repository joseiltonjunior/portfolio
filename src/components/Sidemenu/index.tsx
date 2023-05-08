import {
  Container,
  Background,
  ContetProfile,
  PicProfile,
  NameProfile,
  InfoProfile,
  Footer,
  Link,
} from './style'

import profile from '~/assets/profile.png'
import { FiGithub, FiLinkedin, FiInstagram, FiYoutube } from 'react-icons/fi'

import { useTranslation } from 'react-i18next'

export function Sidemenu() {
  const { t } = useTranslation()

  return (
    <Container>
      <Background />

      <ContetProfile>
        <PicProfile src={profile} alt="pic_profile" />
        <NameProfile>Junior Ferreira</NameProfile>
        <InfoProfile>{t('softwareDeveloper')}</InfoProfile>
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
        <Link
          href="https://www.youtube.com/channel/UCeJD8gJRoNW_2__3E_vizvQ"
          target="_blank"
          rel="noopener noreferrer"
          title="Canal Youtube"
        >
          <FiYoutube size={20} />
        </Link>
      </Footer>
    </Container>
  )
}
