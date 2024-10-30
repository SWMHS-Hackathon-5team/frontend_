import * as S from './style'

const MainItems = ({ data }) => {
  return (
    <div>
      {data.map((item, index) => (
        <S.ItemsContainer key={index}>
          <S.ItemsText>{item.date}</S.ItemsText>
          <S.ItemsContentsContainer>
            <S.FlexContainer>
              <S.ItemsTitle>{item.title}</S.ItemsTitle>
              <S.RiderState>{item.distance}</S.RiderState>
            </S.FlexContainer>
            <S.ItemsText style={{ marginLeft: 'auto' }}>
              {item.price}
            </S.ItemsText>
          </S.ItemsContentsContainer>
        </S.ItemsContainer>
      ))}
    </div>
  )
}

export default MainItems
