import { renderToStaticMarkup } from 'react-dom/server'
import { I18nextProvider } from 'react-i18next'
import { describe, expect, it } from 'vitest'
import { createPreviewI18n, PreviewLocale } from '~/i18n/preview'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { Cases } from './components/Cases'
import { Process } from './components/Process'
import { Laboratory } from './components/Laboratory'
import { Experience } from './components/Experience'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

function renderInLocale(component: JSX.Element, locale: PreviewLocale) {
  return renderToStaticMarkup(
    <I18nextProvider i18n={createPreviewI18n(locale)}>
      {component}
    </I18nextProvider>,
  )
}

describe('preview header', () => {
  it('links only to sections present in the approved navigation', () => {
    const html = renderInLocale(<Header />, 'pt-BR')

    expect(html).toContain('aria-label="Principal"')
    expect(html).toContain('href="#topo"')
    expect(html).toContain('href="#servicos"')
    expect(html).toContain('href="#casos"')
    expect(html).toContain('href="#processo"')
    expect(html).toContain('href="#experiencia"')
    expect(html).toContain('href="#contato"')
    expect(html).toContain('>Conversar</a>')
    expect(html).not.toContain('href="#laboratorio"')
  })

  it('renders the English navigation label and action', () => {
    const html = renderInLocale(<Header />, 'en-US')

    expect(html).toContain('aria-label="Main navigation"')
    expect(html).toContain('>Services</a>')
    expect(html).toContain('>Projects</a>')
    expect(html).toContain('>How I work</a>')
    expect(html).toContain('>Experience</a>')
    expect(html).toContain('>Get in touch</a>')
  })
})

describe('preview hero', () => {
  it('renders the approved Portuguese title, presentation, and four layers', () => {
    const html = renderInLocale(<Hero />, 'pt-BR')

    expect(html).toContain('<h1')
    expect(html).toContain('Sistemas sob medida para pequenas empresas,')
    expect(html).toContain('do app ao servidor.')
    expect(html).toContain('Eu projeto, construo e publico o software inteiro')
    expect(html).toContain('Um responsável, quatro camadas')
    expect((html.match(/<h3/g) ?? []).length).toBe(4)
    expect(html).toContain('href="#contato"')
    expect(html).toContain('href="#casos"')
    expect(html).toContain('Ver o que já está no ar')
  })

  it('renders the complete English presentation', () => {
    const html = renderInLocale(<Hero />, 'en-US')

    expect(html).toContain('Custom software for small businesses,')
    expect(html).toContain('from app to server.')
    expect(html).toContain('One person responsible for four layers')
    expect(html).toContain('Database')
    expect(html).not.toContain('Banco de dados')
    expect(html).toContain('See what is live')
  })
})

describe('laboratory', () => {
  it('identifies PebbleX as a prototype and links to the two approved destinations', () => {
    const html = renderInLocale(<Laboratory />, 'pt-BR')

    expect(html).toContain('id="laboratorio"')
    expect((html.match(/<article/g) ?? []).length).toBe(2)
    expect(html).toContain('Protótipo · Windows')
    expect(html).toContain('PebbleX')
    expect(html).toContain('em desenvolvimento para sincronizar')
    expect(html).toContain('Vídeos de programação em português')
    expect(html).toContain('href="https://github.com/joseiltonjunior/PebbleX"')
    expect(html).toContain('href="https://www.youtube.com/@dvlp-jr/videos"')
    expect(
      (html.match(/target="_blank" rel="noopener noreferrer"/g) ?? []).length,
    ).toBe(2)
  })

  it('translates the lab and does not claim PebbleX is released', () => {
    const html = renderInLocale(<Laboratory />, 'en-US')

    expect(html).toContain('What I build and teach outside of work.')
    expect(html).toContain('Prototype · Windows')
    expect(html).toContain('A .NET utility in development')
    expect(html).toContain('Programming videos in Portuguese')
  })
})

describe('experience', () => {
  it('preserves the approved chronological sequence and LinkedIn destination', () => {
    const html = renderInLocale(<Experience />, 'pt-BR')
    const organizations = ['Ionic Health', 'Havan', 'Trinity Soluções']

    expect(html).toContain('id="experiencia"')
    expect((html.match(/<li/g) ?? []).length).toBe(3)
    expect(organizations.map((name) => html.indexOf(name))).toEqual(
      [...organizations.map((name) => html.indexOf(name))].sort(
        (a, b) => a - b,
      ),
    )
    expect(html).toContain('2024 — hoje')
    expect(html).toContain('2021 — 2022')
    expect(html).toContain('2020 — 2021')
    expect(html).toContain(
      'href="https://www.linkedin.com/in/joseilton-junior/"',
    )
  })

  it('translates roles and periods', () => {
    const html = renderInLocale(<Experience />, 'en-US')

    expect(html).toContain('Building production software since 2020.')
    expect(html).toContain('Software Developer')
    expect(html).toContain('Front-end Developer')
    expect(html).toContain('Mobile Developer')
    expect(html).toContain('2024 — present')
  })
})

