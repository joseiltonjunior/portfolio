import { useTranslation } from 'react-i18next'
import { Text, Container } from './styles'

export function Abbout() {
  const { t } = useTranslation()

  return (
    <Container>
      <Text>{t('aboutTextPrimary')}</Text>
      <Text>{t('aboutTextSecondary')}</Text>
    </Container>
  )
}
