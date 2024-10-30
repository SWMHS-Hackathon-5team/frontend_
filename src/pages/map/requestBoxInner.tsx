import { Button } from '@/components/button'
import { Text } from '@/components/text'
import React from 'react'

export const RequestBoxInner = () => {
  return (
    <React.Fragment>
      <div>
        <Text size={24} weight={700}>
          핫식스 좀 사다주세요!
        </Text>
        <div>
          <Text size={16} weight={400} color='#A6A6A6'>
            작성자 : Myowww
          </Text>
          <Text size={16} weight={400} color='#A6A6A6'>
            2024.10.29 13:25:42
          </Text>
        </div>
        <Text size={16} weight={400}>
          지금 여기서 해커톤 하고있는데 핫식스 사오는 걸 까먹었어요 ㅜㅜ\n
          핫식스 한 캔만 사다주세요~ 빨리!!\n 3만원에 핫식스비 따로
          얹어드릴게요!
        </Text>
        <div>
          <Text size={16} weight={500}>
            예상 소요 시간 : 30분
          </Text>
          <Text size={16} weight={500}>
            예상 거리 : 432m
          </Text>
        </div>
        <Text size={20} weight={700}>
          30,000원
        </Text>
      </div>
      <div>
        <Button
          width={140}
          height={36}
          size={16}
          weight={500}
          styleType='ghost'
        >
          제가 해줄게요
        </Button>
      </div>
    </React.Fragment>
  )
}
