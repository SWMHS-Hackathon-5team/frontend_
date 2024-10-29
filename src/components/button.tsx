import styled from '@emotion/styled'
import { theme } from '@/styles/theme'
import { ButtonHTMLAttributes } from 'react'

interface PropsType extends ButtonHTMLAttributes<HTMLButtonElement> {
  width: string | number
  height: string | number
  size: number // font-size
  weight: number // font-weight
  children: string
  onClick?: () => void
}

export const Button = ({
  width = '100%',
  height = 40,
  size = 20,
  weight = 400,
  children,
  onClick,
}: PropsType) => {
  return (
    <Wrapper
      width={width}
      height={height}
      onClick={onClick}
      size={size}
      weight={weight}
    >
      {children}
    </Wrapper>
  )
}

const Wrapper = styled.button<PropsType>`
  width: ${({ width }) => (typeof width === 'number' ? `${width}px` : width)};
  height: ${({ height }) =>
    typeof height === 'number' ? `${height}px` : height};
  font-size: ${({ size }) => `${size}px`};
  font-weight: ${({ weight }) => `${weight}px`};
  color: white;
  background: ${theme.color.gradient};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`
