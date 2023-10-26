import prisma from '../../prisma/prisma'
import { type UserPrisma } from '../types/Prisma'
import { comparePassword } from '../utils/user/security/crypt'

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
  },
  login: async (password: string, mail: string): Promise<Omit<UserPrisma, 'password'>> => {
    const user = await prisma.user.findFirst({
      where: {
        mail
      }
    })

    if (user === null) {
      throw new Error('User not found')
    }

    const canLogin = await comparePassword(password, user.password)

    if (!canLogin) {
      throw new Error('Password is incorrect')
    }

    return {
      id_user: user.id_user,
      mail: user.mail
    }
  }
})

export default createUserPrisma
