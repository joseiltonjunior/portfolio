import styled from 'styled-components'

export const LaboratorySection = styled.section`
  border-top: 1px solid var(--v2-border);
`

export const LabGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 380px), 1fr));
  gap: var(--v2-space-4);
  margin-top: 48px;
`

export const LabCard = styled.article.attrs({ 'data-reveal': true })`
  display: flex;
  flex-direction: column;
  min-width: 0;
  padding: 28px;
  border: 1px solid var(--v2-border);
  border-radius: var(--v2-radius-card);
  background: var(--v2-white);

  @media (max-width: 375px) {
    padding: 24px;
  }
`

export const LabLabel = styled.p`
  margin: 0 0 10px;
  color: var(--v2-muted);
  font: 400 12px/1.5 var(--v2-font-mono);
  letter-spacing: 0.06em;
  text-transform: uppercase;
`

export const LabTitle = styled.h3`
  margin: 0 0 10px;
  font: 600 26px/1.2 var(--v2-font-display);
  letter-spacing: -0.01em;
`

export const LabDescription = styled.p`
  margin: 0 0 16px;
  color: #3d3950;
`

export const LabLink = styled.a`
  display: inline-flex;
  min-height: 44px;
  align-items: center;
  align-self: flex-start;
  margin-top: auto;
  color: var(--v2-accent);
  font-weight: 600;

  &:hover {
    text-decoration: underline;
  }
`
