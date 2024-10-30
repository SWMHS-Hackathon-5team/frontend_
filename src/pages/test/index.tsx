import React, { useState } from 'react'
import axios from 'axios'

const KAKAO_REST_API_KEY = `${import.meta.env.VITE_KAKAO_REST_API}`

interface Coordinates {
  lat: number
  lng: number
}

const AddressConverter: React.FC = () => {
  const [address, setAddress] = useState<string>('')
  const [coordinates, setCoordinates] = useState<Coordinates | null>(null)

  const convertAddressToCoordinates = async (
    address: string,
  ): Promise<Coordinates | null> => {
    try {
      const url = `https://dapi.kakao.com/v2/local/search/address.json?query=${encodeURIComponent(address)}`
      const response = await axios.get(url, {
        headers: {
          Authorization: `KakaoAK ${KAKAO_REST_API_KEY}`,
        },
      })

      if (response.status === 200 && response.data.documents.length > 0) {
        const { x, y } = response.data.documents[0].address
        return {
          lat: parseFloat(y),
          lng: parseFloat(x),
        }
      }
    } catch (error) {
      console.error('Error converting address:', error)
    }
    return null
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const result = await convertAddressToCoordinates(address)
    setCoordinates(result)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder='Enter address'
        />
        <button type='submit'>Convert</button>
      </form>
      {coordinates && (
        <div>
          <p>Latitude: {coordinates.lat}</p>
          <p>Longitude: {coordinates.lng}</p>
        </div>
      )}
    </div>
  )
}

export default AddressConverter
