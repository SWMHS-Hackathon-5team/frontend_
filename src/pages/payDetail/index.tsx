import Header from '@/components/Header'
import * as S from './style'
import apiClient from '@/api/apiClient'
import { useEffect, useState } from 'react'
import { theme } from '@/styles/theme'
import { mockPay } from '@/mocks/pay'

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
        {mockPay.map((data) => (
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
