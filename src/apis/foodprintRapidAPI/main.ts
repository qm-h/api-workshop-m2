import api from '../api'
import { type FoodPrintApiResponse, type FoodPrintCategory, FoodPrintEndpoints } from '../../types/FoodPrint'

class FoodPrintRapidAPI {
  private static baseUrlApi: string
  private static headers: {
    'X-RapidAPI-Key': string
    'X-RapidAPI-Host': string
  }

  constructor () {
    FoodPrintRapidAPI.baseUrlApi = 'https://foodprint.p.rapidapi.com/api/foodprint'
    FoodPrintRapidAPI.headers = {
      'X-RapidAPI-Key': 'b64edb4d04msh775fcb7d215c3b0p194a23jsne360e80e22d8',
      'X-RapidAPI-Host': 'foodprint.p.rapidapi.com'
    }
  }

  getFoodPrintByFrenchName = async (endpoint: FoodPrintEndpoints, productName?: string): Promise<FoodPrintApiResponse | undefined> => {
    try {
      if (productName === undefined) {
        throw new Error('Invalid product name')
      }
      return await api.get(`${FoodPrintRapidAPI.baseUrlApi}/${endpoint}/${productName}`, {
        headers: FoodPrintRapidAPI.headers
      })
    } catch (e) {
      console.log(e)
    }
  }

  getFoodPrintByCategory = async (endpoint: FoodPrintEndpoints, category?: string): Promise<FoodPrintApiResponse | undefined> => {
    try {
      if (category === undefined) {
        throw new Error('Invalid category')
      }
      return await api.get(`${FoodPrintRapidAPI.baseUrlApi}/${endpoint}/${category}`, {
        headers: FoodPrintRapidAPI.headers
      })
    } catch (e) {
      console.log(e)
    }
  }

  getCategories = async (): Promise<FoodPrintCategory | undefined> => {
    try {
      return await api.get(`${FoodPrintRapidAPI.baseUrlApi}/${FoodPrintEndpoints.GET_CATEGORIES}`, {
        headers: FoodPrintRapidAPI.headers
      })
    } catch (e) {
      console.log(e)
    }
  }
}

const createFoodPrintRapidAPI = new FoodPrintRapidAPI()
export default createFoodPrintRapidAPI
