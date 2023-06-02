export interface ProjectProps {
  imgUrl: string
  name: string
  url: string
  status: number
  description: string
  techs: string[]
}

export interface ProjectsDataProps {
  projects: ProjectProps[] | undefined
}
