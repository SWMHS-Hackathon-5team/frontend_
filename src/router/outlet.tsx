import { Footer } from '@/components/footer'
import { useBoolean } from '@/context/boolContext'
import styled from '@emotion/styled'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
  const { value } = useBoolean()

  return (
    <Wrapper>
      <Container>
        <Outlet />
        {value && <Footer />}
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: #f5f5f7;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Container = styled.div`
  width: 608px;
  height: 100vh;
  overflow: auto;
  padding-bottom: 140px;
  &::-webkit-scrollbar {
    width: 0;
  }
  background-color: white;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.05);
  position: relative;
`
