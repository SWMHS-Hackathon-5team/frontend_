import * as S from './style'
import Header from '@/components/Header'
import Input from '@/components/Input'

import { useState } from 'react'

const Request = () => {
  const [title, setTitle] = useState<string>('')
  const [content, setContent] = useState<string>('')
  const [money, setMoney] = useState<string>('')

  return (
    <div>
      <Header />
      <S.Wrapper>
        <S.Title>의뢰 작성하기</S.Title>
        <S.InputWrapper>
          <S.InputContainer>
            <S.InputTitle>의뢰 제목</S.InputTitle>
            <Input
              state={title}
              setState={setTitle}
              type='text'
              placeholder='제목을 작성해주세요'
            />
          </S.InputContainer>
          <S.InputContainer>
            <S.InputTitle>의뢰 세부 내용</S.InputTitle>
            <Input
              state={content}
              setState={setContent}
              type='text'
              placeholder='의뢰 세부 내용을 작성해주세요'
            />
          </S.InputContainer>
          <S.InputContainer>
            <S.InputTitle>의뢰 보수</S.InputTitle>
            <S.InputSubTitle>적절한 의뢰 보수를 지정해주세요!</S.InputSubTitle>
            <Input
              state={money}
              setState={setMoney}
              type='number'
              placeholder='숫자를 입력해주세요'
            />
          </S.InputContainer>
        </S.InputWrapper>
      </S.Wrapper>
    </div>
  )
}

export default Request
