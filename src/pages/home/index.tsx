import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { RightArrow } from '@/assets/icons'
import * as S from './style'
import Header from '@/components/Header'
import apiClient from '@/api/apiClient'
import { Button } from '@/components/button'
import RequestItems from '@/components/RequestItem'

// Types
type ReqType = 'NON' | 'DOING' | 'WAITING' | 'SUCCESS' | 'FAILED'

interface RequestItem {
  id: number
  title: string
  content: string
  createdDt: string
  price: number
  latitude: number
  longitude: number
  reqType: ReqType
  isSucceed: boolean
  address: string
}

interface ApiResponse {
  status: number
  message: string
  data: RequestItem[]
}

const Home = () => {
  const [money, setMoney] = useState<number>(0)
  const [myRequests, setMyRequests] = useState<ApiResponse>({
    status: 0,
    message: '',
    data: [],
  })
  const navigate = useNavigate()

  useEffect(() => {
    const fetchMoney = async () => {
      try {
        const response = await apiClient.get('/money/my')
        setMoney(response.data.data.data.money)
      } catch (err) {
        console.error('Error fetching money:', err)
      }
    }

    const fetchRequests = async () => {
      try {
        const response = await apiClient.get('/request/my')
        setMyRequests(response.data)
      } catch (err) {
        console.error('Error fetching requests:', err)
      }
    }

    fetchMoney()
    fetchRequests()
  }, [])

  const handlePayDetailNavigate = () => {
    navigate('/pay-detail')
  }

  const tempData: ApiResponse = {
    status: 0,
    message: 'string',
    data: [
      {
        id: 0,
        title: '핫식스 좀 사다주세용~',
        content: '핫식스 좀 사다주세용~',
        createdDt: '2024-10-30T04:06:35.763Z',
        price: 50000,
        latitude: 0,
        longitude: 0,
        reqType: 'NON',
        isSucceed: true,
        address: 'string',
      },
      {
        id: 2,
        title: '우리집 고양이 구경하러 오세요',
        content: '우리집 고양이 구경하러 오세요',
        createdDt: '2024-10-29T04:06:35.763Z',
        price: 0,
        latitude: 0,
        longitude: 0,
        reqType: 'DOING',
        isSucceed: true,
        address: 'string',
      },
      {
        id: 3,
        title: '명함 수령 대신 해주세요!',
        content: '명함 수령 대신 해주세요!',
        createdDt: '2024-10-28T04:06:35.763Z',
        price: 0,
        latitude: 0,
        longitude: 0,
        reqType: 'WAITING',
        isSucceed: true,
        address: 'string',
      },
      {
        id: 4,
        title: '제 레포트 좀 내주세요...',
        content: '제 레포트 좀 내주세요...',
        createdDt: '2024-10-27T04:06:35.763Z',
        price: 0,
        latitude: 0,
        longitude: 0,
        reqType: 'SUCCESS',
        isSucceed: true,
        address: 'string',
      },
      {
        id: 5,
        title: '생일 케이크 픽업 해주세요',
        content: '생일 케이크 픽업 해주세요',
        createdDt: '2024-10-26T04:06:35.763Z',
        price: 0,
        latitude: 0,
        longitude: 0,
        reqType: 'FAILED',
        isSucceed: true,
        address: 'string',
      },
    ],
  }

  return (
    <S.Wrapper>
      <Header />
      <S.Container>
        <S.PayContainer>
          <S.PayTitle>SWING PAY</S.PayTitle>
          <S.FlexContainer>
            <S.MoneyText>{money}</S.MoneyText>
            <Button
              onClick={handlePayDetailNavigate}
              width={148}
              height={36}
              size={16}
              weight={400}
            >
              상세 조회하기
            </Button>
          </S.FlexContainer>
        </S.PayContainer>
        <S.ActivityHistory>
          내 해주세요 <RightArrow />
        </S.ActivityHistory>
        <RequestItems data={tempData} />
        <S.ActivityHistory>
          내 활동 내역 <RightArrow />
        </S.ActivityHistory>
        <RequestItems data={tempData} />
      </S.Container>
    </S.Wrapper>
  )
}

export default Home
