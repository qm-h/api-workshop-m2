export enum FoodPrintEndpoints {
  FRENCH_NAME = 'frenchname',
  CATEGORY = 'category',
  GET_CATEGORIES = 'getCategories'
}

export interface FoodPrintParams {
  frenchName?: string
  category?: string
}

export interface FoodPrintApiResponse {
  group: string
  category: string
  french_name: string
  name: string
  rating_quality: string
  footprint: string
}

export interface FoodPrintCategory {
  category: string[]
}
