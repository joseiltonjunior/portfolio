import styled from 'styled-components'

export const ProcessSection = styled.section`
  background: var(--v2-background);
`

export const ProcessList = styled.ol`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 230px), 1fr));
  gap: 32px;
  margin: 48px 0 0;
  padding: 0;
  list-style: none;
`

export const Step = styled.li.attrs({ 'data-reveal': true })`
  min-width: 0;
  padding-top: 20px;
  border-top: 2px solid var(--v2-accent);
`

export const StepNumber = styled.span`
  color: var(--v2-accent);
  font: 400 13px/1.5 var(--v2-font-mono);
`

export const StepTitle = styled.h3`
  margin: 8px 0;
  font: 600 22px/1.2 var(--v2-font-display);
  letter-spacing: -0.01em;
`

export const StepDescription = styled.p`
  margin: 0;
  color: var(--v2-muted);
  font-size: 16px;
`

export const ProcessNote = styled.p`
  margin: 40px 0 0;
  color: var(--v2-muted);
  font-size: 16px;
`
