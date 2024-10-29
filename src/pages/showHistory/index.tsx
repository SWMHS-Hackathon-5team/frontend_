import { RightArrow } from '@/assets/icons'
import * as S from './style'
import Header from '@/components/Header'

const mockPaymentData = {
  title: 'SWING PAY',
  amount: '34,500 원',
}

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
  return (
    <div>
      <Header />
      <S.Wrapper>
        <S.PayContainer>
          <S.PayTitle>{mockPaymentData.title}</S.PayTitle>
          <S.FlexContainer>
            <S.MoneyText>{mockPaymentData.amount}</S.MoneyText>
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
