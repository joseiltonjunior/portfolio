import { useTranslation } from 'react-i18next'
import {
  Brand,
  BrandName,
  BrandTagline,
  ContactLink,
  HeaderContainer,
  HeaderShell,
  Navigation,
  NavLink,
} from './styles'
import { useScrollHeader } from './useScrollHeader'

export function Header() {
  const { t } = useTranslation()
  const { ref, visible } = useScrollHeader()

  return (
    <HeaderShell ref={ref} data-hidden={!visible}>
      <HeaderContainer>
        <Brand href="#topo">
          <BrandName>Junior Ferreira</BrandName>
          <BrandTagline>{t('header.profession')}</BrandTagline>
        </Brand>
        <Navigation aria-label={t('header.navigation') ?? ''}>
          <NavLink href="#servicos">{t('header.services')}</NavLink>
          <NavLink href="#casos">{t('header.cases')}</NavLink>
          <NavLink href="#processo">{t('header.process')}</NavLink>
          <NavLink href="#experiencia">{t('header.experience')}</NavLink>
          <ContactLink href="#contato">{t('header.contact')}</ContactLink>
        </Navigation>
      </HeaderContainer>
    </HeaderShell>
  )
}
