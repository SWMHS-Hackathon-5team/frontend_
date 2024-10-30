import styled from '@emotion/styled'
import { Button } from './button'
import { Link, useLocation } from 'react-router-dom'
import { theme } from '@/styles/theme'
import BarcodeImg from '@/assets/icons/Barcode.png'

export const Footer = () => {
  const { pathname } = useLocation()

  const notRenderedPathArray = ['/signin', '/signup']

  if (notRenderedPathArray.includes(pathname)) {
    return
  }

  return (
    <Wrapper>
      <Link to={''}>
        <Button
          width={122}
          height={40}
          size={20}
          weight={500}
          styleType={pathname !== '' && 'ghost'}
        >
          해주세요
        </Button>
      </Link>
      <Link to={''}>
        <MiddleButton isSelected={pathname === '/'}>
          <img src={BarcodeImg} />
        </MiddleButton>
      </Link>
      <Link to={''}>
        <Button
          width={122}
          height={40}
          size={20}
          weight={500}
          styleType={pathname !== '' && 'ghost'}
        >
          해줄게요
        </Button>
      </Link>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 608px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 48px;
  background-color: white;
  position: fixed;
  bottom: 0;
  z-index: 50;
`

const MiddleButton = styled.div<{ isSelected: boolean }>`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  color: ${({ isSelected }) => (isSelected ? 'white' : '#000000')};
  background: ${({ isSelected }) =>
    isSelected ? theme.color.gradient : 'white'};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  bottom: 40px;

  ${({ isSelected }) =>
    !isSelected &&
    `
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: 50%;
      padding: 5px;
      background: ${theme.color.gradient};
      -webkit-mask: 
        linear-gradient(#fff 0 0) content-box, 
        linear-gradient(#fff 0 0);
      -webkit-mask-composite: xor;
      mask-composite: exclude;
      pointer-events: none;
    }`}
`
