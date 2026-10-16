import { useTranslation } from 'react-i18next'
import { heroLayers } from '~/data/home'
import {
  Accent,
  Actions,
  Card,
  CardDescription,
  CardHeading,
  CardNumber,
  CardStack,
  Eyebrow,
  EyebrowDot,
  HeroContainer,
  Introduction,
  LayersGrid,
  LayersHeading,
  PrimaryLink,
  SecondaryLink,
  Title,
} from './styles'

export function Hero() {
  const { t } = useTranslation()

  return (
    <HeroContainer id="topo" aria-labelledby="hero-title">
      <Eyebrow>
        <EyebrowDot aria-hidden="true" />
        {t('hero.eyebrow')}
      </Eyebrow>
      <Title id="hero-title">
        {t('hero.title')} <Accent>{t('hero.titleAccent')}</Accent>
      </Title>
      <Introduction>{t('hero.introduction')}</Introduction>
      <Actions>
        <PrimaryLink href="#contato">{t('hero.contact')}</PrimaryLink>
        <SecondaryLink href="#casos">{t('hero.viewCases')}</SecondaryLink>
      </Actions>

      <LayersHeading>{t('hero.layersHeading')}</LayersHeading>
      <LayersGrid>
        {heroLayers.map(({ id, number }) => (
          <Card key={id}>
            <CardNumber>{number}</CardNumber>
            <CardHeading>{t(`hero.layers.${id}.title`)}</CardHeading>
            <CardDescription>
              {t(`hero.layers.${id}.description`)}
            </CardDescription>
            <CardStack>{t(`hero.layers.${id}.stack`)}</CardStack>
          </Card>
        ))}
      </LayersGrid>
    </HeroContainer>
  )
}
