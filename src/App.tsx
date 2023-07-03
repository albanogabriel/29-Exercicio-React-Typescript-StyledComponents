import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'

import './global.css'

import EstiloGlobal, { Container } from './styles'
import { ThemeProvider } from 'styled-components'

import temaPadrao from './theme/padrao'

function App() {
  return (
    <ThemeProvider theme={temaPadrao}>
      <EstiloGlobal />
      <Header />
      <Hero />
      <Container>
        <ListaVagas />
      </Container>
    </ThemeProvider>
  )
}

export default App
