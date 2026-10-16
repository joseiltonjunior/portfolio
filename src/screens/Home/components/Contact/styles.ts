import styled, { css } from 'styled-components'

export const ContactSection = styled.section`
  background: var(--v2-text);
  color: var(--v2-white);

  a:focus-visible {
    outline-color: #c4a1f5;
  }
`

export const ContactWrapper = styled.div`
  width: min(100%, calc(var(--v2-content-width) + 2 * var(--v2-page-gutter)));
  margin-inline: auto;
  padding: 88px var(--v2-page-gutter) 56px;

  @media (max-width: 600px) {
    padding-top: 64px;
  }
`

export const ContactLayout = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1.1fr);
  gap: 48px;

  @media (max-width: 800px) {
    grid-template-columns: minmax(0, 1fr);
  }
`

export const ContactDetails = styled.div.attrs({ 'data-reveal': true })`
  min-width: 0;
`

export const DarkEyebrow = styled.p`
  margin: 0 0 var(--v2-space-3);
  color: #b9b4c9;
  font: 400 13px/1.5 var(--v2-font-mono);
  letter-spacing: 0.06em;
  text-transform: uppercase;

  span {
    color: #c4a1f5;
  }
`

export const ContactTitle = styled.h2`
  margin: 0 0 20px;
  font: 600 clamp(30px, 3.8vw, 46px) / 1.08 var(--v2-font-display);
  letter-spacing: -0.02em;
`

export const ContactIntroduction = styled.p`
  max-width: 460px;
  margin: 0 0 32px;
  color: #b9b4c9;
`

export const ContactLabel = styled.p`
  margin: 20px 0 6px;
  color: #b9b4c9;
  font: 400 12px/1.5 var(--v2-font-mono);
  letter-spacing: 0.06em;
  text-transform: uppercase;
`

export const ContactLink = styled.a`
  display: inline-block;
  min-height: 44px;
  color: var(--v2-white);
  font-size: 20px;
  font-weight: 600;
  overflow-wrap: anywhere;
  text-decoration: underline;
  text-underline-offset: 4px;

  &:hover {
    color: #c4a1f5;
  }
`

export const FormCard = styled.form.attrs({ 'data-reveal': true })`
  min-width: 0;
  padding: 32px;
  border-radius: 16px;
  background: var(--v2-white);
  color: var(--v2-text);

  @media (max-width: 375px) {
    padding: 24px;
  }
`

export const FormNotice = styled.p`
  margin: 0 0 22px;
  padding: 12px 14px;
  border-left: 3px solid var(--v2-accent);
  background: var(--v2-surface);
  color: #3d3950;
  font-size: 14px;
`

export const Field = styled.div`
  margin-bottom: 18px;
`

export const Label = styled.label`
  display: block;
  margin-bottom: 6px;
  font-size: 14px;
  font-weight: 600;
`

const fieldStyles = css`
  width: 100%;
  padding: 13px 14px;
  border: 1px solid #cfcbdb;
  border-radius: 8px;
  background: var(--v2-white);
  color: var(--v2-text);
  font: 400 16px/1.4 var(--v2-font-body);

  &:focus-visible {
    outline: 2px solid var(--v2-accent);
    outline-offset: 2px;
  }
`

export const Input = styled.input<{ $invalid: boolean }>`
  ${fieldStyles}
  border-color: ${({ $invalid }) => ($invalid ? '#A7223A' : '#CFCBDB')};
`

export const MessageInput = styled.textarea<{ $invalid: boolean }>`
  ${fieldStyles}
  min-height: 120px;
  resize: vertical;
  border-color: ${({ $invalid }) => ($invalid ? '#A7223A' : '#CFCBDB')};
`

export const ErrorMessage = styled.p`
  margin: 6px 0 0;
  color: #a7223a;
  font-size: 13px;
`

export const DisabledSubmit = styled.button`
  width: 100%;
  min-height: 52px;
  padding: 15px 24px;
  border: 0;
  border-radius: var(--v2-radius-button);
  background: var(--v2-accent);
  color: var(--v2-white);
  font: 600 16px/1.3 var(--v2-font-body);

  &:disabled {
    opacity: 0.55;
    cursor: not-allowed;
  }
`
