import styled from 'styled-components'

export const HeaderShell = styled.header`
  position: sticky;
  top: 0;
  z-index: 20;
  background: rgba(250, 250, 251, 0.97);
  box-shadow: 0 1px 0 var(--v2-border);
  transition: transform 220ms ease-out;

  &[data-hidden='true'] {
    transform: translateY(calc(-100% - 2px));
    pointer-events: none;
  }

  &:has(:focus-visible) {
    transform: none;
    pointer-events: auto;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }

  @media print {
    position: static;
    transform: none !important;
  }
`

export const HeaderContainer = styled.div`
  width: min(100%, calc(var(--v2-content-width) + 2 * var(--v2-page-gutter)));
  margin-inline: auto;
  padding: 22px var(--v2-page-gutter);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: var(--v2-space-2) var(--v2-space-4);
`

export const Brand = styled.a`
  display: inline-flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 4px 10px;
  color: var(--v2-text);

  &:hover {
    opacity: 0.82;
  }
`

export const BrandName = styled.span`
  font: 700 20px/1.2 var(--v2-font-display);
  letter-spacing: -0.01em;
`

export const BrandTagline = styled.span`
  color: var(--v2-muted);
  font: 400 12px/1.4 var(--v2-font-mono);
`

export const Navigation = styled.nav`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 4px 26px;

  @media (max-width: 800px) {
    width: 100%;
  }
`

export const NavLink = styled.a`
  display: inline-flex;
  min-height: 44px;
  align-items: center;
  padding: 10px 0;
  color: var(--v2-text);
  font: 400 15px/1.3 var(--v2-font-body);

  &:hover {
    color: var(--v2-accent);
  }
`

export const ContactLink = styled.a`
  display: inline-flex;
  min-height: 44px;
  align-items: center;
  justify-content: center;
  padding: 10px 18px;
  border-radius: var(--v2-radius-button);
  background: var(--v2-text);
  color: var(--v2-white);
  font: 600 15px/1.3 var(--v2-font-body);
  transition: opacity 160ms ease;

  &:hover {
    opacity: 0.82;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`
