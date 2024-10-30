import { Global } from '@emotion/react'
import { GlobalStyle } from './styles/globalStyle.style'
import { Router } from '@/router/router'
import { BooleanProvider } from './context/boolContext'

export default function App() {
  return (
    <BooleanProvider>
      <Global styles={GlobalStyle} />
      <Router />
    </BooleanProvider>
  )
}
