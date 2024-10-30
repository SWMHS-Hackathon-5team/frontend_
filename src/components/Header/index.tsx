import { theme } from '@/styles/theme'
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo to={'/'}>TANOMU!</Logo>
    </HeaderWrapper>
  )
}

export default Header

const HeaderWrapper = styled.header`
  width: 100%;
  background-color: #fff;
  padding-top: 65px;
  padding-left: 36px;
`

const Logo = styled(Link)`
  font-weight: 700;
  font-size: 3.125rem;
  background: ${theme.color.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`
