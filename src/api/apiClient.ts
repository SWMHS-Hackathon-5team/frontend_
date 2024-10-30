import axios from 'axios'

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_CLIENT_API,
})

apiClient.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('accessToken')
    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

export default apiClient
