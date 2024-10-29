import Input from '@/components/Input'
import { StyledParagraph, TestWrapper } from './style'

const Test = () => {
  return (
    <div>
      <TestWrapper>
        <StyledParagraph>하이</StyledParagraph>
        <input />
      </TestWrapper>
      <Input placeholder='하이' type='text' />
    </div>
  )
}

export default Test
