import { useCallback, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Abbout } from '~/components/About'
import { Header } from '~/components/Header'
import { Modal } from '~/components/Modal'
import { Projects } from '~/components/Projects'
import { Section } from '~/components/Section'
import { Sidemenu } from '~/components/Sidemenu'
import { Skills } from '~/components/Skills'
import { Videos } from '~/components/Videos'
import apiGitHub from '~/services/apiGithub'
import { RepositoriesProps } from '~/types/repositories'
import { Container, WebContent, MobileContent, Content } from './style'
import { useToast } from '~/hooks/useToast'

import { Parallax, ParallaxLayer } from '@react-spring/parallax'

import { ProjectsGithub } from '~/components/ProjectsGithub'
import { projects, skills, videos } from './mock'
import { SocialLinks } from '~/components/SocialLinks'
import { Trail } from '~/components/Trail'
import { FaPlay } from 'react-icons/fa'

export function Home() {
  const [repos, setRepos] = useState<RepositoriesProps[]>()
  const { showToast } = useToast()
  const { t } = useTranslation()

  const [open, setOpen] = useState(false)

  const alignCenter = { display: 'flex', alignItems: 'center' }

  const handleReposGitHub = useCallback(() => {
    apiGitHub
      .get('/users/joseiltonjunior/repos')
      .then((result) => {
        setRepos(result.data)
      })
      .catch(() => {
        showToast('Erro ao buscar repositórios', {
          type: 'error',
          theme: 'colored',
        })
      })
  }, [showToast])

  useEffect(() => {
    handleReposGitHub()
  }, [handleReposGitHub])

  return (
    <>
      <Modal />

      <Container>
        <Header />

        <MobileContent>
          <Sidemenu />
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
        </MobileContent>

        <WebContent>
          <Parallax pages={9} className="content-parallax" id="parallax">
            <ParallaxLayer
              className="firstLayer"
              offset={0}
              speed={0.5}
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundImage: 'red',
              }}
            >
              <div onClick={() => setOpen((state) => !state)}>
                {open ? (
                  <Trail open={open}>
                    <span>{t('webDeveloper')}</span>
                    <span>{t('mobileDeveloper')}</span>
                    <span>{t('createContent')}</span>
                  </Trail>
                ) : (
                  <button className="pressStart">
                    <FaPlay />
                    Press start
                  </button>
                )}
              </div>
            </ParallaxLayer>

            <ParallaxLayer
              sticky={{ start: 1, end: 7 }}
              style={{ ...alignCenter, justifyContent: 'flex-start' }}
            >
              <div className={`${'card'} ${'sticky'}`}>
                <Sidemenu />
              </div>
            </ParallaxLayer>

            <ParallaxLayer
              sticky={{ start: 1, end: 1 }}
              speed={1.5}
              style={{ ...alignCenter, justifyContent: 'flex-end' }}
            >
              <div className={`${'card'} ${'parallax'} `}>
                <Section title={t('aboutTitle')}>
                  <Abbout />
                </Section>
              </div>
            </ParallaxLayer>

            <ParallaxLayer
              sticky={{ start: 2, end: 2 }}
              speed={1.5}
              style={{ ...alignCenter, justifyContent: 'flex-end' }}
            >
              <div className={`${'card'} ${'parallax'}`}>
                <Section title={t('skillsTitle')}>
                  <Skills skills={skills} />
                </Section>
              </div>
            </ParallaxLayer>

            <ParallaxLayer
              sticky={{ start: 3, end: 3 }}
              speed={1.5}
              style={{ ...alignCenter, justifyContent: 'flex-end' }}
            >
              <div className={`${'card'} ${'parallax'}`}>
                <Section title={t('projects')}>
                  <Projects projects={projects} />
                </Section>
              </div>
            </ParallaxLayer>

            <ParallaxLayer
              sticky={{ start: 4.5, end: 5 }}
              speed={1.5}
              style={{ ...alignCenter, justifyContent: 'flex-end' }}
            >
              <div className={`${'card'} ${'parallax'}`}>
                <Section title={t('projectsGithub')}>
                  <ProjectsGithub repositories={repos} />
                </Section>
              </div>
            </ParallaxLayer>

            <ParallaxLayer
              sticky={{ start: 6.5, end: 7 }}
              speed={1.5}
              style={{ ...alignCenter, justifyContent: 'flex-end' }}
            >
              <div className={`${'card'} ${'parallax'}`}>
                <Section title={t('video')}>
                  <Videos videos={videos} />
                </Section>
              </div>
            </ParallaxLayer>

            <ParallaxLayer
              offset={8}
              speed={1.5}
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',

                gap: '2rem',
              }}
            >
              <SocialLinks action={() => setOpen(false)} />
              <p
                style={{
                  fontSize: '1.5rem',
                  maxWidth: 600,
                  textAlign: 'center',
                }}
              >
                {t('endText')}
              </p>
            </ParallaxLayer>
          </Parallax>
        </WebContent>
      </Container>
    </>
  )
}
