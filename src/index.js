import '@babel/polyfill'

import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import store from './store'
import { GlobalStyle, theme } from './theme'
import App from './App'
import './i18n'

const Index = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </Provider>
)

render(<Index />, document.getElementById('root'))
