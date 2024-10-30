import styled from '@emotion/styled'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <Wrapper>
      <Container>
        <Outlet />
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
  height: 100%;
  background-color: white;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.05);
`
