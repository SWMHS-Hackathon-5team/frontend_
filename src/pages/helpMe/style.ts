import styled from '@emotion/styled'

export const Wrapper = styled.div`
  padding: 50px 32px;
`

export const Text = styled.p`
  font-size: 2rem;
  color: #000;
  font-weight: 700;
  margin-bottom: 2rem;
`

export const FirstModalContainer = styled.div`
  width: 100%;
  width: 488px;
  height: 162px;
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

export const ModalContainer = styled.div`
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
  gap: 24px;
  justify-content: flex-end;
`
export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  z-index: 99;
`
