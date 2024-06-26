import { PrismaGymsRepository } from '@/repositories/prisma/prisma-gyms-repository'
import { CheckInUseCase } from '../check-in'
import { PrismaCheckInsRepository } from '@/repositories/prisma/prisma-checkin-repository'

export function makeCheckInUseCase() {
  const checkInsRepository = new PrismaCheckInsRepository()
  const gymsRepository = new PrismaGymsRepository()
  const userCase = new CheckInUseCase(checkInsRepository, gymsRepository)

  return userCase
}
