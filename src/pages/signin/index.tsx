import Input from '@/components/Input'
import * as S from './style'
import { Button } from '@/components/button'

const Signin = () => {
  return (
    <S.SigninWrapper>
      <S.SigninContainer>
        <S.Logo>Tanomu!</S.Logo>
        <S.Description>
          타노무에 오신 것을 환영합니다!
          <br />
          로그인 후 더 스마트한 서비스를 만나보세요.
        </S.Description>
        <S.InputContainer>
          <Input placeholder='아이디를 입력해주세요' type='email' />
          <Input placeholder='비밀번호를 입력해주세요' type='password' />
        </S.InputContainer>
        <Button size={24} weight={700} width={440} height={54}>
          로그인
        </Button>
        <S.SignUpPrompt>
          <S.SignUpPromptText>만약 계정이 없다면?</S.SignUpPromptText>
          <S.SignUpPromptLink to='/signup'>회원가입하기</S.SignUpPromptLink>
        </S.SignUpPrompt>
      </S.SigninContainer>
    </S.SigninWrapper>
  )
}

export default Signin
