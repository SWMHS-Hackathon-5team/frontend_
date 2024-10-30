import { Button } from '@/components/button'
import * as S from './style'
import Header from '@/components/Header'
import Input from '@/components/Input'
import { useState, useEffect } from 'react'
import apiClient from '@/api/apiClient'

const loadKakaoMap = () => {
  return new Promise((resolve, reject) => {
    if (window.kakao && window.kakao.maps) {
      resolve(true)
    } else {
      const script = document.createElement('script')
      script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.VITE_KAKAO_MAP_API}&libraries=services`
      script.onload = () => resolve(true)
      script.onerror = () => reject('Kakao 지도 API 로드 실패')
      document.head.appendChild(script)
    }
  })
}

const Request = () => {
  const [title, setTitle] = useState<string>('')
  const [content, setContent] = useState<string>('')
  const [money, setMoney] = useState<string>('')
  const [roadAddress, setRoadAddress] = useState<string>('')
  const [detailAddress, setDetailAddress] = useState<string>('')
  const [latitude, setLatitude] = useState<number>(0)
  const [longitude, setLongitude] = useState<number>(0)

  useEffect(() => {
    loadKakaoMap().catch((error) => console.error(error))
  }, [])

  const validateAddress = () => {
    return new Promise((resolve, reject) => {
      if (window.kakao && window.kakao.maps && window.kakao.maps.services) {
        const geocoder = new window.kakao.maps.services.Geocoder()
        geocoder.addressSearch(roadAddress, (result, status) => {
          if (status === window.kakao.maps.services.Status.OK) {
            setLatitude(parseFloat(result[0].y))
            setLongitude(parseFloat(result[0].x))
            resolve(true)
          } else {
            reject('주소를 찾을 수 없습니다.')
          }
        })
      } else {
        reject('Kakao 지도 API가 로드되지 않았습니다.')
      }
    })
  }

  const handleButton = async () => {
    validateAddress()
    // try {
    //   await validateAddress()
    //   const response = await apiClient.post('/request', {
    //     title,
    //     content,
    //     price: money,
    //     latitude,
    //     longitude,
    //     address: `${roadAddress} ${detailAddress}`,
    //   })
    //   console.log('요청이 성공적으로 전송되었습니다:', response)
    //   // 성공 메시지 표시 또는 다른 페이지로 리다이렉트
    // } catch (e) {
    //   console.error('요청 중 오류가 발생했습니다:', e)
    //   // 사용자에게 오류 메시지 표시
    // }
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
