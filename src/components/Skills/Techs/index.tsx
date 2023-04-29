import { SKillsDataProps } from '~/types/skills'
import { Container, Skill, Title, Content } from './styles'

interface TechsProps extends SKillsDataProps {
  name: string
}

export function Techs({ skills, name }: TechsProps) {
  return (
    <Container
      style={{
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Title>{name}</Title>
      <Content>
        {skills.map((item) => (
          <Skill key={item.name} alt="" src={item.urlImg} title={item.name} />
        ))}
      </Content>
    </Container>
  )
}
