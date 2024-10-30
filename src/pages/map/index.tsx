import styled from '@emotion/styled'
import { useEffect, useState } from 'react'
import ReactDOMServer from 'react-dom/server'
import { BackButton } from './backButton'
import MarkerImg from '@/assets/icons/Marker.png'
import { Loader } from './loader'
import { useOutsideClick } from '@/hooks/useOutsideClick'
import { RequestBoxInner } from './requestBoxInner'
import { Bubble } from '@/assets/icons/Bubble'
import { RentalBoxInner } from './rentalBoxInner'
import { VehicleType, vehicleDummy } from '@/dummys/vehicle'
import FullImg from '@/assets/icons/battery/full.png'
import QuarterImg from '@/assets/icons/battery/quarter.png'
import HalfImg from '@/assets/icons/battery/half.png'
import ThreeQuarterImg from '@/assets/icons/battery/threeQuarter.png'
import NoneImg from '@/assets/icons/battery/none.png'
import apiClient from '@/api/apiClient'

export const Map = () => {
  const [location, setLocation] = useState<{
    latitude: number
    longitude: number
  } | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const [isRentalBoxOpen, setIsRentalBoxOpen] = useState<number | null>(null)
  const [isRequestBoxOpen, setIsRequestBoxOpen] = useState<boolean>(false)
  const renRef = useOutsideClick(() => {
    setIsRentalBoxOpen(null)
  })
  const reqRef = useOutsideClick(() => {
    setIsRequestBoxOpen(false)
  })
  const [vehicle, _] = useState<VehicleType[]>(vehicleDummy)
  const [requests, setRequests] = useState()

  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setLocation({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            })
            setLoading(false)
          },
          (err) => {
            setError(err.message)
            setLoading(false)
          },
        )
      } else {
        setError('Geolocation is not supported by this browser.')
        setLoading(false)
      }
    }

    getLocation()
  }, [])

  useEffect(() => {
    const fetchRequestsData = async () => {
      const response = await apiClient.get(
        `/request?latitude=${location?.latitude}&longitude=${location?.longitude}`,
      )
      return response
    }

    if (location) {
      fetchRequestsData()
        .then((res) => {
          setRequests(res.data.data)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }, [location])

  useEffect(() => {
    if (location && window.kakao && window.kakao.maps) {
      const container = document.getElementById('map')
      if (container) {
        const options = {
          center: new window.kakao.maps.LatLng(
            location.latitude,
            location.longitude,
          ),
          level: 3,
        }

        const map = new window.kakao.maps.Map(container, options)
        const ratio = 0.8

        vehicle.forEach((item) => {
          let imageSrc = null
          if (item.battery === 100) {
            imageSrc = FullImg
          } else if (item.battery >= 75) {
            imageSrc = ThreeQuarterImg
          } else if (item.battery >= 50) {
            imageSrc = HalfImg
          } else if (item.battery >= 25) {
            imageSrc = QuarterImg
          } else if (item.battery > 0) {
            imageSrc = NoneImg
          } else {
            imageSrc = NoneImg
          }
          const imageSize = new window.kakao.maps.Size(ratio * 85, ratio * 85)
          const imageOption = {
            offset: new window.kakao.maps.Point(ratio * 37.5, ratio * 84.75),
          }

          const markerImage = new window.kakao.maps.MarkerImage(
            imageSrc,
            imageSize,
            imageOption,
          )

          const markerPosition = new window.kakao.maps.LatLng(
            item.latitude,
            item.longitude,
          )

          const marker = new window.kakao.maps.Marker({
            position: markerPosition,
            image: markerImage,
          })

          marker.setMap(map)

          window.kakao.maps.event.addListener(marker, 'click', () => {
            setIsRentalBoxOpen(item.id)
          })
        })

        // vehicle.forEach((item) => {
        //   const imageSrc = MarkerImg
        //   const imageSize = new window.kakao.maps.Size(
        //     ratio * 75,
        //     ratio * 84.75,
        //   )
        //   const imageOption = {
        //     offset: new window.kakao.maps.Point(ratio * 37.5, ratio * 84.75),
        //   }

        //   const markerImage = new window.kakao.maps.MarkerImage(
        //     imageSrc,
        //     imageSize,
        //     imageOption,
        //   )

        //   const markerPosition = new window.kakao.maps.LatLng(
        //     item.latitude,
        //     item.longitude,
        //   )

        //   const marker = new window.kakao.maps.Marker({
        //     position: markerPosition,
        //     image: markerImage,
        //   })

        //   marker.setMap(map)

        //   const content = ReactDOMServer.renderToString(
        //     <Bubble ratio={ratio} />,
        //   )
        //   const position = new window.kakao.maps.LatLng(
        //     location.latitude,
        //     location.longitude,
        //   )

        //   const customOverlay = new window.kakao.maps.CustomOverlay({
        //     position: position,
        //     content: content,
        //     xAnchor: 0.5,
        //     yAnchor: 2,
        //   })

        //   window.kakao.maps.event.addListener(marker, 'click', () => {
        //     customOverlay.setMap(map)
        //     map.setCenter(markerPosition)
        //   })

        //   window.kakao.maps.event.addListener(map, 'click', () => {
        //     customOverlay.setMap(null)
        //   })
        // })
      }
    }
  }, [location])

  return (
    <Wrapper>
      <BackButton />
      {isRentalBoxOpen && (
        <RentalBox ref={renRef}>
          <RentalBoxInner />
        </RentalBox>
      )}
      {isRequestBoxOpen && (
        <RequestBox ref={reqRef}>
          <RequestBoxInner />
        </RequestBox>
      )}

      {error && <div>Error: {error}</div>}
      {loading ? (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      ) : (
        <div id='map' style={{ width: '100%', height: '100vh' }} />
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`

const LoaderWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const RentalBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  gap: 20px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.25);
  width: 536px;
  z-index: 101;
  top: 48px;
  left: 36px;
  padding: 36px;

  & > div:nth-of-type(1) {
    display: flex;
    justify-content: space-between;
    & > div {
      display: flex;
      gap: 20px;
    }
  }

  & > div:nth-of-type(2) {
    display: flex;
    justify-content: space-between;
    width: 464px;
    height: 44px;
    border-radius: 8px;
    background-color: #f0f0f0;
    padding: 0 20px;
    align-items: center;
    & > div {
      display: flex;
    }
  }

  & > div:nth-of-type(3) {
    display: flex;
    justify-content: end;
  }
`

const RequestBox = styled.div`
  position: absolute;
  gap: 20px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.25);
  width: 536px;
  z-index: 101;
  top: 48px;
  left: 36px;
  padding: 36px;

  & > div:nth-of-type(1) {
    display: flex;
    flex-direction: column;
    gap: 16px;
    & > div {
      display: flex;
      gap: 20px;
    }
  }

  & > div:nth-of-type(2) {
    display: flex;
    justify-content: end;
  }
`