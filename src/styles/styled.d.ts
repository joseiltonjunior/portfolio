import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      Dark_100: string
      Dark_300: string
      Dark_400: string
      Dark_600: string
      Dark_700: string
      Dark_800: string
      Dark_900: string

      Light: string
      Orange: string
    }
  }
}
