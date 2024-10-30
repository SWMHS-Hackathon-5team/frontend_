import { RightArrow } from '@/assets/icons'
import * as S from './style'
import Header from '@/components/Header'
import apiClient from '@/api/apiClient'
import { useEffect, useState } from 'react'
import MainItems from '@/components/MainItems'
import { Button } from '@/components/button'
import { useNavigate } from 'react-router-dom'

const mockActivityHistory = [
  {
    date: '10월 30일',
    title: '편의점에서 메로나 사다주세요',
    distance: '400m',
    price: '50,000원',
  },
  {
    date: '10월 30일',
    title: '편의점에서 메로나 사다주세요',
    distance: '400m',
    price: '50,000원',
  },
]

const ShowHistory = () => {
  const [money, setMoney] = useState(0)
  const [activity, setActivities] = useState([])
  const navigate = useNavigate()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const moneyResponse = await apiClient.get('/money/my')
        console.log(moneyResponse)
        setMoney(moneyResponse.data.data.data.money)
      } catch (err) {
        console.error('Error fetching data:', err)
      }
    }

    fetchData()
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const moneyResponse = await apiClient.get('/request/my')
        setActivities(moneyResponse.data.data)
        console.log(moneyResponse)
      } catch (err) {
        console.error('Error fetching data:', err)
      }
    }

    fetchData()
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
        <MainItems data={mockActivityHistory} />
        <S.ActivityHistory>
          내 활동 내역 <RightArrow />
        </S.ActivityHistory>
        <MainItems data={mockActivityHistory} />
      </S.Container>
    </S.Wrapper>
  )
}

export default ShowHistory
