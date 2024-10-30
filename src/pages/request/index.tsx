import { Button } from '@/components/button'
import * as S from './style'
import Header from '@/components/Header'
import Input from '@/components/Input'
import { useState } from 'react'
import apiClient from '@/api/apiClient'
import axios from 'axios'

interface Coordinates {
  lat: number
  lng: number
}

const Request = () => {
  const [title, setTitle] = useState<string>('')
  const [content, setContent] = useState<string>('')
  const [money, setMoney] = useState<string>('')
  const [roadAddress, setRoadAddress] = useState<string>('')
  const [detailAddress, setDetailAddress] = useState<string>('')

  const KAKAO_REST_API_KEY = `${import.meta.env.VITE_KAKAO_REST_API}`

  const convertAddressToCoordinates = async (
    address: string,
  ): Promise<Coordinates | null> => {
    try {
      const url = `https://dapi.kakao.com/v2/local/search/address.json?query=${encodeURIComponent(address)}`
      const response = await axios.get(url, {
        headers: {
          Authorization: `KakaoAK ${KAKAO_REST_API_KEY}`,
        },
      })

      if (response.status === 200 && response.data.documents.length > 0) {
        const { x, y } = response.data.documents[0].address
        return {
          lat: parseFloat(y),
          lng: parseFloat(x),
        }
      }
    } catch (error) {
      console.error('Error converting address:', error)
    }
    return null
  }

  const handleButton = async () => {
    const coordinates = await convertAddressToCoordinates(roadAddress)

    if (coordinates) {
      console.log('hi')
      try {
        const response = await apiClient.post('/request', {
          title,
          content,
          price: money,
          latitude: coordinates.lat,
          longitude: coordinates.lng,
          address: detailAddress,
        })
        console.log('요청이 성공적으로 전송되었습니다:', response)
      } catch (e) {
        console.error('요청 중 오류가 발생했습니다:', e)
      }
    } else {
      console.error('좌표 변환에 실패했습니다.')
    }
  }

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
          <S.InputContainer>
            <S.InputTitle>의뢰 위치</S.InputTitle>
            <Input
              state={roadAddress}
              setState={setRoadAddress}
              type='text'
              placeholder='의뢰가 진행될 주소의 도로명을 입력해주세요'
            />
            <Input
              state={detailAddress}
              setState={setDetailAddress}
              type='text'
              placeholder='상세 주소를 입력해주세요'
            />
          </S.InputContainer>
        </S.InputWrapper>
        <S.ButtonWrapper>
          <Button
            onClick={handleButton}
            width={200}
            height={40}
            size={20}
            weight={500}
          >
            해주세요 등록하기
          </Button>
        </S.ButtonWrapper>
      </S.Wrapper>
    </div>
  )
}

export default Request
