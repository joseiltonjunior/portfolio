import { useMemo } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { ContactFields, contactLimits, createContactSchema } from './validation'
import {
  DisabledSubmit,
  ErrorMessage,
  Field,
  FormCard,
  FormNotice,
  Input,
  Label,
  MessageInput,
} from './styles'

export function ContactForm() {
  const { t } = useTranslation()
  const schema = useMemo(
    () =>
      createContactSchema({
        required: t('contact.form.errors.required'),
        nameMax: t('contact.form.errors.nameMax'),
        emailInvalid: t('contact.form.errors.emailInvalid'),
        emailMax: t('contact.form.errors.emailMax'),
        messageMin: t('contact.form.errors.messageMin'),
        messageMax: t('contact.form.errors.messageMax'),
      }),
    [t],
  )
  const {
    register,
    setValue,
    formState: { errors },
  } = useForm<ContactFields>({
    resolver: yupResolver(schema),
    mode: 'onBlur',
    reValidateMode: 'onChange',
  })
  const emailRegistration = register('email')

  return (
    <FormCard onSubmit={(event) => event.preventDefault()} noValidate>
      <FormNotice id="contact-form-unavailable" role="status">
        {t('contact.form.unavailable')}
      </FormNotice>
      <Field>
        <Label htmlFor="contact-name">{t('contact.form.name')}</Label>
        <Input
          id="contact-name"
          type="text"
          autoComplete="name"
          required
          maxLength={contactLimits.nameMax}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? 'contact-name-error' : undefined}
          $invalid={Boolean(errors.name)}
          {...register('name')}
        />
        {errors.name && (
          <ErrorMessage id="contact-name-error" role="alert">
            {errors.name.message}
          </ErrorMessage>
        )}
      </Field>
      <Field>
        <Label htmlFor="contact-email">{t('contact.form.email')}</Label>
        <Input
          id="contact-email"
          type="email"
          autoComplete="email"
          required
          maxLength={contactLimits.emailMax}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? 'contact-email-error' : undefined}
          $invalid={Boolean(errors.email)}
          {...emailRegistration}
          onBlur={(event) => {
            setValue('email', event.target.value.trim().toLowerCase(), {
              shouldValidate: true,
            })
            void emailRegistration.onBlur(event)
          }}
        />
        {errors.email && (
          <ErrorMessage id="contact-email-error" role="alert">
            {errors.email.message}
          </ErrorMessage>
        )}
      </Field>
      <Field>
        <Label htmlFor="contact-message">{t('contact.form.message')}</Label>
        <MessageInput
          id="contact-message"
          rows={4}
          required
          maxLength={contactLimits.messageMax}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={
            errors.message ? 'contact-message-error' : undefined
          }
          $invalid={Boolean(errors.message)}
          {...register('message')}
        />
        {errors.message && (
          <ErrorMessage id="contact-message-error" role="alert">
            {errors.message.message}
          </ErrorMessage>
        )}
      </Field>
      <DisabledSubmit
        type="submit"
        disabled
        aria-describedby="contact-form-unavailable"
      >
        {t('contact.form.submit')}
      </DisabledSubmit>
    </FormCard>
  )
}
