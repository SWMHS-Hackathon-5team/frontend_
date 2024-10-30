import Header from '@/components/Header'
import * as S from './style'
import apiClient from '@/api/apiClient'
import { useEffect, useState } from 'react'
import { theme } from '@/styles/theme'

interface PaymentTransaction {
  id: number
  amount: number
  logType: string
  createdDt: string
  content: string
}

interface PaymentData {
  [date: string]: PaymentTransaction[]
}

const PayDetail = () => {
  const [money, setMoney] = useState<number>(0)
  const [response, setResponse] = useState<PaymentData>({})

  useEffect(() => {
    const fetchMoney = async () => {
      try {
        const response = await apiClient.get('/money/my')
        setMoney(response.data.data.money)
      } catch (err) {
        console.error('Error fetching money:', err)
      }
    }

    const fetchData = async () => {
      try {
        const moneyResponse = await apiClient.get<{ data: PaymentData }>(
          '/account-logs',
        )
        setResponse(moneyResponse.data.data)
      } catch (err) {
        console.error('Error fetching data:', err)
      }
    }

    fetchMoney()
    fetchData()
  }, [])

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
        <S.UserDataMoney>{money}원</S.UserDataMoney>
      </S.UserDataContainer>
      <S.MintBlock />
      <S.PayWrappeer>
        {Object.entries(response).map(([key, value]) => (
          <S.PayContainer key={key}>
            <S.DateText>{formatDate(key)}</S.DateText>
            <S.PayContentContainer>
              {value.map((item) => (
                <S._PayContainer key={item.id}>
                  <S.PayContentText>
                    {item.logType === 'RENTAL'
                      ? `전동차 ${item.content} 대여비`
                      : item.content}
                  </S.PayContentText>
                  <S.MoneyText
                    color={
                      item.amount >= 0
                        ? `${theme.color.blue}`
                        : `${theme.color.purple}`
                    }
                  >
                    {item.amount >= 0 ? '+' : ''}
                    {formatAmount(item.amount)}
                  </S.MoneyText>
                </S._PayContainer>
              ))}
            </S.PayContentContainer>
          </S.PayContainer>
        ))}
      </S.PayWrappeer>
    </S.Wrapper>
  )
}

export default PayDetail
