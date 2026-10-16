import styled from 'styled-components'

export const ExperienceSection = styled.section`
  border-top: 1px solid var(--v2-border);
`

export const ExperienceLayout = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 280px) minmax(0, 1fr);
  gap: 48px;

  @media (max-width: 800px) {
    grid-template-columns: minmax(0, 1fr);
  }
`

export const ExperienceLink = styled.a`
  display: inline-flex;
  min-height: 44px;
  align-items: center;
  margin-top: 20px;
  color: var(--v2-accent);
  font-weight: 600;

  &:hover {
    text-decoration: underline;
  }
`

export const ExperienceList = styled.ol`
  min-width: 0;
  margin: 0;
  padding: 0;
  list-style: none;
`

export const ExperienceRow = styled.li.attrs({ 'data-reveal': true })`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 4px 24px;
  padding: 22px 0;
  border-top: 1px solid var(--v2-border);

  &:last-child {
    border-bottom: 1px solid var(--v2-border);
  }
`

export const ExperienceTitle = styled.h3`
  margin: 0;
  font: 600 22px/1.25 var(--v2-font-display);
`

export const ExperienceRole = styled.p`
  margin: 0;
  color: var(--v2-muted);
  font-size: 15px;
`

export const ExperiencePeriod = styled.p`
  margin: 0;
  color: var(--v2-muted);
  font: 400 13px/1.5 var(--v2-font-mono);
  white-space: nowrap;
`
