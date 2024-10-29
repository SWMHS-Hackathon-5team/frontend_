import { Global } from '@emotion/react'
import { GlobalStyle } from './styles/globalStyle.style'
import { Router } from '@/router/router'

export default function App() {
  return (
    <>
      <Global styles={GlobalStyle} />
      <Router />
    </>
  )
}
