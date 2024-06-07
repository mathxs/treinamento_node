import { prisma } from '@/lib/prisma'
import { Prisma } from '@prisma/client'
import { UserRepositoty } from '../users-repository'

export class PrismaUsersRepository implements UserRepositoty {
  async findByID(id: string) {
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    })
    return user
  }

  async findByEmail(email: string) {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    })
    return user
  }

  async create(data: Prisma.UserCreateInput) {
    const user = await prisma.user.create({
      data,
    })

    return user
  }
}
