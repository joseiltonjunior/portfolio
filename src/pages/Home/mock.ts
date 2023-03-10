import thumb from '~/assets/thumb-react-ts.png'
import thumb2 from '~/assets/thumb-react-storybook.png'
import thumb3 from '~/assets/thumb-skeleton.png'
import thumb4 from '~/assets/thumb-netlify.png'

import portfolioIcon from '~/assets/binary-code.png'
import igniteIcon from '~/assets/ignite.png'
import storybookIcon from '~/assets/storybook.svg'
import styledIcon from '~/assets/styled.png'

export const videos = [
  { thumb, id: '8hUrdjSWTqU' },
  { thumb: thumb2, id: 'xTsHUpVuWmo' },
  { thumb: thumb3, id: 'cNARhMjDgSM' },
  { thumb: thumb4, id: 'k1sgUGkyC_o' },
]

export const projects = [
  {
    icon: portfolioIcon,
    url: 'https://ferreirajr.tech',
    name: 'Porfólio',
    description: 'Projeto pessoal desenvolvido com React + TS',
  },
  {
    icon: storybookIcon,
    url: 'https://storybook-portfolio-dvlp.netlify.app',
    name: 'Storybook Porfólio',
    description: 'Documentação dos componentes do Portfólio',
  },
  {
    icon: igniteIcon,
    url: 'https://ignite-shop-dvlp.netlify.app/',
    name: 'Ignite Shop',
    description: 'Projeto do curso da Rocketseat, desenvolvido com Next + TS',
  },
  {
    icon: styledIcon,
    url: 'https://base-themes-react-dvlp.netlify.app/',
    name: 'Switch Theme',
    description:
      'Projeto demonstrativo de como utilizar ThemeProvider do Styled-components',
  },
]

export const skills = [
  {
    name: 'HTML',
  },
  {
    name: 'CSS e CSS in JS (Styled-components)',
  },
  {
    name: 'Javascript',
  },
  {
    name: 'Typescript',
  },
  {
    name: 'React',
  },
  {
    name: 'React Hooks',
  },
  {
    name: 'React Native',
  },
  {
    name: 'Cloud (AWS/Azure)',
  },
  {
    name: 'Serviços de Geolocalização',
  },
  {
    name: 'Internacionalização de Projetos',
  },
  {
    name: "Consumo de API's",
  },
  {
    name: 'Gerênciadores de pacotes (NPM/Yarn)',
  },

  {
    name: 'Git Flow (Git/GitHub)',
  },
  {
    name: 'Sistemas Operacionais (Linux/Windows)',
  },
  {
    name: 'Testes Unitários e Automatizados (Jest/Cypress)',
  },
  {
    name: 'Metodologias Ágeis (Kanbam/Scrum)',
  },
]
