import { Global } from '@emotion/react'
import { GlobalStyle } from './styles/globalStyle.style'
import { Router } from '@/router/router'
import { BooleanProvider } from './context/boolContext'
import { ToastContainer } from 'react-toastify'

export default function App() {
  return (
    <BooleanProvider>
      <Global styles={GlobalStyle} />
      <Router />
      <ToastContainer
        position='top-center'
        autoClose={4000}
        hideProgressBar
        closeOnClick
        pauseOnHover
        draggable
        limit={1}
      />
    </BooleanProvider>
  )
}
