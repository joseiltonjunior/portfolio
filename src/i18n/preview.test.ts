import { describe, expect, it } from 'vitest'
import { resolvePreviewLocale } from './preview'

describe('preview locale selection', () => {
  it.each([
    ['pt', 'pt-BR'],
    ['pt-PT', 'pt-BR'],
    ['en', 'en-US'],
    ['en-GB', 'en-US'],
    ['EN_us', 'en-US'],
    ['fr-FR', 'pt-BR'],
    [undefined, 'pt-BR'],
  ] as const)('maps %s to %s', (preference, expected) => {
    expect(resolvePreviewLocale(preference)).toBe(expected)
  })
})
