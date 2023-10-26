import { type ChatCompletionResponse } from '../types/OpenAI'
import OpenAIHandlers from './openAI.handlers'
import chatGPTHelper from '../apis/openAI/openAI.api'

jest.mock('../apis/openAI/openAI.api')
const mockedChatGPTHelper = chatGPTHelper as jest.MockedFunction<typeof chatGPTHelper>
describe('OpenAIHandlers', () => {
  beforeEach(() => {
    mockedChatGPTHelper.mockClear()
  })

  it('chatGPTHelp should call the chatGPTHelper function with the correct parameters', async () => {
    const message = 'Test message'
    const model = 'gpt-3.5-turbo'
    const maxTokens = 50

    const expectedResponse: ChatCompletionResponse = {
      choices: [
        {
          index: 0,
          message: {
            role: 'bot',
            content: 'Message content'
          },
          finish_reason: 'stop'
        }
      ],
      created: 123456789,
      id: 'cmpl-123456789',
      model: 'gpt-3.5-turbo',
      object: 'text_completion'
    }

    // Mock the chatGPTHelper function to return the expected response
    mockedChatGPTHelper.mockResolvedValue(expectedResponse)

    const response = await OpenAIHandlers.chatGPTHelp(message, model, maxTokens)

    expect(response).toEqual(expectedResponse)
    expect(mockedChatGPTHelper).toHaveBeenCalledWith(message, model, maxTokens)
  })
})
