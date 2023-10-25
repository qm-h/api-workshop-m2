import chatGPTHelper from "../apis/openAI/openAI.api";
import {ChatCompletionResponse} from "../types/OpenAI";

const OpenAIHandlers = {
    chatGPTHelp: async (
        message: string,
        model?: string,
        max_tokens?: number
    ): Promise<ChatCompletionResponse> => await chatGPTHelper(message, model, max_tokens),
}

export default OpenAIHandlers;