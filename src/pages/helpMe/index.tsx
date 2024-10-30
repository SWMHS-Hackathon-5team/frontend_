import Header from '@/components/Header'
import * as S from './style'
import RequestItems from '@/components/RequestItem'

import apiClient from '@/api/apiClient'
import { useEffect, useState } from 'react'
import { ApiResponse } from '@/types'

const HelpMe = () => {
  const [myRequests, setMyRequests] = useState<ApiResponse>({
    status: 0,
    message: '',
    data: [],
  })
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

  return (
    <div>
      <Header />
      <S.Wrapper>
        <S.Text>내 해주세요</S.Text>
        <RequestItems data={myRequests} />
      </S.Wrapper>
    </div>
  )
}

export default HelpMe
