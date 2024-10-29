import { LeftArrow } from '@/assets/icons'
import styled from '@emotion/styled'

const SubHeader = () => {
  return (
    <Wrapper>
      <Text>
        <LeftArrow />
      </Text>
      <Text>내역조회</Text>
    </Wrapper>
  )
}

export default SubHeader

const Wrapper = styled.div`
  display: 100%;
`
const Text = styled.p`
  color: #000;
  font-size: 1.5rem;
  font-weight: 700;
`
