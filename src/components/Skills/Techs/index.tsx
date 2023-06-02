import { SkillsProps } from '~/types/skills'
import { Container, Skill, Title, Content } from './styles'
import Skeleton from 'react-loading-skeleton'

interface TechsProps {
  title: string
  skills?: SkillsProps[]
}

export function Techs({ skills, title }: TechsProps) {
  if (!skills || skills.length === 0) {
    return (
      <Container>
        <Skeleton width={150} height={200} />
      </Container>
    )
  }

  return (
    <Container
      style={{
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Title>{title}</Title>
      <Content>
        {skills &&
          skills.map((item) => (
            <Skill key={item.name} alt="" src={item.imgUrl} title={item.name} />
          ))}
      </Content>
    </Container>
  )
}
