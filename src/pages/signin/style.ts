import { theme } from '@/styles/theme'
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

export const SigninWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 28px;
  justify-content: center;
  align-items: center;
`

export const SigninContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
  max-width: 440px;
  align-items: center;
`

export const Logo = styled.p`
  font-weight: 700;
  font-size: 2.25rem;
  background: ${theme.color.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`

export const Description = styled.p`
  font-weight: 400;
  font-size: 1.25rem;
  color: #000;
  text-align: center;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  align-items: center;
`

export const SignUpPrompt = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
export const SignUpPromptText = styled.p`
  color: #000;
  font-weight: 500;
  font-size: 1rem;
  margin-right: 0.5rem;
`

export const SignUpPromptLink = styled(Link)`
  color: ${theme.color.blue};
  font-weight: 500;
  font-size: 1rem;
  text-decoration: none;
`
