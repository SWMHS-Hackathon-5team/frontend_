export interface VehicleType {
  id: number
  name: string
  battery: number
  unlockCost: number
  minCost: number
  exCost: number
  type: 'bicycle' | 'scooter'
  latitude: number
  longitude: number
}

export const vehicleDummy: VehicleType[] = [
  {
    id: 1,
    name: 'HCDAEIM',
    battery: 51,
    unlockCost: 800,
    minCost: 190,
    exCost: 5700,
    type: 'bicycle',
    latitude: 36.3515,
    longitude: 127.3454,
  },
  {
    id: 2,
    name: 'KJDFLAK',
    battery: 74,
    unlockCost: 1500,
    minCost: 450,
    exCost: 13500,
    type: 'scooter',
    latitude: 36.3525,
    longitude: 127.3454,
  },
  {
    id: 3,
    name: 'YUIOQWE',
    battery: 32,
    unlockCost: 850,
    minCost: 200,
    exCost: 5900,
    type: 'bicycle',
    latitude: 36.3545,
    longitude: 127.3479,
  },
]
