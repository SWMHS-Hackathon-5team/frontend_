import styled from '@emotion/styled'
import { Text } from '@/components/text'
import { Logo } from '@/assets/logo'
import Input from '@/components/Input'
import { Button } from '@/components/button'
import { theme } from '@/styles/theme'
import { Link } from 'react-router-dom'

export const Signup = () => {
  return (
    <Wrapper>
      <Logo />
      <Text size={20} weight={400} align='center'>
        타노무에 오신 것을 환영합니다!\n 회원가입 후 더 스마트한 서비스를
        만나보세요.
      </Text>
      <InputWrapper>
        <Input placeholder='아이디를 입력해주세요' type='string' />
        <Input placeholder='비밀번호를 입력해주세요' type='string' />
        <Input placeholder='비밀번호를 다시 입력해주세요' type='string' />
      </InputWrapper>
      <Button width={440} height={54} size={24} weight={700}>
        회원가입
      </Button>
      <TipBox>
        <Text size={16} weight={500}>
          만약 계정이 있다면?&nbsp;
        </Text>
        <Link to='signin'>
          <Text size={16} weight={500} color={theme.color.blue}>
            로그인하기
          </Text>
        </Link>
      </TipBox>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 28px;
  justify-content: center;
  align-items: center;
`

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 440px;
  gap: 8px;
`

const TipBox = styled.div`
  display: flex;
`
