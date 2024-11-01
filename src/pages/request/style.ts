import styled from '@emotion/styled'

export const Wrapper = styled.div`
  padding: 32px 50px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`

export const Title = styled.p`
  font-size: 2rem;
  font-weight: 700;
  color: #000;
`

export const SubTitle = styled.p`
  margin-top: 4px;
  font-size: 1rem;
  font-weight: 400;
  color: #4d4d4d;
`

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const InputTitle = styled.p`
  font-size: 1.25rem;
  font-weight: 700;
  color: #000;
`

export const InputSubTitle = styled.p`
  font-size: 1rem;
  font-weight: 500;
  color: #000;
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const TextAreaContainer = styled.div`
  padding: 10px 12px;
  background-color: #f5f5f5;
  border-radius: 4px;
  align-items: center;
  display: flex;
`

export const TextArea = styled.textarea`
  padding: 0;
  width: 100%;
  background-color: transparent;
  border: none;
  color: #929292;
  font-size: 1rem;
  font-weight: 500;
  resize: none;
  overflow: hidden;
`

export const Label = styled.label`
  display: flex;
  background-color: #f5f5f5;
  width: 100%;
  border-radius: 4px;
  align-items: center;
  padding-right: 12px;
  font-size: 1rem;
  font-weight: 700;
  color: #000;
`

export const ModalContainer = styled.div`
  width: 100%;
  width: 448px;
  height: 258px;
  padding: 36px 38px;
  background-color: #fff;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const ModalTitle = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  color: #000;
`

export const ModalContent = styled.p`
  margin-top: 16px;
  margin-bottom: 24px;
  font-size: 1rem;
  font-weight: 500;
  color: #000;
`

export const ModalButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`
export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); // Semi-transparent background
  backdrop-filter: blur(5px); // Apply blur effect
  z-index: 99; // Ensure it's behind the modal but above other content
`
