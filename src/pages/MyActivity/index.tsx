import Header from '@/components/Header'
import * as S from './style'
import RequestItems from '@/components/RequestItem'
import { tempData } from '@/mocks/todo'

const MyActivity = () => {
  return (
    <div>
      <Header />
      <S.Wrapper>
        <S.Text>내 해주세요</S.Text>
        <RequestItems data={tempData} />
      </S.Wrapper>
    </div>
  )
}

export default MyActivity
