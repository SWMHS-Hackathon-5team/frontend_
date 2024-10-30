import { RightArrow } from '@/assets/icons'
import * as S from './style'
import Header from '@/components/Header'
import apiClient from '@/api/apiClient'
import { useEffect, useState } from 'react'

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
  return (
    <div>
      <Header />
      <S.Wrapper>
        <S.PayContainer>
          <S.PayTitle>SWING PAY</S.PayTitle>
          <S.FlexContainer>
            <S.MoneyText>{money}</S.MoneyText>
            <S.Button>상세 조회하기</S.Button>
          </S.FlexContainer>
        </S.PayContainer>
        <S.ActivityHistory>
          활동 내역 조회하기 <RightArrow />
        </S.ActivityHistory>

        {mockActivityHistory.map((item, index) => (
          <S.ItemsContainer key={index}>
            <S.ItemsText>{item.date}</S.ItemsText>
            <S.ItemsContentsContainer>
              <S.FlexContainer>
                <S.ItemsTitle>{item.title}</S.ItemsTitle>
                <S.ItemsText>{item.distance}</S.ItemsText>
              </S.FlexContainer>
              <S.ItemsText style={{ marginLeft: 'auto' }}>
                {item.price}
              </S.ItemsText>
            </S.ItemsContentsContainer>
          </S.ItemsContainer>
        ))}
      </S.Wrapper>
    </div>
  )
}

export default ShowHistory
