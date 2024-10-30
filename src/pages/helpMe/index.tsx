import React, { useEffect, useState } from 'react'
import Header from '@/components/Header'
import * as S from './style'
import RequestItems from '@/components/RequestItem'
import apiClient from '@/api/apiClient'
import { ApiResponse } from '@/types'
import { Button } from '@/components/button'

const HelpMe = () => {
  const [myRequests, setMyRequests] = useState<ApiResponse>({
    status: 0,
    message: '',
    data: [],
  })
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] =
    useState<boolean>(false)
  const [selectedRequestId, setSelectedRequestId] = useState<
    string | number | null
  >(null)

  // New state for reqType
  const [selectedReqType, setSelectedReqType] = useState<string | null>(null)

  const fetchActive = async () => {
    try {
      const response = await apiClient.get('/request/my')
      setMyRequests(response.data)
    } catch (err) {
      console.error('Error fetching requests:', err)
    }
  }

  useEffect(() => {
    fetchActive()
  }, [])

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const handleAPIModal = async () => {
    if (selectedRequestId === null || selectedReqType === null) {
      console.error('No request ID or type selected')
      return
    }

    console.log(selectedReqType)

    try {
      await apiClient.patch(`/request/${selectedRequestId}?reqType=SUCCESS`)

      setIsModalOpen(true)
    } catch (e) {
      console.error('요청 중 오류가 발생했습니다:', e)
    }
    fetchActive()
    closeModal()
    setIsConfirmationModalOpen(true)
  }
  return (
    <div>
      <Header />
      <S.Wrapper>
        <S.Text>내 해주세요</S.Text>
        <RequestItems
          setIsModalOpen={setIsModalOpen}
          setSelectedRequestId={setSelectedRequestId}
          setSelectedReqType={setSelectedReqType}
          data={myRequests}
        />

        {isModalOpen && (
          <>
            <S.Backdrop />
            <S.FirstModalContainer>
              <S.ModalTitle>의뢰를 끝내시겠습니까?</S.ModalTitle>
              <S.ModalButtonContainer>
                <Button
                  onClick={closeModal}
                  styleType='ghost'
                  size={16}
                  weight={700}
                  width={78}
                  height={36}
                >
                  취소
                </Button>
                <Button
                  onClick={handleAPIModal}
                  size={16}
                  weight={700}
                  width={78}
                  height={36}
                >
                  확인
                </Button>
              </S.ModalButtonContainer>
            </S.FirstModalContainer>
          </>
        )}

        {isConfirmationModalOpen && (
          <>
            <S.Backdrop />
            <S.ModalContainer>
              <div>
                <S.ModalTitle>의뢰 완료!</S.ModalTitle>
                <S.ModalContent>
                  해주세요가 종료되었습니다! 라이더에게 의뢰 완료 알림이
                  전달되었습니다.
                </S.ModalContent>
              </div>
              <S.ModalButtonContainer>
                <Button
                  onClick={() => {
                    setIsConfirmationModalOpen(false)
                  }}
                  styleType='ghost'
                  size={16}
                  weight={700}
                  width={78}
                  height={36}
                >
                  확인
                </Button>
              </S.ModalButtonContainer>
            </S.ModalContainer>
          </>
        )}
      </S.Wrapper>
    </div>
  )
}

export default HelpMe
