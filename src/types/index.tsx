type ReqType = 'NON' | 'DOING' | 'WAITING' | 'SUCCESS' | 'FAILED'
interface RequestItem {
  id: number
  title: string
  content: string
  createdDt: string
  price: number
  latitude: number
  longitude: number
  reqType: ReqType
  isSucceed: boolean
  address: string
}

export interface ApiResponse {
  status: number
  message: string
  data: RequestItem[]
}
