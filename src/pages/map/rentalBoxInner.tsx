import React, { useEffect, useState } from 'react'
import { Battery } from '@/assets/icons'
import { Text } from '@/components/text'
import ScooterImg from '@/assets/icons/Scooter.png'
import BicycleImg from '@/assets/icons/Bicycle.png'
import { Button } from '@/components/button'
import { VehicleType } from '@/dummys/vehicle'
import { RequestType } from '.'
import apiClient from '@/api/apiClient'

interface RentalBoxInnerProps {
  onOff: () => void
  isRiding: boolean
  info: VehicleType | null
  time: RequestType | null
  onRide: () => void
}

export const RentalBoxInner: React.FC<RentalBoxInnerProps> = ({
  onOff,
  isRiding,
  info,
  time,
  onRide,
}) => {
  const [minute, setMinute] = useState<number>(0)

  const fetchRequestSucceed = async () => {
    onOff()
    await apiClient.post(`/mobility/${info?.id}`, {
      minutes: (minute / 60).toFixed(0),
    })
    setMinute(0)
  }

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null

    if (isRiding) {
      interval = setInterval(() => {
        setMinute((prev) => prev + 1)
      }, 1000)
    } else if (interval) {
      clearInterval(interval)
    }

    return () => {
      if (interval) {
        clearInterval(interval)
      }
    }
  }, [isRiding])

  if (
    !info ||
    !time ||
    time.expectedTime === null ||
    time.expectedTime === undefined
  ) {
    return null
  }

  const isBatteryAdequate = time.expectedTime * 60 < info.battery / 2

  const formattedMinute: number = parseInt(((minute ?? 0) / 60).toFixed(0))

  return (
    <React.Fragment>
      <div>
        <div>
          <div style={{ width: '100px', height: '100px' }}>
            <img src={info.type === 'bicycle' ? BicycleImg : ScooterImg} />
          </div>
          <div>
            <Text size={24} weight={700}>
              {info.name}
            </Text>
            <Text size={16} weight={500}>
              {'잔여 배터리 : ' + info.battery + '%'}
            </Text>
            <Text
              size={16}
              weight={500}
              color={
                isRiding ? '#000000' : isBatteryAdequate ? '#3689FF' : '#FF3636'
              }
            >
              {isRiding
                ? `${(minute / 60).toFixed(0)}:${(minute % 60).toFixed(0)} | 누적 ${info.unlockCost + formattedMinute * info.minCost}원`
                : isBatteryAdequate
                  ? '적합'
                  : '부적합'}
            </Text>
          </div>
        </div>
        <Battery type={getBatteryType(info.battery)} />
      </div>
      <div>
        <div>
          <Text size={16} weight={500} color='#737373'>
            잠금해제&nbsp;
          </Text>
          <Text size={16} weight={500}>
            {info.unlockCost + '원'}
          </Text>
        </div>
        <div>
          <Text size={16} weight={500} color='#737373'>
            분당요금&nbsp;
          </Text>
          <Text size={16} weight={500}>
            {info.minCost + '원'}
          </Text>
        </div>
        <div>
          <Text size={16} weight={500} color='#737373'>
            예상요금&nbsp;
          </Text>
          <Text size={16} weight={500}>
            {info.exCost + '원'}
          </Text>
        </div>
      </div>
      <div>
        <Button
          width={isBatteryAdequate ? 106 : 226}
          height={36}
          size={16}
          weight={500}
          styleType={isBatteryAdequate ? 'ghost' : 'disable'}
          disabled={!isBatteryAdequate}
          onClick={() => {
            if (!isRiding && isBatteryAdequate) onRide()
            if (isRiding) fetchRequestSucceed()
          }}
        >
          {isRiding
            ? '반납하기'
            : isBatteryAdequate
              ? '대여하기'
              : '배터리 부족으로 대여할 수 없어요!'}
        </Button>
      </div>
    </React.Fragment>
  )
}

const getBatteryType = (
  battery: number,
): 'full' | 'threeQuarter' | 'half' | 'quarter' | 'none' => {
  if (battery === 100) {
    return 'full'
  } else if (battery >= 75) {
    return 'threeQuarter'
  } else if (battery >= 50) {
    return 'half'
  } else if (battery >= 25) {
    return 'quarter'
  } else if (battery > 0) {
    return 'none'
  } else {
    return 'none'
  }
}
