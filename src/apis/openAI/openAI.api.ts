import OpenAI from 'openai'
import 'dotenv/config'
import { configDotenv } from 'dotenv'
import { type ChatCompletionResponse } from '../../types/OpenAI'

configDotenv()

const openAI = new OpenAI({
  apiKey: process.env.OPEN_AI_API_KEY
})

const chatGPTHelper = async (
  message: string,
  model: string = 'gpt-3.5-turbo',
  maxTokens: number = 300
): Promise<ChatCompletionResponse> => await openAI.chat.completions.create({
  messages: [{ role: 'user', content: message }],
  model,
  max_tokens: maxTokens
})

export default chatGPTHelper
