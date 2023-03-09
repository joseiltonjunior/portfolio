export interface RepositoriesProps {
  id: number
  description: string
  language: string
  name: string
  stargazers_count: string
  html_url: string
}

export interface RepositoriesDataProps {
  repositories?: RepositoriesProps[]
}
