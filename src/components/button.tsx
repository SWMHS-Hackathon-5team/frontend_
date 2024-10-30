import styled from '@emotion/styled'
import { ButtonHTMLAttributes } from 'react'

interface PropsType extends ButtonHTMLAttributes<HTMLButtonElement> {
  width: string | number
  height: string | number
  size: number // font-size
  weight: number // font-weight
  children: string
  styleType?: 'solid' | 'ghost'
}

export const Button = ({
  width = '100%',
  height = 40,
  size = 20,
  weight = 400,
  children,
  styleType = 'solid',
  ...props
}: PropsType) => {
  return (
    <Wrapper
      width={width}
      height={height}
      size={size}
      weight={weight}
      styleType={styleType}
      {...props}
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
  font-weight: ${({ weight }) => `${weight}`};
  color: ${({ styleType }) => (styleType === 'solid' ? 'white' : '#000000')};
  background: ${({ styleType }) =>
    styleType === 'solid'
      ? 'linear-gradient(90deg, #3689ff 0%, #b20cff 100%)'
      : 'white'};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: none;
  cursor: pointer;

  ${({ styleType }) =>
    styleType === 'ghost' &&
    `
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: 8px;
      padding: 3px;
      background: linear-gradient(90deg, #3689ff 0%, #b20cff 100%);
      -webkit-mask: 
        linear-gradient(#fff 0 0) content-box, 
        linear-gradient(#fff 0 0);
      -webkit-mask-composite: xor;
      mask-composite: exclude;
      pointer-events: none;
    }
  `}
`
