import React from 'react'
import styled from '@emotion/styled'

type PropsType = {
  size: number
  weight: number
  color?: string
  children: string | string[]
  align?: 'left' | 'center' | 'right'
}

export const Text = ({
  size,
  weight,
  children,
  color = '#000000',
  align = 'left',
}: PropsType) => {
  const textArray = Array.isArray(children) ? children : [children]

  return (
    <Wrapper size={size} weight={weight} color={color} align={align}>
      {textArray.map((text, idx) => (
        <React.Fragment key={idx}>
          {text.split('\\n').map((str, lineIdx) => (
            <React.Fragment key={lineIdx}>
              {str}
              <br />
            </React.Fragment>
          ))}
        </React.Fragment>
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.p<Omit<PropsType, 'children'>>`
  font-size: ${({ size }) => `${size}px`};
  font-weight: ${({ weight }) => `${weight}`};
  color: ${({ color }) => `${color}`};
  text-align: ${({ align }) => `${align}`};
`
