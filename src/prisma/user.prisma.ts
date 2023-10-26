import prisma from '../../prisma/prisma'
import { type UserPrisma } from '../types/Prisma'

const createUserPrisma = () => ({
  createUser: async (password: string, mail: string): Promise<UserPrisma> => {
    const creation = await prisma.user.create({
      data: {
        mail,
        password
      }
    })

    const user = await prisma.user.findUnique({
      where: {
        id_user: creation.id_user
      }
    })

    if (user === null) {
      throw new Error('User not found')
    }

    return user
  },
  selectUser: async (userId: string): Promise<UserPrisma> => {
    const user = await prisma.user.findUnique({
      where: {
        id_user: Number(userId)
      }
    })

    if (user === null) {
      throw new Error('User not found')
    }

    return user
  }
})

export default createUserPrisma
