import { useCallback, useEffect, useState } from 'react'
import { FaRegStar } from 'react-icons/fa'

import { RepositoriesDataProps, RepositoriesProps } from '~/types/repositories'
import {
  Card,
  Container,
  Description,
  RowContent,
  Title,
  StarContent,
  Info,
} from './style'
import { SkeletonCard } from './SkeletonCard'

export function ProjectsGithub({ repositories }: RepositoriesDataProps) {
  const [repos, setRepos] = useState<RepositoriesProps[]>()

  const filterRepos = useCallback((repos: RepositoriesProps[]) => {
    const filter = repos.filter(
      (item) =>
        item.name !== 'portfolio-deprecated' &&
        item.name !== 'SwitchThemesReactTS' &&
        item.name !== 'joseiltonjunior' &&
        item.name !== 'after-app-deprecated',
    )

    setRepos(filter)
  }, [])

  useEffect(() => {
    if (repositories) filterRepos(repositories)
  }, [repositories, filterRepos])

  return (
    <Container>
      {repos ? (
        repos.map((repo) => (
          <Card
            key={repo.id}
            title={`Abrir o projeto ${repo.name} no Github`}
            onClick={() => {
              window.open(repo.html_url, '_blank')
            }}
          >
            <Title>{repo.name}</Title>
            <Description>{repo.description}</Description>
            <RowContent>
              <Info>{repo.language}</Info>
              <StarContent>
                <FaRegStar />
                <Info>{repo.stargazers_count}</Info>
              </StarContent>
            </RowContent>
          </Card>
        ))
      ) : (
        <>
          <SkeletonCard />
          <SkeletonCard />
        </>
      )}
    </Container>
  )
}
