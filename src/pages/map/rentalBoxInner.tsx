import { Battery } from '@/assets/icons'
import { Text } from '@/components/text'
import React from 'react'
import ScooterImg from '@/assets/icons/Scooter.png'
import BicycleImg from '@/assets/icons/Bicycle.png'
import { Button } from '@/components/button'

const batteryLevel = 100

export const RentalBoxInner = () => {
  return (
    <React.Fragment>
      <div>
        <div>
          <img src={ScooterImg} />
          <div>
            <Text size={24} weight={700}>
              BCGAXMX
            </Text>
            <Text size={16} weight={500}>
              잔여 배터리 : 15%
            </Text>
            <Text size={16} weight={500} color='#FF3636'>
              부적합
            </Text>
          </div>
        </div>
        {(() => {
          if (batteryLevel === 100) {
            return <Battery type='full' />
          } else if (batteryLevel >= 75) {
            return <Battery type='threeQuarter' />
          } else if (batteryLevel >= 50) {
            return <Battery type='half' />
          } else if (batteryLevel >= 25) {
            return <Battery type='quarter' />
          } else if (batteryLevel > 0) {
            return <Battery type='none' />
          } else {
            return <Battery type='none' />
          }
        })()}
      </div>
      <div>
        <div>
          <Text size={16} weight={500} color='#737373'>
            잠금해제&nbsp;
          </Text>
          <Text size={16} weight={500}>
            1,500원
          </Text>
        </div>
        <div>
          <Text size={16} weight={500} color='#737373'>
            분당요금&nbsp;
          </Text>
          <Text size={16} weight={500}>
            450원
          </Text>
        </div>
        <div>
          <Text size={16} weight={500} color='#737373'>
            예상요금&nbsp;
          </Text>
          <Text size={16} weight={500}>
            13,500원
          </Text>
        </div>
      </div>
      <div>
        <Button
          width={106}
          height={36}
          size={16}
          weight={500}
          styleType='ghost'
        >
          대여하기
        </Button>
      </div>
    </React.Fragment>
  )
}
