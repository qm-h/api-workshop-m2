export interface Choice {
  index: number
  message: {
    role: string
    content: string | null
  }
  finish_reason: string
}

export interface Usage {
  prompt_tokens: number
  completion_tokens: number
  total_tokens: number
}

export interface ChatCompletionResponse {
  id: string
  object: string
  created: number
  model: string
  choices: Choice[]
  usage?: Usage
}

export interface ChatGPTData {
  chatGPTId: string
  chatGPTMessage: string | null
  chatGPTFinishReason: string
  chatGPTUsage?: Usage
}
