import Header from '@/components/Header'
import * as S from './style'
import apiClient from '@/api/apiClient'
import { useEffect, useState } from 'react'
import { theme } from '@/styles/theme'

const PayDetail = () => {
  const [response, setResponse] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const moneyResponse = await apiClient.get('/account-logs')
        console.log(moneyResponse)
        setResponse(moneyResponse.data.data.data.money)
      } catch (err) {
        console.error('Error fetching data:', err)
      }
    }

    fetchData()
  }, [])

  const mockActivityHistory = [
    {
      id: 1,
      amount: +3000,
      logType: 'NON',
      createdDt: '2024-10-30T02:28:52.449Z',
      content: '바퀴벌레 잡아주세요 ㅜㅜ',
    },
    {
      id: 2,
      amount: -5000,
      logType: 'DOING',
      createdDt: '2024-10-30T02:28:52.449Z',
      content: '전동자전거 HCDAEIM 대여비',
    },
    {
      id: 3,
      amount: -6000,
      logType: 'WAITING',
      createdDt: '2024-10-30T02:28:52.449Z',
      content: '전동자전거 HCDAEIM 대여비',
    },
    {
      id: 4,
      amount: -7000,
      logType: 'SUCCESS',
      createdDt: '2024-10-30T02:28:52.449Z',
      content: '바퀴벌레 잡아주세요 ㅜㅜ',
    },
    {
      id: 5,
      amount: +9000,
      logType: 'FAILED',
      createdDt: '2024-10-30T02:28:52.449Z',
      content: '바퀴벌레 잡아주세요 ㅜㅜ',
    },
  ]

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString)
    return `${date.getMonth() + 1}월 ${date.getDate()}일`
  }

  const formatAmount = (amount: number): string => {
    return amount.toLocaleString() + '원'
  }
  const userId = localStorage.getItem('userId')

  return (
    <S.Wrapper>
      <Header />
      <S.UserDataContainer>
        <S.UserDataName>{userId}님의 SWING PAY</S.UserDataName>
        <S.UserDataMoney>34,500원</S.UserDataMoney>
      </S.UserDataContainer>
      <S.MintBlock />
      <S.PayWrappeer>
        {mockActivityHistory.map((data) => (
          <S.PayContainer key={data.id}>
            <S.DateText>{formatDate(data.createdDt)}</S.DateText>
            <S.PayContentContainer>
              <S.PayContentText>{data.content}</S.PayContentText>
              <S.MoneyText
                color={
                  data.amount >= 0
                    ? `${theme.color.blue}`
                    : `${theme.color.purple}`
                }
              >
                {data.amount >= 0 ? '+' : ''}
                {formatAmount(data.amount)}
              </S.MoneyText>
            </S.PayContentContainer>
          </S.PayContainer>
        ))}
      </S.PayWrappeer>
    </S.Wrapper>
  )
}

export default PayDetail
