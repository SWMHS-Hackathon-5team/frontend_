import * as S from './style'

interface Props {
  placeholder: string
  type: string
}

const Input = ({ placeholder, type }: Props) => {
  return <S.Input type={type} placeholder={placeholder} />
}

export default Input
