import { ProjectsDataProps } from '~/types/projects'
import {
  Card,
  Container,
  Description,
  Title,
  ContentIcon,
  ContentInfo,
} from './style'

export function Projects({ projects }: ProjectsDataProps) {
  return (
    <Container>
      {projects?.map((project) => (
        <Card
          key={project.name}
          title={`Abrir o projeto ${project.name}`}
          onClick={() => {
            window.open(project.url, '_blank')
          }}
        >
          <ContentIcon>
            <img src={project.icon} alt="" />
          </ContentIcon>

          <ContentInfo>
            <Title>{project.name}</Title>
            <Description>{project.description}</Description>
          </ContentInfo>
        </Card>
      ))}
    </Container>
  )
}
