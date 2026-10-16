import { useTranslation } from 'react-i18next'
import { portfolioCases } from '~/data/home'
import { SectionContent, SectionEyebrow, SectionTitle } from '../../styles'
import { CaseIntroduction, CasesSection } from './styles'
import { CaseCard } from './CaseCard'

export function Cases() {
  const { t } = useTranslation()

  return (
    <CasesSection id="casos" aria-labelledby="cases-title">
      <SectionContent>
        <SectionEyebrow>
          <span>03</span> — {t('cases.eyebrow')}
        </SectionEyebrow>
        <SectionTitle id="cases-title">{t('cases.title')}</SectionTitle>
        <CaseIntroduction>{t('cases.introduction')}</CaseIntroduction>
        <div>
          {portfolioCases.map((item) => (
            <CaseCard key={item.id} item={item} />
          ))}
        </div>
      </SectionContent>
    </CasesSection>
  )
}
