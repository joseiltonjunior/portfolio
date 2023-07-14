import { useCallback, useState } from 'react'
import { collection, addDoc } from 'firebase/firestore'
import { firestore } from '~/services/firebase'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import { FaUser, FaEnvelope, FaAt } from 'react-icons/fa'

import { Container, UserInfo, MessageInfo } from './styles'
import { useToast } from '~/hooks/useToast'
import { InputCustom } from '../InputCustom'
import { Button } from '../Button'
import { TextAreaCustom } from '../TextAreaCustom'
import { SendEmailProps } from '~/types/sendEmail'

const isRequerid = 'Campo obrigatório'

const schema = yup.object().shape({
  name: yup.string().required(isRequerid),
  email: yup.string().email('E-mail inválido!').required(isRequerid),
  message: yup.string().required(isRequerid),
})

export function Email() {
  const [isLoading, setIsLoading] = useState(false)

  const { showToast } = useToast()

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<SendEmailProps>({
    resolver: yupResolver(schema),
  })

  const handleSendEmail = useCallback(
    async (form: SendEmailProps) => {
      setIsLoading(true)

      await addDoc(collection(firestore, 'messages'), {
        form,
      })
        .then(() => {
          showToast('E-mail enviado com sucesso', {
            type: 'success',
            theme: 'colored',
          })
          setValue('email', '')
          setValue('name', '')
          setValue('message', '')
        })
        .catch(() => {
          showToast('Falha ao enviar e-mail, entre novamente mais tarde.', {
            type: 'error',
            theme: 'colored',
          })
        })
        .finally(() => setIsLoading(false))
    },
    [setValue, showToast],
  )

  return (
    <Container>
      <form onSubmit={handleSubmit(handleSendEmail)}>
        <UserInfo>
          <InputCustom
            icon={FaUser}
            name="name"
            placeholder="Digite seu nome"
            register={register}
            error={errors.name}
          />
          <InputCustom
            icon={FaAt}
            name="email"
            placeholder="Digite seu e-mail"
            register={register}
            error={errors.email}
          />
        </UserInfo>
        <MessageInfo>
          <TextAreaCustom
            icon={FaEnvelope}
            name="message"
            placeholder="Digite sua mensagem"
            register={register}
            error={errors.message}
          />
          <Button isLoading={isLoading} type="submit">
            Enviar
          </Button>
        </MessageInfo>
      </form>
    </Container>
  )
}
