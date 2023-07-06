import { useTranslation } from 'react-i18next'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

import { Abbout } from '~/components/About'
import { Header } from '~/components/Header'
import { Modal } from '~/components/Modal'
import { Projects } from '~/components/Projects'
import { Section } from '~/components/Section'
import { Sidemenu } from '~/components/Sidemenu'
import { Skills } from '~/components/Skills'
import { Videos } from '~/components/Videos'
import { ProjectsGithub } from '~/components/ProjectsGithub'
import { SocialLinks } from '~/components/SocialLinks'

import { Container, WebContent, MobileContent, Content } from './style'
import { HomeAnimated } from '~/components/HomeAnimated'

export function Home() {
  const { t } = useTranslation()

  const alignCenter = { display: 'flex', alignItems: 'center' }

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
            <Section title={t('skillsTitle')}>
              <Skills />
            </Section>

            <Section title={t('projects')}>
              <Projects />
            </Section>

            <Section
              title={t('projectsGithub')}
              viewUrl="https://github.com/joseiltonjunior?tab=repositories"
            >
              <ProjectsGithub />
            </Section>

            <Section title={t('video')}>
              <Videos />
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
              <div>
                <HomeAnimated />
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
                  <Skills />
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
                  <Projects />
                </Section>
              </div>
            </ParallaxLayer>

            <ParallaxLayer
              sticky={{ start: 4.5, end: 5 }}
              speed={1.5}
              style={{ ...alignCenter, justifyContent: 'flex-end' }}
            >
              <div className={`${'card'} ${'parallax'}`}>
                <Section
                  title={t('projectsGithub')}
                  viewUrl="https://github.com/joseiltonjunior?tab=repositories"
                >
                  <ProjectsGithub />
                </Section>
              </div>
            </ParallaxLayer>

            <ParallaxLayer
              sticky={{ start: 6.5, end: 7 }}
              speed={1.5}
              style={{ ...alignCenter, justifyContent: 'flex-end' }}
            >
              <div className={`${'card'} ${'parallax'}`}>
                <Section
                  title={t('video')}
                  viewUrl="https://www.youtube.com/@dvlp-jr/videos"
                >
                  <Videos />
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
              <SocialLinks />
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
