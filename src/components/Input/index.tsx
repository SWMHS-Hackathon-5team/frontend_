import React, { Dispatch, SetStateAction, ChangeEvent } from 'react'
import * as S from './style'

interface Props {
  placeholder: string
  type: string
  state: string
  setState: Dispatch<SetStateAction<string>>
}

const Input: React.FC<Props> = ({ placeholder, type, state, setState }) => {
  const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value)
  }

  return (
    <S.Input
      onChange={onChangeValue}
      type={type}
      placeholder={placeholder}
      value={state}
    />
  )
}

export default Input
