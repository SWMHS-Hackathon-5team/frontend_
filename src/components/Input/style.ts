import styled from '@emotion/styled'

export const Input = styled.input`
  width: 100%;
  background-color: #f5f5f5;
  color: #929292;
  padding: 10px 12px;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 4px;

  &[type='number'] {
    -moz-appearance: textfield;
  }

  &[type='number']::-webkit-inner-spin-button,
  &[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`
