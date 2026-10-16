import styled, { createGlobalStyle } from 'styled-components'

export const PreviewGlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;600;700&family=IBM+Plex+Mono:wght@400;500&family=Instrument+Sans:wght@400;500;600&display=swap');

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    overflow: auto;
    background: #FAFAFB;
  }

  @media (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
    }
  }
`

export const PreviewPage = styled.div.attrs({ className: 'portfolio-v2' })`
  --v2-background: #fafafb;
  --v2-text: #16131f;
  --v2-muted: #5b576b;
  --v2-surface: #f3f1f8;
  --v2-white: #ffffff;
  --v2-border: #e4e2ea;
  --v2-accent: #8128e7;
  --v2-content-width: 1120px;
  --v2-page-gutter: 24px;
  --v2-space-1: 8px;
  --v2-space-2: 12px;
  --v2-space-3: 16px;
  --v2-space-4: 24px;
  --v2-space-5: 36px;
  --v2-radius-button: 8px;
  --v2-radius-card: 12px;
  --v2-font-display: 'Bricolage Grotesque', sans-serif;
  --v2-font-body: 'Instrument Sans', system-ui, sans-serif;
  --v2-font-mono: 'IBM Plex Mono', monospace;

  min-height: 100vh;
  background: var(--v2-background);
  color: var(--v2-text);
  font: 400 17px/1.6 var(--v2-font-body);
  -webkit-font-smoothing: antialiased;

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }

  a:focus-visible {
    outline: 2px solid var(--v2-accent);
    outline-offset: 3px;
  }

  section[id] {
    scroll-margin-top: calc(var(--v2-header-height, 88px) + 16px);
  }

  [data-reveal-state] {
    transition: opacity 450ms ease-out, transform 450ms ease-out;
  }

  [data-reveal-state='pending'] {
    opacity: 0;
    transform: translateY(16px);
  }

  [data-reveal-state]:focus-within {
    opacity: 1;
    transform: none;
    transition: none;
  }

  @media (prefers-reduced-motion: reduce), print {
    [data-reveal-state] {
      opacity: 1;
      transform: none;
      transition: none;
    }
  }

  @media (max-width: 375px) {
    --v2-page-gutter: 20px;
  }
`

export const SectionContent = styled.div`
  width: min(100%, calc(var(--v2-content-width) + 2 * var(--v2-page-gutter)));
  margin-inline: auto;
  padding: 88px var(--v2-page-gutter);

  @media (max-width: 600px) {
    padding-block: 64px;
  }
`

export const SectionEyebrow = styled.p`
  margin: 0 0 var(--v2-space-3);
  color: var(--v2-muted);
  font: 400 13px/1.5 var(--v2-font-mono);
  letter-spacing: 0.06em;
  text-transform: uppercase;

  span {
    color: var(--v2-accent);
  }
`

export const SectionTitle = styled.h2.attrs({ 'data-reveal': true })`
  max-width: 760px;
  margin: 0;
  color: var(--v2-text);
  font: 600 clamp(30px, 3.8vw, 46px) / 1.08 var(--v2-font-display);
  letter-spacing: -0.02em;
`
