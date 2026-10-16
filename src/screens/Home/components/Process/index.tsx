import { useTranslation } from 'react-i18next'
import { processSteps } from '~/data/home'
import { SectionContent, SectionEyebrow, SectionTitle } from '../../styles'
import {
  ProcessList,
  ProcessNote,
  ProcessSection,
  Step,
  StepDescription,
  StepNumber,
  StepTitle,
} from './styles'

export function Process() {
  const { t } = useTranslation()

  return (
    <ProcessSection id="processo" aria-labelledby="process-title">
      <SectionContent>
        <SectionEyebrow>
          <span>04</span> — {t('process.eyebrow')}
        </SectionEyebrow>
        <SectionTitle id="process-title">{t('process.title')}</SectionTitle>
        <ProcessList role="list">
          {processSteps.map(({ id, number }) => (
            <Step key={id}>
              <StepNumber aria-hidden="true">{number}</StepNumber>
              <StepTitle>{t(`process.items.${id}.title`)}</StepTitle>
              <StepDescription>
                {t(`process.items.${id}.description`)}
              </StepDescription>
            </Step>
          ))}
        </ProcessList>
        <ProcessNote>{t('process.note')}</ProcessNote>
      </SectionContent>
    </ProcessSection>
  )
}
