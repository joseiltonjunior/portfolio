interface ProjectProps {
  icon: string
  url: string
  name: string
  description: string
  stage: string
  skills: string[]
}

export interface ProjectsDataProps {
  projects: ProjectProps[]
}
