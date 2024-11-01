import { Button } from '@/components/button'
import * as S from './style'
import Header from '@/components/Header'
import Input from '@/components/Input'
import { useEffect, useRef, useState } from 'react'
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

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

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
      try {
        await apiClient.post('/request', {
          title,
          content,
          price: money,
          latitude: coordinates.lat,
          longitude: coordinates.lng,
          address: detailAddress,
        })

        setIsModalOpen(true)
      } catch (e) {
        console.error('요청 중 오류가 발생했습니다:', e)
      }
    } else {
      console.error('좌표 변환에 실패했습니다.')
    }
  }

  const textareaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
    }
  }, [content])

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value)
  }

  const closeModal = () => {
    setTitle('')
    setContent('')
    setMoney('')
    setRoadAddress('')
    setDetailAddress('')

    setIsModalOpen(false)
  }

  return (
    <div>
      <Header />
      <S.Wrapper>
        <div>
          <S.Title>해주세요 작성하기</S.Title>
          <S.SubTitle>
            해주세요는 Myowww님이 원하는 바를 의뢰 형식으로 요청하는 과정입니다.
            해결되기를 바라는 상황과 내용을 세부적으로 작성해주세요!
          </S.SubTitle>
        </div>
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
            <S.TextAreaContainer>
              <S.TextArea
                ref={textareaRef}
                placeholder='의뢰 세부 내용을 작성해주세요'
                onChange={handleChange}
                value={content}
                rows={1}
              />
            </S.TextAreaContainer>
          </S.InputContainer>
          <S.InputContainer>
            <S.InputTitle>의뢰 보수</S.InputTitle>
            <S.InputSubTitle>적절한 의뢰 보수를 지정해주세요!</S.InputSubTitle>
            <S.Label>
              <Input
                state={money}
                setState={setMoney}
                type='number'
                placeholder='숫자를 입력해주세요'
              />
              원
            </S.Label>
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
            styleType={'ghost'}
          >
            해주세요 등록하기
          </Button>
        </S.ButtonWrapper>

        {isModalOpen && (
          <>
            <S.Backdrop />
            <S.ModalContainer>
              <div>
                <S.ModalTitle>요청 완료</S.ModalTitle>
                <S.ModalContent>
                  해주세요 등록이 완료되었습니다. 라이더가 의뢰를 수락할 때까지
                  기다려주세요.
                </S.ModalContent>
              </div>
              <S.ModalButtonContainer>
                <Button
                  onClick={closeModal}
                  styleType='ghost'
                  size={16}
                  weight={700}
                  width={78}
                  height={36}
                >
                  확인
                </Button>
              </S.ModalButtonContainer>
            </S.ModalContainer>
          </>
        )}
      </S.Wrapper>
    </div>
  )
}

export default Request
