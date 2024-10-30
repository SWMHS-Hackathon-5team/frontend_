import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'
import { theme } from '@/styles/theme'

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

export const Loader = () => {
  return <_Loader />
}

const _Loader = styled.div`
  width: 50px;
  height: 50px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid ${theme.color.purple};
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`