describe('contact and footer', () => {
  it('offers approved contact links and an explicitly unavailable form', () => {
    const html = renderInLocale(<Contact />, 'pt-BR')

    expect(html).toContain('id="contato"')
    expect(html).toContain('href="https://wa.me/5581986281156"')
    expect(html).toContain('href="mailto:joseiltonjuniortech@gmail.com"')
    expect(html).toContain('for="contact-name"')
    expect(html).toContain('for="contact-email"')
    expect(html).toContain('for="contact-message"')
    expect((html.match(/required=""/g) ?? []).length).toBe(3)
    expect(html).toContain('O envio pelo formulário ainda não está disponível')
    expect(html).toContain('disabled=""')
    expect(html).not.toContain('enviado com sucesso')
  })

  it('translates the form notice, fields, and footer', () => {
    const html = renderInLocale(
      <>
        <Contact />
        <Footer />
      </>,
      'en-US',
    )

    expect(html).toContain('Form submissions are not available yet.')
    expect(html).toContain('Your name')
    expect(html).toContain('What do you need?')
    expect(html).toContain('Send message')
    expect(html).toContain('© 2026 Junior Ferreira · Recife, Brazil')
    expect(html).toContain('https://github.com/joseiltonjunior')
  })
})

describe('services', () => {
  it('renders the four approved services separately from the hero layers', () => {
    const html = renderInLocale(<Services />, 'pt-BR')

    expect(html).toContain('id="servicos"')
    expect((html.match(/<li/g) ?? []).length).toBe(4)
    expect(html).toContain('Sistemas de gestão sob medida')
    expect(html).toContain('Aplicativos web e mobile')
    expect(html).toContain('Pagamentos e integrações')
    expect(html).toContain('Manutenção e evolução')
    expect(html).not.toContain('Um responsável, quatro camadas')
  })

  it('translates every service to English', () => {
    const html = renderInLocale(<Services />, 'en-US')

    expect(html).toContain('Custom management systems')
    expect(html).toContain('Web and mobile apps')
    expect(html).toContain('Payments and integrations')
    expect(html).toContain('Maintenance and improvement')
    expect(html).not.toContain('Sistemas de gestão')
  })
})

describe('cases', () => {
  it('renders the four cases with their distinct professional contexts', () => {
    const html = renderInLocale(<Cases />, 'pt-BR')

    expect(html).toContain('id="casos"')
    expect((html.match(/<article/g) ?? []).length).toBe(4)
    expect(html).toContain('data-kind="ownProduct"')
    expect((html.match(/data-kind="professional"/g) ?? []).length).toBe(2)
    expect(html).toContain('data-kind="volunteer"')
    for (const name of ['Sonoriza', 'Havan', 'Ionic Health', 'Naucoólicos']) {
      expect(html).toContain(name)
    }
    expect(html).toContain('participei da reconstrução da nova interface')
  })

  it('uses only the links supplied by the approved HTML', () => {
    const html = renderInLocale(<Cases />, 'pt-BR')
    const hrefs = [...html.matchAll(/href="([^"]+)"/g)].map((match) => match[1])

    expect(hrefs).toEqual([
      'https://discover.appsonoriza.com.br/',
      'https://play.google.com/store/apps/details?id=com.sonoriza.app',
      'https://naucoolicos.vercel.app',
    ])
    expect(
      (html.match(/target="_blank" rel="noopener noreferrer"/g) ?? []).length,
    ).toBe(3)
  })

  it('renders complete English case copy', () => {
    const html = renderInLocale(<Cases />, 'en-US')

    expect(html).toContain('Software in production, not just repositories.')
    expect(html).toContain('Own product')
    expect(html).toContain('Invoice payment checkout')
    expect(html).toContain('Remote operation of medical imaging equipment')
    expect(html).toContain('Volunteer project')
    expect(html).not.toContain('Checkout de pagamento de faturas')
  })
})

describe('process', () => {
  it('preserves the four approved steps in order', () => {
    const html = renderInLocale(<Process />, 'pt-BR')
    const titles = [
      'Conversa e diagnóstico',
      'Protótipo',
      'Entrega em fases',
      'Suporte e evolução',
    ]

    expect(html).toContain('id="processo"')
    expect((html.match(/<li/g) ?? []).length).toBe(4)
    expect(titles.map((title) => html.indexOf(title))).toEqual(
      [...titles.map((title) => html.indexOf(title))].sort((a, b) => a - b),
    )
    for (const title of titles) expect(html).toContain(title)
    expect(html).toContain('Prazo e valores: sob orçamento')
  })

  it('translates the sequence to English', () => {
    const html = renderInLocale(<Process />, 'en-US')

    expect(html).toContain('Conversation and diagnosis')
    expect(html).toContain('Prototype')
    expect(html).toContain('Delivery in stages')
    expect(html).toContain('Support and improvement')
    expect(html).not.toContain('Conversa e diagnóstico')
  })
})

it('does not create broken internal links in the assembled preview', () => {
  const html = renderInLocale(
    <>
      <Header />
      <Hero />
      <Services />
      <Cases />
      <Process />
      <Laboratory />
      <Experience />
      <Contact />
      <Footer />
    </>,
    'pt-BR',
  )
  const allIds = [...html.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1])
  const ids = new Set(allIds)
  const targets = [...html.matchAll(/href="#([^"]+)"/g)].map(
    (match) => match[1],
  )

  expect(ids.size).toBe(allIds.length)
  expect(targets).toEqual([
    'topo',
    'servicos',
    'casos',
    'processo',
    'experiencia',
    'contato',
    'contato',
    'casos',
  ])
  for (const target of targets) expect(ids.has(target)).toBe(true)
})
