import { type Request, type Response, Router } from 'express'
import OpenAIHandlers from '../handlers/openAI.handlers'
import { type ChatGPTData } from '../types/OpenAI'

class OpenAIRoute {
  public readonly router: Router

  constructor () {
    this.router = Router()
    this.router.post('/chatgptHelper', this.chatgptHelper)
  }

  public async chatgptHelper (req: Request, res: Response) {
    const { message, model, maxTokens } = req.body
    const response = await OpenAIHandlers.chatGPTHelp(message, model, maxTokens)

    if (response === null) res.status(500).send({ error: 'Something went wrong' })
    if (response.choices[0].message.content === null) res.status(500).send({ error: 'Aucune réponse trouvée' })

    const openAIResponse: ChatGPTData = {
      chatGPTId: response.id,
      chatGPTMessage: response.choices[0].message.content,
      chatGPTFinishReason: response.choices[0].finish_reason,
      chatGPTUsage: response.usage
    }
    res.send(openAIResponse)
  }
}

const createOpenAIRouter = new OpenAIRoute().router
export default createOpenAIRouter
