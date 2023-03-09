import { useCallback, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Abbout } from '~/components/About'
import { Header } from '~/components/Header'
import { Modal } from '~/components/Modal'
import { Projects } from '~/components/Projects'
import { Section } from '~/components/Section'
import { Sidebar } from '~/components/Sidebar'
import { Skills } from '~/components/Skills'
import { Videos } from '~/components/Videos'
import apiGitHub from '~/services/apiGithub'
import { RepositoriesProps } from '~/types/repositories'
import { Container, Content } from './style'

import { ProjectsGithub } from '~/components/ProjectsGithub'
import { projects, videos, skills } from './mock'

export function Home() {
  const [repos, setRepos] = useState<RepositoriesProps[]>()

  const { t } = useTranslation()

  const handleReposGitHub = useCallback(() => {
    apiGitHub.get('/users/joseiltonjunior/repos').then((result) => {
      setRepos(result.data)
    })
  }, [])

  useEffect(() => {
    handleReposGitHub()
  }, [handleReposGitHub])

  return (
    <>
      <Modal />
      <Header />
      <Container>
        <Sidebar />
        <Content>
          <Section title={t('aboutTitle')}>
            <Abbout />
          </Section>
          <Section title={t('skillsTitle')} show>
            <Skills skills={skills} />
          </Section>

          <Section title={t('projects')} show>
            <Projects projects={projects} />
          </Section>

          <Section title={t('projectsGithub')} show>
            <ProjectsGithub repositories={repos} />
          </Section>

          <Section title={t('video')} show>
            <Videos videos={videos} />
          </Section>
        </Content>
      </Container>
    </>
  )
}
