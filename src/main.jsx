import React from 'react'
import ReactDOM from 'react-dom/client'
import theme from './styles/theme' 
import { ThemeProvider } from 'styled-components'
import { Home } from './pages/Home//Index'
import GlobalStyles from './styles/global'

import 'swiper/css';
import { register } from 'swiper/element'

register();

import 'swiper/css/navigation'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Home />
    </ThemeProvider>
  </React.StrictMode>,

)
