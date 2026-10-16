import i18next, { createInstance } from 'i18next'
import { initReactI18next } from 'react-i18next'

export type PreviewLocale = 'pt-BR' | 'en-US'

export function resolvePreviewLocale(
  preferredLanguage?: string,
): PreviewLocale {
  const language = preferredLanguage?.trim().toLowerCase().split(/[-_]/)[0]
  return language === 'en' ? 'en-US' : 'pt-BR'
}

const resources = {
  'pt-BR': {
    translation: {
      header: {
        profession: 'engenharia de software',
        navigation: 'Principal',
        services: 'Serviços',
        cases: 'Casos',
        process: 'Como trabalho',
        experience: 'Experiência',
        contact: 'Conversar',
      },
      hero: {
        eyebrow: 'Full stack · Recife, PE',
        title: 'Sistemas sob medida para pequenas empresas,',
        titleAccent: 'do app ao servidor.',
        introduction:
          'Eu projeto, construo e publico o software inteiro — interface, API, banco de dados e nuvem — para o seu processo deixar de depender de planilha e de mensagens soltas.',
        contact: 'Conversar sobre o seu sistema',
        viewCases: 'Ver o que já está no ar',
        layersHeading: 'Um responsável, quatro camadas',
        layers: {
          interface: {
            title: 'Interface',
            description:
              'Web e mobile que a sua equipe e os seus clientes realmente usam.',
            stack: 'React · React Native',
          },
          api: {
            title: 'API',
            description:
              'As regras do seu negócio num lugar só, seguro e testável.',
            stack: 'Node.js · NestJS',
          },
          database: {
            title: 'Banco de dados',
            description:
              'Dados organizados para virar relatório e decisão, não planilha.',
            stack: 'PostgreSQL · Prisma',
          },
          deployment: {
            title: 'Publicação',
            description:
              'No ar, monitorado e com atualização sem dor de cabeça.',
            stack: 'AWS · CI/CD',
          },
        },
      },
      services: {
        eyebrow: 'Serviços',
        title: 'O que eu resolvo para o seu negócio',
        items: {
          management: {
            title: 'Sistemas de gestão sob medida',
            description:
              'Pedidos, agendamentos, cadastros, estoque e painéis desenhados em torno do jeito que a sua empresa já trabalha.',
          },
          applications: {
            title: 'Aplicativos web e mobile',
            description:
              'Apps para a sua equipe e para os seus clientes, no navegador e no celular, com acesso e permissões bem definidos.',
          },
          integrations: {
            title: 'Pagamentos e integrações',
            description:
              'Cobrança, Pix e conexão com os sistemas que você já usa, para acabar com o retrabalho manual.',
          },
          maintenance: {
            title: 'Manutenção e evolução',
            description:
              'Correções, melhorias e acompanhamento depois da entrega, para o sistema crescer junto com o negócio.',
          },
        },
      },
      cases: {
        eyebrow: 'Casos',
        technologies: 'Tecnologias',
        title: 'Software em produção, não só repositórios.',
        introduction:
          'Alguns projetos são meus; outros fiz dentro de empresas, e por isso mostro aqui só o que é público.',
        items: {
          sonoriza: {
            label: 'Produto próprio',
            meta: 'Do zero ao ar',
            title: 'Sonoriza — curadoria musical do Nordeste',
            description:
              'Plataforma completa que construí do zero: aplicativo mobile, API, banco de dados, site público de descoberta (Discover) e painel administrativo, todos publicados. O backend recomenda por afinidade do usuário e remove duplicidades.',
            extra:
              'No ar hoje: mais de 300 músicas, cerca de 70 artistas e cerca de 20 eventos do Nordeste cadastrados.',
            links: { site: 'Ver o site →', app: 'App na Google Play →' },
          },
          havan: {
            label: 'Havan',
            meta: '2021 — 2022',
            title: 'Checkout de pagamento de faturas',
            description:
              'Reconstruí o checkout do zero, migrando de Quasar e JavaScript para React e TypeScript, com uma nova interface. Mantive os pagamentos por cartão e boleto e adicionei o Pix como nova modalidade.',
          },
          ionicHealth: {
            label: 'Ionic Health',
            meta: '2024 — hoje',
            title: 'Operação remota de equipamentos de imagem médica',
            description:
              'Atuo em dois produtos: no sistema que os clientes usam hoje (.NET, Blazor e JavaScript), participei da reconstrução da nova interface; e num projeto novo, em React e TypeScript, construí a prévia das câmeras e a exibição dos dispositivos.',
          },
          naucoolicos: {
            label: 'Projeto voluntário',
            meta: 'Em andamento',
            title: 'Naucoólicos — site e área do sócio',
            description:
              'Site de uma torcida do Náutico, em Next.js, com autenticação construída sobre Supabase Auth. A área do sócio, a associação e os pagamentos estão em desenvolvimento.',
            links: { site: 'naucoolicos.vercel.app →' },
          },
        },
      },
      process: {
        eyebrow: 'Como eu trabalho',
        title: 'Você vê funcionando antes de apostar tudo.',
        note: 'Prazo e valores: sob orçamento, depois da conversa inicial.',
        items: {
          diagnosis: {
            title: 'Conversa e diagnóstico',
            description:
              'Entendo o seu processo e o problema real antes de falar de tecnologia. Sem compromisso.',
          },
          prototype: {
            title: 'Protótipo',
            description:
              'Você vê e testa as telas antes de eu construir o sistema inteiro.',
          },
          delivery: {
            title: 'Entrega em fases',
            description:
              'Versões curtas, já funcionando em produção, para você usar e opinar desde cedo.',
          },
          support: {
            title: 'Suporte e evolução',
            description:
              'Depois da entrega, cuido das correções, das melhorias e do que mudar conforme o negócio cresce.',
          },
        },
      },
      laboratory: {
        eyebrow: 'Laboratório e conteúdo',
        title: 'O que eu construo e ensino fora do expediente.',
        items: {
          pebblex: {
            label: 'Protótipo · Windows',
            title: 'PebbleX',
            description:
              'Utilitário em .NET em desenvolvimento para sincronizar o canal Easy-Switch de teclado e mouse Logitech entre dois computadores, com pareamento por código de verificação na rede local.',
            link: 'Ver no GitHub →',
          },
          channel: {
            label: 'Canal · YouTube',
            title: 'Vídeos de programação em português',
            description:
              'Firebase, Storybook, skeleton loading e deploy com Netlify, explicados na prática.',
            link: 'Assistir no YouTube →',
          },
        },
      },
      experience: {
        eyebrow: 'Experiência',
        title: 'Desde 2020 em produção.',
        link: 'Detalhes no LinkedIn →',
        items: {
          ionicHealth: {
            organization: 'Ionic Health',
            role: 'Software Developer',
            period: '2024 — hoje',
          },
          havan: {
            organization: 'Havan',
            role: 'Front-end Developer',
            period: '2021 — 2022',
          },
          trinity: {
            organization: 'Trinity Soluções',
            role: 'Mobile Developer',
            period: '2020 — 2021',
          },
        },
      },
      contact: {
        eyebrow: 'Contato',
        title: 'Conte qual processo hoje dá mais trabalho.',
        introduction:
          'Eu respondo com um caminho possível: o que construir primeiro e como. Sem compromisso.',
        whatsapp: 'WhatsApp',
        email: 'E-mail',
        whatsappNumber: '(81) 98628-1156',
        form: {
          unavailable:
            'O envio pelo formulário ainda não está disponível. Por enquanto, fale comigo pelo WhatsApp ou e-mail.',
          name: 'Seu nome',
          email: 'E-mail',
          message: 'O que você precisa?',
          submit: 'Enviar mensagem',
          errors: {
            required: 'Campo obrigatório.',
            nameMax: 'Use no máximo 80 caracteres.',
            emailInvalid: 'Digite um e-mail válido.',
            emailMax: 'Use no máximo 254 caracteres.',
            messageMin: 'Escreva pelo menos 10 caracteres.',
            messageMax: 'Use no máximo 2.000 caracteres.',
          },
        },
      },
      footer: {
        copyright: '© 2026 Junior Ferreira · Recife, PE',
        socialLinks: 'Redes sociais',
      },
    },
  },
  'en-US': {
    translation: {
      header: {
        profession: 'software engineering',
        navigation: 'Main navigation',
        services: 'Services',
        cases: 'Projects',
        process: 'How I work',
        experience: 'Experience',
        contact: 'Get in touch',
      },
      hero: {
        eyebrow: 'Full stack · Recife, Brazil',
        title: 'Custom software for small businesses,',
        titleAccent: 'from app to server.',
        introduction:
          'I design, build, and launch the entire software system — interface, API, database, and cloud — so your processes no longer depend on spreadsheets and scattered messages.',
        contact: 'Talk about your system',
        viewCases: 'See what is live',
        layersHeading: 'One person responsible for four layers',
        layers: {
          interface: {
            title: 'Interface',
            description:
              'Web and mobile experiences your team and customers actually use.',
            stack: 'React · React Native',
          },
          api: {
            title: 'API',
            description:
              'Your business rules in one place, secure and testable.',
            stack: 'Node.js · NestJS',
          },
          database: {
            title: 'Database',
            description:
              'Organized data for reports and decisions, instead of spreadsheets.',
            stack: 'PostgreSQL · Prisma',
          },
          deployment: {
            title: 'Deployment',
            description: 'Live, monitored, and ready for painless updates.',
            stack: 'AWS · CI/CD',
          },
        },
      },
      services: {
        eyebrow: 'Services',
        title: 'What I solve for your business',
        items: {
          management: {
            title: 'Custom management systems',
            description:
              'Orders, appointments, records, inventory, and dashboards designed around how your business already works.',
          },
          applications: {
            title: 'Web and mobile apps',
            description:
              'Apps for your team and customers, in the browser and on mobile, with clearly defined access and permissions.',
          },
          integrations: {
            title: 'Payments and integrations',
            description:
              'Billing, Pix, and connections to the systems you already use, reducing manual rework.',
          },
          maintenance: {
            title: 'Maintenance and improvement',
            description:
              'Fixes, improvements, and support after delivery, so the system can grow with your business.',
          },
        },
      },
      cases: {
        eyebrow: 'Projects',
        technologies: 'Technologies',
        title: 'Software in production, not just repositories.',
        introduction:
          'Some projects are my own; others were built within companies, so I only show what is public.',
        items: {
          sonoriza: {
            label: 'Own product',
            meta: 'Built and launched',
            title: 'Sonoriza — music discovery from Northeast Brazil',
            description:
              'A complete platform I built from scratch: mobile app, API, database, public discovery site (Discover), and admin dashboard, all deployed. The backend recommends content based on user affinity and removes duplicates.',
            extra:
              'Live today: more than 300 songs, around 70 artists, and around 20 events from Northeast Brazil listed.',
            links: { site: 'View website →', app: 'App on Google Play →' },
          },
          havan: {
            label: 'Havan',
            meta: '2021 — 2022',
            title: 'Invoice payment checkout',
            description:
              'I rebuilt the checkout from scratch, migrating from Quasar and JavaScript to React and TypeScript with a new interface. I preserved card and boleto payments and added Pix as a new payment method.',
          },
          ionicHealth: {
            label: 'Ionic Health',
            meta: '2024 — present',
            title: 'Remote operation of medical imaging equipment',
            description:
              'I work on two products: in the system customers use today (.NET, Blazor, and JavaScript), I contributed to rebuilding the new interface; in a new React and TypeScript project, I built the camera previews and device display.',
          },
          naucoolicos: {
            label: 'Volunteer project',
            meta: 'In progress',
            title: 'Naucoólicos — website and member area',
            description:
              'Website for a Náutico supporters’ group, built with Next.js and authentication on Supabase Auth. The member area, membership flow, and payments are in development.',
            links: { site: 'naucoolicos.vercel.app →' },
          },
        },
      },
      process: {
        eyebrow: 'How I work',
        title: 'See it working before committing to the full build.',
        note: 'Timeline and pricing: quoted after our initial conversation.',
        items: {
          diagnosis: {
            title: 'Conversation and diagnosis',
            description:
              'I learn how your process works and what the real problem is before talking about technology. No obligation.',
          },
          prototype: {
            title: 'Prototype',
            description:
              'You see and test the screens before I build the entire system.',
          },
          delivery: {
            title: 'Delivery in stages',
            description:
              'Short releases already running in production, so you can use them and give feedback early.',
          },
          support: {
            title: 'Support and improvement',
            description:
              'After delivery, I handle fixes, improvements, and changes as your business grows.',
          },
        },
      },
      laboratory: {
        eyebrow: 'Lab and content',
        title: 'What I build and teach outside of work.',
        items: {
          pebblex: {
            label: 'Prototype · Windows',
            title: 'PebbleX',
            description:
              'A .NET utility in development that synchronizes the Easy-Switch channel of a Logitech keyboard and mouse across two computers, using a verification code on the local network.',
            link: 'View on GitHub →',
          },
          channel: {
            label: 'Channel · YouTube',
            title: 'Programming videos in Portuguese',
            description:
              'Firebase, Storybook, skeleton loading, and deployment with Netlify, explained through practical examples.',
            link: 'Watch on YouTube →',
          },
        },
      },
      experience: {
        eyebrow: 'Experience',
        title: 'Building production software since 2020.',
        link: 'Details on LinkedIn →',
        items: {
          ionicHealth: {
            organization: 'Ionic Health',
            role: 'Software Developer',
            period: '2024 — present',
          },
          havan: {
            organization: 'Havan',
            role: 'Front-end Developer',
            period: '2021 — 2022',
          },
          trinity: {
            organization: 'Trinity Soluções',
            role: 'Mobile Developer',
            period: '2020 — 2021',
          },
        },
      },
      contact: {
        eyebrow: 'Contact',
        title: 'Tell me which process takes the most work today.',
        introduction:
          'I will reply with a possible path: what to build first and how. No obligation.',
        whatsapp: 'WhatsApp',
        email: 'Email',
        whatsappNumber: '(81) 98628-1156',
        form: {
          unavailable:
            'Form submissions are not available yet. For now, contact me by WhatsApp or email.',
          name: 'Your name',
          email: 'Email',
          message: 'What do you need?',
          submit: 'Send message',
          errors: {
            required: 'This field is required.',
            nameMax: 'Use no more than 80 characters.',
            emailInvalid: 'Enter a valid email address.',
            emailMax: 'Use no more than 254 characters.',
            messageMin: 'Write at least 10 characters.',
            messageMax: 'Use no more than 2,000 characters.',
          },
        },
      },
      footer: {
        copyright: '© 2026 Junior Ferreira · Recife, Brazil',
        socialLinks: 'Social links',
      },
    },
  },
} as const

export function createPreviewI18n(locale: PreviewLocale): typeof i18next {
  const instance = createInstance()
  void instance.use(initReactI18next).init({
    resources,
    lng: locale,
    fallbackLng: 'pt-BR',
    initImmediate: false,
    interpolation: { escapeValue: false },
  })
  return instance
}
