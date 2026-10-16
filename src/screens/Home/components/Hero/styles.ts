import styled from 'styled-components'

export const HeroContainer = styled.section`
  width: min(100%, calc(var(--v2-content-width) + 2 * var(--v2-page-gutter)));
  margin-inline: auto;
  padding: 72px var(--v2-page-gutter) 88px;

  @media (max-width: 600px) {
    padding-top: 52px;
    padding-bottom: 64px;
  }
`

export const Eyebrow = styled.p`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0 0 var(--v2-space-4);
  color: var(--v2-muted);
  font: 400 13px/1.5 var(--v2-font-mono);
  letter-spacing: 0.06em;
  text-transform: uppercase;
`

export const EyebrowDot = styled.span`
  flex: 0 0 8px;
  width: 8px;
  height: 8px;
  background: var(--v2-accent);
`

export const Title = styled.h1`
  max-width: 940px;
  margin: 0;
  font: 600 clamp(40px, 6.4vw, 80px) / 1.02 var(--v2-font-display);
  letter-spacing: -0.025em;
  overflow-wrap: break-word;
`

export const Accent = styled.span`
  color: var(--v2-accent);
`

export const Introduction = styled.p`
  max-width: 640px;
  margin: 28px 0 0;
  color: var(--v2-muted);
  font-size: 20px;
  line-height: 1.55;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`

export const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--v2-space-2);
  margin-top: var(--v2-space-5);
`

export const PrimaryLink = styled.a`
  display: inline-flex;
  min-height: 52px;
  align-items: center;
  justify-content: center;
  padding: 15px 24px;
  border-radius: var(--v2-radius-button);
  background: var(--v2-accent);
  color: var(--v2-white);
  font-weight: 600;
  line-height: 1.3;
  transition: opacity 160ms ease;

  &:hover {
    opacity: 0.82;
  }

  @media (max-width: 375px) {
    width: 100%;
    text-align: center;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`

export const SecondaryLink = styled.a`
  display: inline-flex;
  min-height: 52px;
  align-items: center;
  justify-content: center;
  padding: 14px 24px;
  border: 1px solid #cfcbdb;
  border-radius: var(--v2-radius-button);
  color: var(--v2-text);
  font-weight: 600;
  line-height: 1.3;

  &:hover {
    border-color: var(--v2-accent);
    color: var(--v2-accent);
  }

  @media (max-width: 375px) {
    width: 100%;
    text-align: center;
  }
`

export const LayersHeading = styled.h2`
  margin: 80px 0 var(--v2-space-3);
  color: var(--v2-muted);
  font: 400 13px/1.5 var(--v2-font-mono);
  letter-spacing: 0.06em;
  text-transform: uppercase;

  @media (max-width: 600px) {
    margin-top: 64px;
  }
`

export const LayersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 220px), 1fr));
  gap: var(--v2-space-3);
`

export const Card = styled.article.attrs({ 'data-reveal': true })`
  display: flex;
  flex-direction: column;
  min-width: 0;
  padding: 22px;
  border: 1px solid var(--v2-border);
  border-radius: var(--v2-radius-card);
  background: var(--v2-white);
`

export const CardNumber = styled.p`
  margin: 0;
  color: var(--v2-accent);
  font: 400 13px/1.4 var(--v2-font-mono);
`

export const CardHeading = styled.h3`
  margin: 10px 0 4px;
  font: 600 22px/1.25 var(--v2-font-display);
  letter-spacing: -0.01em;
`

export const CardDescription = styled.p`
  margin: 0 0 14px;
  color: var(--v2-muted);
  font-size: 15px;
`

export const CardStack = styled.p`
  margin: auto 0 0;
  color: #3d3950;
  font: 400 12px/1.5 var(--v2-font-mono);
`
