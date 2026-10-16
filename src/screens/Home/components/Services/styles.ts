import styled from 'styled-components'

export const ServicesSection = styled.section`
  border-top: 1px solid var(--v2-border);
`

export const ServicesLayout = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 280px) minmax(0, 1fr);
  gap: 48px;

  @media (max-width: 800px) {
    grid-template-columns: minmax(0, 1fr);
  }
`

export const ServiceList = styled.ol`
  min-width: 0;
  margin: 0;
  padding: 0;
  list-style: none;
`

export const ServiceRow = styled.li.attrs({ 'data-reveal': true })`
  display: flex;
  gap: var(--v2-space-4);
  padding: 28px 0;
  border-top: 1px solid var(--v2-border);

  &:last-child {
    border-bottom: 1px solid var(--v2-border);
  }
`

export const ServiceNumber = styled.span`
  flex: 0 0 32px;
  color: var(--v2-accent);
  font: 400 14px/1.5 var(--v2-font-mono);
`

export const ServiceTitle = styled.h3`
  margin: 0 0 6px;
  font: 600 24px/1.2 var(--v2-font-display);
  letter-spacing: -0.01em;
`

export const ServiceDescription = styled.p`
  margin: 0;
  color: var(--v2-muted);
`
