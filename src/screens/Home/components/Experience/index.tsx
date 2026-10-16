import { useTranslation } from 'react-i18next'
import { contactDestinations, experienceEntries } from '~/data/home'
import { SectionContent, SectionEyebrow, SectionTitle } from '../../styles'
import {
  ExperienceLayout,
  ExperienceLink,
  ExperienceList,
  ExperiencePeriod,
  ExperienceRole,
  ExperienceRow,
  ExperienceSection,
  ExperienceTitle,
} from './styles'

export function Experience() {
  const { t } = useTranslation()

  return (
    <ExperienceSection id="experiencia" aria-labelledby="experience-title">
      <SectionContent>
        <ExperienceLayout>
          <div>
            <SectionEyebrow>
              <span>06</span> — {t('experience.eyebrow')}
            </SectionEyebrow>
            <SectionTitle id="experience-title">
              {t('experience.title')}
            </SectionTitle>
            <ExperienceLink
              href={contactDestinations.linkedInHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('experience.link')}
            </ExperienceLink>
          </div>
          <ExperienceList role="list">
            {experienceEntries.map(({ id }) => (
              <ExperienceRow key={id}>
                <div>
                  <ExperienceTitle>
                    {t(`experience.items.${id}.organization`)}
                  </ExperienceTitle>
                  <ExperienceRole>
                    {t(`experience.items.${id}.role`)}
                  </ExperienceRole>
                </div>
                <ExperiencePeriod>
                  {t(`experience.items.${id}.period`)}
                </ExperiencePeriod>
              </ExperienceRow>
            ))}
          </ExperienceList>
        </ExperienceLayout>
      </SectionContent>
    </ExperienceSection>
  )
}
