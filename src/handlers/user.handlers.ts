import createUserPrisma from '../prisma/user.prisma'
import { type UserPrisma } from '../types/Prisma'

const userPrisma = createUserPrisma()

const UserHandlers = {
  createUser: async (user: Omit<UserPrisma, 'id_user'>) => await userPrisma.createUser(
    user.password,
    user.mail
  ),
  selectUser: async (userId: string) => await userPrisma.selectUser(userId)
}

export default UserHandlers
