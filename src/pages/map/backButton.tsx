import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

export const BackButton = () => {
  return (
    <Wrapper to='/'>
      <svg
        width='18'
        height='32'
        viewBox='0 0 18 32'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M16 2L2 16L16 30'
          stroke='black'
          stroke-width='4'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </svg>
    </Wrapper>
  )
}

const Wrapper = styled(Link)`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-color: white;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 52px;
  left: 52px;
  z-index: 100;
`
