import { useTranslation } from 'react-i18next'
import { PortfolioCase } from '~/data/home'
import {
  CaseBody,
  CaseDescription,
  CaseExtra,
  CaseHeader,
  CaseKind,
  CaseLink,
  CaseLinks,
  CaseMeta,
  CaseTitle,
  CaseWrapper,
  Technology,
  TechnologyList,
} from './styles'

interface CaseCardProps {
  item: PortfolioCase
}

export function CaseCard({ item }: CaseCardProps) {
  const { t } = useTranslation()
  const featured = item.kind === 'ownProduct'
  const title = t(`cases.items.${item.id}.title`)

  return (
    <CaseWrapper $featured={featured} data-kind={item.kind}>
      <CaseHeader>
        <CaseKind $featured={featured}>
          {t(`cases.items.${item.id}.label`)}
        </CaseKind>
        <CaseMeta>{t(`cases.items.${item.id}.meta`)}</CaseMeta>
      </CaseHeader>
      <CaseBody>
        <CaseTitle $featured={featured}>{title}</CaseTitle>
        <CaseDescription>
          {t(`cases.items.${item.id}.description`)}
        </CaseDescription>
        {item.id === 'sonoriza' && (
          <CaseExtra>{t('cases.items.sonoriza.extra')}</CaseExtra>
        )}
        {item.links.length > 0 && (
          <CaseLinks>
            {item.links.map(({ id, href }) => {
              const label = t(`cases.items.${item.id}.links.${id}`)
              return (
                <CaseLink
                  key={id}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${title} — ${label}`}
                >
                  {label}
                </CaseLink>
              )
            })}
          </CaseLinks>
        )}
      </CaseBody>
      <TechnologyList aria-label={t('cases.technologies') ?? ''}>
        {item.technologies.map((technology) => (
          <Technology key={technology}>{technology}</Technology>
        ))}
      </TechnologyList>
    </CaseWrapper>
  )
}
