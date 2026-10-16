import styled from 'styled-components'

export const CasesSection = styled.section`
  border-top: 1px solid var(--v2-border);
  background: var(--v2-surface);
`

export const CaseIntroduction = styled.p`
  max-width: 640px;
  margin: 20px 0 48px;
  color: var(--v2-muted);
`

export const CaseWrapper = styled.article.attrs({ 'data-reveal': true })<{
  $featured: boolean
}>`
  display: grid;
  grid-template-columns: minmax(0, 170px) minmax(0, 1fr) minmax(0, 220px);
  gap: 28px 40px;
  min-width: 0;
  padding: ${({ $featured }) => ($featured ? '36px' : '36px 0')};
  border: ${({ $featured }) =>
    $featured ? '1px solid var(--v2-border)' : '0'};
  border-bottom: 1px solid
    ${({ $featured }) => ($featured ? 'var(--v2-border)' : '#D5D1E0')};
  border-radius: ${({ $featured }) => ($featured ? '16px' : '0')};
  background: ${({ $featured }) =>
    $featured ? 'var(--v2-white)' : 'transparent'};

  &:last-child {
    padding-bottom: 0;
    border-bottom: 0;
  }

  @media (max-width: 900px) {
    grid-template-columns: minmax(0, 170px) minmax(0, 1fr);

    > ul {
      grid-column: 2;
    }
  }

  @media (max-width: 600px) {
    grid-template-columns: minmax(0, 1fr);
    gap: 20px;
    padding: ${({ $featured }) => ($featured ? '24px' : '32px 0')};

    > ul {
      grid-column: auto;
    }
  }
`

export const CaseHeader = styled.div`
  min-width: 0;
`

export const CaseKind = styled.p<{ $featured: boolean }>`
  margin: 0 0 6px;
  color: ${({ $featured }) =>
    $featured ? 'var(--v2-accent)' : 'var(--v2-muted)'};
  font: 400 12px/1.5 var(--v2-font-mono);
  letter-spacing: 0.06em;
  text-transform: uppercase;
`

export const CaseMeta = styled.p`
  margin: 0;
  color: var(--v2-muted);
  font: 400 13px/1.5 var(--v2-font-mono);
`

export const CaseBody = styled.div`
  min-width: 0;
`

export const CaseTitle = styled.h3<{ $featured: boolean }>`
  margin: 0 0 ${({ $featured }) => ($featured ? '12px' : '10px')};
  font: 600 ${({ $featured }) => ($featured ? '32px/1.1' : '26px/1.15')}
    var(--v2-font-display);
  letter-spacing: -0.015em;
  overflow-wrap: break-word;
`

export const CaseDescription = styled.p`
  margin: 0;
  color: #3d3950;
  overflow-wrap: break-word;
`

export const CaseExtra = styled.p`
  margin: 14px 0 0;
  color: var(--v2-muted);
`

export const CaseLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px 24px;
  margin-top: 18px;
`

export const CaseLink = styled.a`
  display: inline-flex;
  min-height: 44px;
  align-items: center;
  color: var(--v2-accent);
  font-weight: 600;

  &:hover {
    text-decoration: underline;
  }
`

export const TechnologyList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  gap: 8px;
  min-width: 0;
  margin: 0;
  padding: 0;
  list-style: none;
`

export const Technology = styled.li`
  max-width: 100%;
  padding: 4px 10px;
  border: 1px solid #d5d1e0;
  border-radius: 999px;
  background: var(--v2-white);
  color: #3d3950;
  font: 400 12px/1.5 var(--v2-font-mono);
  overflow-wrap: anywhere;
`
