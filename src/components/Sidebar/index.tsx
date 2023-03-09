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
import { FiGithub, FiLinkedin, FiInstagram, FiDownload } from 'react-icons/fi'

import { useTranslation } from 'react-i18next'

export function Sidebar() {
  const { t } = useTranslation()

  return (
    <Container>
      <Background />

      <ContetProfile>
        <PicProfile
          src="https://avatars.githubusercontent.com/u/47725788?v=4"
          alt="pic_profile"
        />
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
          href="https://drive.google.com/file/d/1iHEb9ThuliqKPtPWKXdgSbnCgXZjdMcV/view?usp=share_link"
          target="_blank"
          rel="noopener noreferrer"
          title="Curriculum vitæ"
        >
          <FiDownload size={20} />
        </Link>
      </Footer>
    </Container>
  )
}
