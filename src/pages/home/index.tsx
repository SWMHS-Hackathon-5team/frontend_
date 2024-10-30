import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { RightArrow } from '@/assets/icons'
import * as S from './style'
import Header from '@/components/Header'
import apiClient from '@/api/apiClient'
import { Button } from '@/components/button'
import RequestItems from '@/components/RequestItem'
import { tempData } from '@/mocks/todo'

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

  return (
    <S.Wrapper>
      <Header />
      <S.Container>
        <S.PayContainer>
          <S.PayTitle>SWING PAY</S.PayTitle>
          <S.FlexContainer>
            <div>
              <S.SubTitle>잔여 포인트</S.SubTitle>
              <S.MoneyText>{money} 원</S.MoneyText>
            </div>
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
        <S.ActivityHistory to='help-me'>
          내 해주세요 <RightArrow />
        </S.ActivityHistory>
        <RequestItems data={{ data: tempData.data.slice(0, 2) }} />
        <S.ActivityHistory to='/my-activity'>
          내 활동 내역 <RightArrow />
        </S.ActivityHistory>
        <RequestItems data={{ data: tempData.data.slice(0, 2) }} />
      </S.Container>
    </S.Wrapper>
  )
}

export default Home
