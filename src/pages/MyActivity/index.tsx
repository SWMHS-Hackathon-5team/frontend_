import Header from '@/components/Header'
import * as S from './style'
import RequestItems from '@/components/RequestItem'
import { tempData } from '@/mocks/todo'
import apiClient from '@/api/apiClient'
import { useEffect, useState } from 'react'
import { ApiResponse } from '@/types'

const MyActivity = () => {
  const [myActive, setMyActive] = useState<ApiResponse>({
    status: 0,
    message: '',
    data: [],
  })
  const fetchActive = async () => {
    try {
      const response = await apiClient.get('/work/my')
      setMyActive(response.data)
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
        <S.Text>내 활동 내역</S.Text>
        <RequestItems data={myActive} />
      </S.Wrapper>
    </div>
  )
}

export default MyActivity
