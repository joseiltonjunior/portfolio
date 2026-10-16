import { useTranslation } from 'react-i18next'
import { services } from '~/data/home'
import { SectionContent, SectionEyebrow, SectionTitle } from '../../styles'
import {
  ServiceDescription,
  ServiceList,
  ServiceNumber,
  ServiceRow,
  ServiceTitle,
  ServicesLayout,
  ServicesSection,
} from './styles'

export function Services() {
  const { t } = useTranslation()

  return (
    <ServicesSection id="servicos" aria-labelledby="services-title">
      <SectionContent>
        <ServicesLayout>
          <div>
            <SectionEyebrow>
              <span>02</span> — {t('services.eyebrow')}
            </SectionEyebrow>
            <SectionTitle id="services-title">
              {t('services.title')}
            </SectionTitle>
          </div>
          <ServiceList role="list">
            {services.map(({ id, number }) => (
              <ServiceRow key={id}>
                <ServiceNumber aria-hidden="true">{number}</ServiceNumber>
                <div>
                  <ServiceTitle>{t(`services.items.${id}.title`)}</ServiceTitle>
                  <ServiceDescription>
                    {t(`services.items.${id}.description`)}
                  </ServiceDescription>
                </div>
              </ServiceRow>
            ))}
          </ServiceList>
        </ServicesLayout>
      </SectionContent>
    </ServicesSection>
  )
}
