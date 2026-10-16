import { useTranslation } from 'react-i18next'
import { contactDestinations } from '~/data/home'
import { FooterContainer, FooterInner, FooterLinks } from './styles'

export function Footer() {
  const { t } = useTranslation()

  return (
    <FooterContainer>
      <FooterInner>
        <p>{t('footer.copyright')}</p>
        <FooterLinks aria-label={t('footer.socialLinks') ?? ''}>
          <a
            href={contactDestinations.linkedInHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href={contactDestinations.githubHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href={contactDestinations.youtubeHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            YouTube
          </a>
        </FooterLinks>
      </FooterInner>
    </FooterContainer>
  )
}
