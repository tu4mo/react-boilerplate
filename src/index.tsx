import '@babel/polyfill'

import { render } from 'react-dom'
import { ThemeProvider } from 'styled-components'
import { HelmetProvider } from 'react-helmet-async'

import { GlobalStyle, theme } from './theme'
import App from './App'
import './i18n'

const Index = () => (
  <HelmetProvider>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </HelmetProvider>
)

render(<Index />, document.getElementById('root'))
