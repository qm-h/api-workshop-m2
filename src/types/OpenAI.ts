export type Choice = {
    index: number;
    message: {
        role: string;
        content: string | null;
    };
    finish_reason: string;
}

export type Usage = {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
}

export type ChatCompletionResponse = {
    id: string;
    object: string;
    created: number;
    model: string;
    choices: Choice[];
    usage?: Usage;
}

export type ChatGPTData = {
    chatGPTId: string;
    chatGPTMessage: string | null;
    chatGPTFinishReason: string;
    chatGPTUsage?: Usage;
}