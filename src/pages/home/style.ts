import { theme } from '@/styles/theme'
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

export const Wrapper = styled.div`
  min-height: 100vh;
`

export const Container = styled.div`
  padding: 36px 37px;
`

export const PayContainer = styled.div`
  padding: 24px 36px;
  background-color: #000;
  border-radius: 8px;
  margin-bottom: 37.9px;
`

export const PayTitle = styled.p`
  font-size: 2.25rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 25.9px;
`

export const SubTitle = styled.p`
  font-size: 1rem;
  font-weight: 400;
  color: #fff;
  padding-bottom: 4px;
`

export const MoneyText = styled.p`
  font-size: 1.75rem;
  font-weight: 700;
  color: #fff;
`

export const Button = styled.button`
  background: ${theme.color.gradient};
  color: #fff;

  border-radius: 8px;
  font-size: 1rem;
  font-weight: 400;
  padding: 8px 28px;
`

export const ActivityHistory = styled(Link)`
  color: #000;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 28px;
  margin-top: 48px;
`

export const ItemLinst = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const ItemsContainer = styled.div`
  padding: 20px 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const ItemsContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const ItemsText = styled.p`
  font-size: 1rem;
  font-weight: 400;
  color: #000;
`

export const ItemsTitle = styled.p`
  size: 1.25rem;
  font-weight: 700;
  color: #000;
`

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`
