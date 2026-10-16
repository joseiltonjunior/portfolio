import { describe, expect, it } from 'vitest'
import { contactLimits, createContactSchema } from './validation'

const schema = createContactSchema({
  required: 'required',
  nameMax: 'name too long',
  emailInvalid: 'invalid email',
  emailMax: 'email too long',
  messageMin: 'message too short',
  messageMax: 'message too long',
})

const valid = {
  name: 'Junior',
  email: 'junior@example.com',
  message: 'A project message',
}

describe('contact field validation', () => {
  it('rejects blank or whitespace-only required fields', async () => {
    await expect(schema.validate({ ...valid, name: '   ' })).rejects.toThrow(
      'required',
    )
    await expect(schema.validate({ ...valid, email: '   ' })).rejects.toThrow(
      'required',
    )
    await expect(schema.validate({ ...valid, message: '   ' })).rejects.toThrow(
      'required',
    )
  })

  it('rejects an invalid email address', async () => {
    await expect(
      schema.validate({ ...valid, email: 'not-an-email' }),
    ).rejects.toThrow('invalid email')
  })

  it('normalizes email case and surrounding whitespace', async () => {
    const result = await schema.validate({
      ...valid,
      email: '  JUNIOR@EXAMPLE.COM  ',
    })
    expect(result.email).toBe('junior@example.com')
  })

  it('enforces coherent field lengths', async () => {
    await expect(
      schema.validate({
        ...valid,
        name: 'x'.repeat(contactLimits.nameMax + 1),
      }),
    ).rejects.toThrow('name too long')
    await expect(
      schema.validate({ ...valid, message: 'short' }),
    ).rejects.toThrow('message too short')
    await expect(
      schema.validate({
        ...valid,
        message: 'x'.repeat(contactLimits.messageMax + 1),
      }),
    ).rejects.toThrow('message too long')
  })
})
