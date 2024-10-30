import React, { Dispatch, SetStateAction } from 'react'
import * as S from './style'

type ReqType = 'NON' | 'DOING' | 'WAITING' | 'SUCCESS' | 'FAILED'

interface StatusConfig {
  text: string
  color: string
}

interface RequestItem {
  id: string | number
  createdDt?: string
  updateDt?: string
  title: string
  reqType: ReqType
  price: string | number
}

interface RequestItemsProps {
  data: {
    data: RequestItem[]
  }
  setIsModalOpen: Dispatch<SetStateAction<boolean>>
  setSelectedRequestId: Dispatch<SetStateAction<string | number | null>>
  setSelectedReqType: Dispatch<SetStateAction<string | null>> // Add this prop
}

const STATUS_CONFIG: Record<ReqType, StatusConfig> = {
  NON: { text: '라이더 대기 중', color: '#ccc' },
  DOING: { text: '의뢰 진행 중', color: '#B20CFF' },
  WAITING: { text: '완료 승인 대기 중', color: '#35C8DA' },
  SUCCESS: { text: '의뢰 완료', color: '#3689FF' },
  FAILED: { text: '의뢰 실패', color: '#ccc' },
}

const RequestItems: React.FC<RequestItemsProps> = ({
  data,
  setIsModalOpen,
  setSelectedRequestId,
  setSelectedReqType, // Add this prop
}) => {
  const getStatus = (reqType: ReqType): StatusConfig =>
    STATUS_CONFIG[reqType] || { text: '', color: '#000' }

  const formatDate = (dateString?: string): string => {
    if (!dateString) return '날짜 없음'
    const date = new Date(dateString)
    const month = date.getMonth() + 1
    const day = date.getDate()
    return `${month}월 ${day}일`
  }

  const handleClick = (reqType: ReqType, id: string | number) => {
    if (reqType === 'WAITING') {
      console.log('Clicked item ID:', id)
      setSelectedRequestId(id)
      setSelectedReqType(reqType) // Set reqType here
      setIsModalOpen(true)
    }
  }

  return (
    <div>
      {data.data.map((item: RequestItem) => {
        const { text: statusText, color: statusColor } = getStatus(item.reqType)

        return (
          <S.ItemsContainer
            onClick={() => handleClick(item.reqType, item.id)}
            key={item.id}
          >
            <S.ItemsText>
              {formatDate(item.createdDt || item.updateDt)}
            </S.ItemsText>
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
