import OpenAI from "openai";
import 'dotenv/config';
import {configDotenv} from "dotenv";
import {ChatCompletionResponse} from "../../types/OpenAI";

configDotenv();

const openAI = new OpenAI({
    apiKey: process.env.OPEN_AI_API_KEY
})


const chatGPTHelper = async (
    message: string,
    model: string = 'gpt-3.5-turbo',
    max_tokens: number = 300
): Promise<ChatCompletionResponse> => await openAI.chat.completions.create({
    messages: [{role: 'user', content: message}],
    model,
    max_tokens,
});

export default chatGPTHelper;
