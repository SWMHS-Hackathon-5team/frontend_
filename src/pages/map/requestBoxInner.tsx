import { Button } from '@/components/button'
import { Text } from '@/components/text'
import React from 'react'
import { RequestType } from '.'
import apiClient from '@/api/apiClient'
import { useBoolean } from '@/context/boolContext'

export const RequestBoxInner = ({
  info,
  onAccept,
  isAccept,
  onSuccess,
}: {
  info: RequestType | null
  onAccept: () => void
  isAccept: boolean
  onSuccess: () => void
}) => {
  const { _setValue } = useBoolean()

  if (info === null) return

  const fetchRequestsData = async () => {
    const response = await apiClient.patch(`/work/${info.id}`)
    return response
  }

  const fetchRequestSucceed = async () => {
    const response = await apiClient.patch(`/work/${info.id}/succeed`)
    return response
  }

  // const userId =
  //   typeof window !== 'undefined' ? localStorage.getItem('userId') || '' : ''

  return (
    <React.Fragment>
      <div>
        <Text size={24} weight={700}>
          {info.title}
        </Text>
        <div>
          <Text size={16} weight={400} color='#A6A6A6'>
            {'작성자 : ' + info.writerName}
          </Text>
          <Text size={16} weight={400} color='#A6A6A6'>
            {info.createdDt}
          </Text>
        </div>
        <Text size={16} weight={400}>
          {info.content}
        </Text>
        <div>
          <Text size={16} weight={500}>
            {'예상 소요 시간 : ' + (info.expectedTime * 60).toFixed(1) + '분'}
          </Text>
          <Text size={16} weight={500}>
            {'예상 거리 : ' + info.expectedDistance.toFixed(1) + 'm'}
          </Text>
        </div>
        {!isAccept && (
          <Text size={20} weight={700}>
            {info.price.toFixed(1) + '원'}
          </Text>
        )}
      </div>
      <div>
        <Button
          width={isAccept ? 174 : 140}
          height={36}
          size={16}
          weight={500}
          styleType='ghost'
          onClick={() => {
            if (isAccept) {
              fetchRequestSucceed().then(() => {
                onSuccess()
                _setValue(true)
              })
            } else {
              fetchRequestsData().then((res) => {
                onAccept()
                _setValue(false)
              })
            }
          }}
        >
          {isAccept ? '의뢰 완료 요청하기' : '제가 해줄게요'}
        </Button>
      </div>
    </React.Fragment>
  )
}
