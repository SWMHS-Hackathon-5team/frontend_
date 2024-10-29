import React from 'react'
import styled from '@emotion/styled'

type PropsType = {
  size: number
  weight: number
  color?: string
  children: string
  align?: 'left' | 'center' | 'right'
}

export const Text = ({
  size,
  weight,
  children,
  color = '#000000',
  align = 'left',
}: PropsType) => {
  const processedText = children.replace(/\\n/g, '\n')

  return (
    <Wrapper size={size} weight={weight} color={color} align={align}>
      {processedText.split('\n').map((str, idx) => (
        <React.Fragment key={idx}>
          {str}
          <br />
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
