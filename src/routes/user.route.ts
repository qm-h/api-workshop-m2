import { type Request, type Response, Router } from 'express'
import UserHandlers from '../handlers/user.handlers'

class UserRoute {
  public readonly router: Router

  constructor () {
    this.router = Router()
    this.router.post('/createUser', this.createUser)
    this.router.get('/findUserById/:id', this.findUserById)
  }

  public async createUser (req: Request, res: Response) {
    const { password, mail } = req.body
    const user = await UserHandlers.createUser(
      {
        password: password as string,
        mail: mail as string
      }
    )
    if (user === null) {
      res.status(404).send({ error: 'User not found' })
    }
    res.send(user)
  }

  public async findUserById (req: Request, res: Response) {
    const { id } = req.params
    console.log(id)
    const user = await UserHandlers.selectUser(
      id
    )
    if (user === null) {
      res.status(404).send({ error: 'User not found' })
    }
    res.send(user)
  }
}

const createUserRouter = new UserRoute().router
export default createUserRouter
