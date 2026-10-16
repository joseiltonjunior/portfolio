import { useEffect, useMemo, useRef } from 'react'
import { I18nextProvider } from 'react-i18next'
import { resolvePreviewLocale, createPreviewI18n } from '~/i18n/preview'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { Cases } from './components/Cases'
import { Process } from './components/Process'
import { Laboratory } from './components/Laboratory'
import { Experience } from './components/Experience'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { PreviewGlobalStyle, PreviewPage } from './styles'
import { useReveal } from './hooks/useReveal'

export default function Home() {
  const pageRef = useRef<HTMLDivElement>(null)
  useReveal(pageRef)
  const preferredLanguage =
    typeof navigator === 'undefined'
      ? undefined
      : navigator.languages?.[0] ?? navigator.language
  const locale = resolvePreviewLocale(preferredLanguage)
  const i18n = useMemo(() => createPreviewI18n(locale), [locale])

  useEffect(() => {
    const previousLanguage = document.documentElement.lang
    document.documentElement.lang = locale
    return () => {
      document.documentElement.lang = previousLanguage
    }
  }, [locale])

  return (
    <I18nextProvider i18n={i18n}>
      <PreviewGlobalStyle />
      <PreviewPage ref={pageRef}>
        <Header />
        <main>
          <Hero />
          <Services />
          <Cases />
          <Process />
          <Laboratory />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </PreviewPage>
    </I18nextProvider>
  )
}
