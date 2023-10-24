export enum FoodPrintEndpoints {
    FRENCH_NAME = "frenchname",
    CATEGORY = "category",
    GET_CATEGORIES = "getCategories"
}

export type FoodPrintParams = {
    frenchName?: string
    category?: string
}

export type FoodPrintApiResponse = {
    group: string,
    category: string,
    french_name: string,
    name: string,
    rating_quality: string,
    footprint: string,
}

export type FoodPrintCategory = {
    category: string[],
}