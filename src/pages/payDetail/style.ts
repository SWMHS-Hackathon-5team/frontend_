import styled from '@emotion/styled'

export const Wrapper = styled.div`
  min-height: 100vh;
`

export const UserDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 0 36px;
  padding-top: 70px;
`

export const UserDataName = styled.p`
  font-size: 1rem;
  font-weight: 400;
  color: #000;
`
export const UserDataMoney = styled.p`
  font-size: 2.25rem;
  font-weight: 800;
  color: #000;
`

export const MintBlock = styled.div`
  margin: 20px 0;
  background-color: #e9f9fb;
  width: 100%;
  height: 12px;
`

export const PayWrappeer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 0 36px;
`

export const PayContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 12px;
`

export const DateText = styled.p`
  font-size: 1rem;
  font-weight: 500;
  color: #4d4d4d;
  display: block;
`

export const PayContentContainer = styled.div`
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const PayContentText = styled.p`
  font-size: 1.25rem;
  font-weight: 500;
  color: #000;
`

export const MoneyText = styled.p<{ color: string }>`
  font-size: 1.25rem;
  font-weight: 500;
  color: ${(props) => props.color};
`
