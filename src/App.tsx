import { lazy, Suspense } from 'react'
import GlobalStyle from './styles/global'

const LegacyHome = lazy(() =>
  import('./pages/Home').then(({ Home }) => ({ default: Home })),
)

const Home = lazy(() => import('./screens/Home'))

function App() {
  const showLegacy =
    new URLSearchParams(window.location.search).get('preview') === 'v1'

  if (!showLegacy) {
    return (
      <Suspense fallback={null}>
        <Home />
      </Suspense>
    )
  }

  return (
    <div className="App">
      <GlobalStyle />
      <Suspense fallback={null}>
        <LegacyHome />
      </Suspense>
    </div>
  )
}

export default App
