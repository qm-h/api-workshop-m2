import createUserPrisma from '../prisma/user.prisma'
import { type UserPrisma } from '../types/Prisma'
import { hashPassword } from '../utils/user/security/crypt'

const userPrisma = createUserPrisma()

const UserHandlers = {
  createUser: async (user: Omit<UserPrisma, 'id_user'>) => await userPrisma.createUser(
    await hashPassword(user.password),
    user.mail
  ),
  selectUser: async (userId: string) => await userPrisma.selectUser(userId),
  login: async (user: Omit<UserPrisma, 'id_user'>) => await userPrisma.login(
    user.password,
    user.mail
  )
}

export default UserHandlers
