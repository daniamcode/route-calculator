import {
  carFee,
  vanFee,
  truckFee
} from '../data/constants'

export default function getFee(vehicle) {
  switch (vehicle) {
    case 'car':
      return carFee
    case 'van':
      return vanFee
    case 'truck':
      return truckFee
    default:
      return
  }
}