import getFee from '../scripts/getFee';

export default function costCalculator(distance, costRatio, vehicle) {
    return Math.round((distance * (parseFloat(costRatio) + getFee(vehicle)) + Number.EPSILON) * 100) / 100
}