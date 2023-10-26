import chatGPTHelper from '../apis/openAI/openAI.api'
import { type ChatCompletionResponse } from '../types/OpenAI'

const OpenAIHandlers = {
  chatGPTHelp: async (
    message: string,
    model?: string,
    maxTokens?: number
  ): Promise<ChatCompletionResponse> => await chatGPTHelper(message, model, maxTokens)
}

export default OpenAIHandlers
