import styled from 'styled-components'

export const FooterContainer = styled.footer`
  background: var(--v2-text);
  color: #b9b4c9;

  a:focus-visible {
    outline-color: #c4a1f5;
  }
`

export const FooterInner = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 12px 24px;
  width: min(100%, calc(var(--v2-content-width) + 2 * var(--v2-page-gutter)));
  margin-inline: auto;
  padding: 24px var(--v2-page-gutter) 40px;
  border-top: 1px solid #3a3548;
  font-size: 14px;

  p {
    margin: 0;
  }
`

export const FooterLinks = styled.nav`
  display: flex;
  flex-wrap: wrap;
  gap: 8px 24px;

  a {
    display: inline-flex;
    min-height: 44px;
    align-items: center;
    color: var(--v2-white);
  }

  a:hover {
    color: #c4a1f5;
  }
`
