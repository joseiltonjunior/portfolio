import { useTranslation } from 'react-i18next'
import { laboratoryItems } from '~/data/home'
import { SectionContent, SectionEyebrow, SectionTitle } from '../../styles'
import {
  LabCard,
  LabDescription,
  LabGrid,
  LabLabel,
  LabLink,
  LabTitle,
  LaboratorySection,
} from './styles'

export function Laboratory() {
  const { t } = useTranslation()

  return (
    <LaboratorySection id="laboratorio" aria-labelledby="laboratory-title">
      <SectionContent>
        <SectionEyebrow>
          <span>05</span> — {t('laboratory.eyebrow')}
        </SectionEyebrow>
        <SectionTitle id="laboratory-title">
          {t('laboratory.title')}
        </SectionTitle>
        <LabGrid>
          {laboratoryItems.map(({ id, href }) => (
            <LabCard key={id}>
              <LabLabel>{t(`laboratory.items.${id}.label`)}</LabLabel>
              <LabTitle>{t(`laboratory.items.${id}.title`)}</LabTitle>
              <LabDescription>
                {t(`laboratory.items.${id}.description`)}
              </LabDescription>
              <LabLink href={href} target="_blank" rel="noopener noreferrer">
                {t(`laboratory.items.${id}.link`)}
              </LabLink>
            </LabCard>
          ))}
        </LabGrid>
      </SectionContent>
    </LaboratorySection>
  )
}
