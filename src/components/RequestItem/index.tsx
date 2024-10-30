import React from 'react'
import * as S from './style'

type ReqType = 'NON' | 'DOING' | 'WAITING' | 'SUCCESS' | 'FAILED'

interface StatusConfig {
  text: string
  color: string
}

interface RequestItem {
  id: string | number
  createdDt: string
  title: string
  reqType: ReqType
  price: string | number
}

interface RequestItemsProps {
  data: {
    data: RequestItem[]
  }
}

const STATUS_CONFIG: Record<ReqType, StatusConfig> = {
  NON: { text: '라이더 대기 중', color: '#ccc' },
  DOING: { text: '의뢰 진행 중', color: '#B20CFF' },
  WAITING: { text: '완료 승인 대기 중', color: '#35C8DA' },
  SUCCESS: { text: '의뢰 완료', color: '#3689FF' },
  FAILED: { text: '의뢰 실패', color: '#ccc' },
}

const RequestItems: React.FC<RequestItemsProps> = ({ data }) => {
  const getStatus = (reqType: ReqType): StatusConfig =>
    STATUS_CONFIG[reqType] || { text: '', color: '#000' }

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString)
    const month = date.getMonth() + 1 // getMonth()는 0부터 시작하므로 1을 더합니다
    const day = date.getDate()
    return `${month}월 ${day}일`
  }

  return (
    <div>
      {data.data.map((item: RequestItem) => {
        const { text: statusText, color: statusColor } = getStatus(item.reqType)
        return (
          <S.ItemsContainer key={item.id}>
            <S.ItemsText>{formatDate(item.createdDt)}</S.ItemsText>
            <S.ItemsContentsContainer>
              <S.FlexContainer>
                <S.ItemsTitle>{item.title}</S.ItemsTitle>
                <S.ReqTypeState style={{ color: statusColor }}>
                  {statusText}
                </S.ReqTypeState>
              </S.FlexContainer>
              <S.ItemsText style={{ marginLeft: 'auto' }}>
                {item.price}
              </S.ItemsText>
            </S.ItemsContentsContainer>
          </S.ItemsContainer>
        )
      })}
    </div>
  )
}

export default RequestItems
