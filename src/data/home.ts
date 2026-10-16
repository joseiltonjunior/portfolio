export interface HeroLayer {
  id: 'interface' | 'api' | 'database' | 'deployment'
  number: string
}

export const heroLayers: HeroLayer[] = [
  { id: 'interface', number: '01' },
  { id: 'api', number: '02' },
  { id: 'database', number: '03' },
  { id: 'deployment', number: '04' },
]

export interface Service {
  id: 'management' | 'applications' | 'integrations' | 'maintenance'
  number: string
}

export const services: Service[] = [
  { id: 'management', number: '01' },
  { id: 'applications', number: '02' },
  { id: 'integrations', number: '03' },
  { id: 'maintenance', number: '04' },
]

export interface CaseLink {
  id: 'site' | 'app'
  href: string
}

export interface PortfolioCase {
  id: 'sonoriza' | 'havan' | 'ionicHealth' | 'naucoolicos'
  kind: 'ownProduct' | 'professional' | 'volunteer'
  technologies: readonly string[]
  links: readonly CaseLink[]
}

export const portfolioCases: PortfolioCase[] = [
  {
    id: 'sonoriza',
    kind: 'ownProduct',
    technologies: ['React Native', 'NestJS', 'PostgreSQL', 'Next.js', 'AWS S3'],
    links: [
      { id: 'site', href: 'https://discover.appsonoriza.com.br/' },
      {
        id: 'app',
        href: 'https://play.google.com/store/apps/details?id=com.sonoriza.app',
      },
    ],
  },
  {
    id: 'havan',
    kind: 'professional',
    technologies: ['React', 'TypeScript', 'Redux', 'Cypress'],
    links: [],
  },
  {
    id: 'ionicHealth',
    kind: 'professional',
    technologies: ['React', 'TypeScript', 'Blazor', '.NET'],
    links: [],
  },
  {
    id: 'naucoolicos',
    kind: 'volunteer',
    technologies: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind'],
    links: [{ id: 'site', href: 'https://naucoolicos.vercel.app' }],
  },
]

export interface ProcessStep {
  id: 'diagnosis' | 'prototype' | 'delivery' | 'support'
  number: string
}

export const processSteps: ProcessStep[] = [
  { id: 'diagnosis', number: '1' },
  { id: 'prototype', number: '2' },
  { id: 'delivery', number: '3' },
  { id: 'support', number: '4' },
]

export interface LaboratoryItem {
  id: 'pebblex' | 'channel'
  href: string
}

export const laboratoryItems: LaboratoryItem[] = [
  { id: 'pebblex', href: 'https://github.com/joseiltonjunior/PebbleX' },
  { id: 'channel', href: 'https://www.youtube.com/@dvlp-jr/videos' },
]

export interface ExperienceEntry {
  id: 'ionicHealth' | 'havan' | 'trinity'
}

export const experienceEntries: ExperienceEntry[] = [
  { id: 'ionicHealth' },
  { id: 'havan' },
  { id: 'trinity' },
]

export const contactDestinations = {
  emailAddress: 'joseiltonjuniortech@gmail.com',
  emailHref: 'mailto:joseiltonjuniortech@gmail.com',
  whatsappHref: 'https://wa.me/5581986281156',
  linkedInHref: 'https://www.linkedin.com/in/joseilton-junior/',
  githubHref: 'https://github.com/joseiltonjunior',
  youtubeHref: 'https://www.youtube.com/@dvlp-jr/videos',
} as const
