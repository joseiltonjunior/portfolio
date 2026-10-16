import { useTranslation } from 'react-i18next'
import { contactDestinations } from '~/data/home'
import { ContactForm } from './ContactForm'
import {
  ContactDetails,
  ContactIntroduction,
  ContactLabel,
  ContactLayout,
  ContactLink,
  ContactSection,
  ContactTitle,
  ContactWrapper,
  DarkEyebrow,
} from './styles'

export function Contact() {
  const { t } = useTranslation()

  return (
    <ContactSection id="contato" aria-labelledby="contact-title">
      <ContactWrapper>
        <ContactLayout>
          <ContactDetails>
            <DarkEyebrow>
              <span>07</span> — {t('contact.eyebrow')}
            </DarkEyebrow>
            <ContactTitle id="contact-title">{t('contact.title')}</ContactTitle>
            <ContactIntroduction>
              {t('contact.introduction')}
            </ContactIntroduction>
            <ContactLabel>{t('contact.whatsapp')}</ContactLabel>
            <ContactLink
              href={contactDestinations.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('contact.whatsappNumber')}
            </ContactLink>
            <ContactLabel>{t('contact.email')}</ContactLabel>
            <ContactLink href={contactDestinations.emailHref}>
              {contactDestinations.emailAddress}
            </ContactLink>
          </ContactDetails>
          <ContactForm />
        </ContactLayout>
      </ContactWrapper>
    </ContactSection>
  )
}
