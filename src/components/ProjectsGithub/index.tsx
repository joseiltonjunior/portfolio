import { useCallback, useEffect, useState } from 'react'
import { FaRegStar } from 'react-icons/fa'

import { RepositoriesProps } from '~/types/repositories'
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
import { Tag } from '../Tag'
import apiGitHub from '~/services/apiGithub'
import { useToast } from '~/hooks/useToast'

export function ProjectsGithub() {
  const [repos, setRepos] = useState<RepositoriesProps[]>()
  const { showToast } = useToast()

  const filterRepos = useCallback((repos: RepositoriesProps[]) => {
    const filter = repos.filter(
      (item) =>
        item.name === 'portfolio' ||
        item.name === 'StarchatNode' ||
        item.name === 'dcoffee-shop' ||
        item.name === 'after-app' ||
        item.name === 'dcoffee-shop-api-node' ||
        item.name === 'i-love-football',
    )

    setRepos(filter)
  }, [])

  const handleReposGitHub = useCallback(() => {
    apiGitHub
      .get('/users/joseiltonjunior/repos')
      .then((result) => {
        filterRepos(result.data)
      })
      .catch(() => {
        showToast('Error while fetching repositories', {
          type: 'error',
          theme: 'colored',
        })
      })
  }, [filterRepos, showToast])

  useEffect(() => {
    handleReposGitHub()
  }, [handleReposGitHub])

  return (
    <Container>
      {repos ? (
        repos.map((repo) => (
          <Card
            key={repo.id}
            title={`Open project ${repo.name} in Github`}
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
            {repo.topics.length > 0 && (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginTop: '10px',
                }}
              >
                {repo.topics.map((topic, index) => (
                  <Tag key={index}>{`${topic}`}</Tag>
                ))}
              </div>
            )}
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
