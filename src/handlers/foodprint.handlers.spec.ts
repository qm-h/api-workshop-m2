import { FoodPrintEndpoints, type FoodPrintParams } from '../types/FoodPrint'
import createFoodPrintRapidAPI from '../apis/foodprintRapidAPI/main'
import FoodPrintHandlers from './foodprint.handlers'

jest.mock('../apis/foodprintRapidAPI/main')
const mockedFoodPrintRapidAPI = createFoodPrintRapidAPI as jest.Mocked<typeof createFoodPrintRapidAPI>

describe('FoodPrintHandlers', () => {
  beforeEach(() => {
    mockedFoodPrintRapidAPI.getFoodPrintByFrenchName.mockClear()
    mockedFoodPrintRapidAPI.getCategories.mockClear()
  })

  it('getFoodPrintByFrenchName should call the API with the correct parameters', async () => {
    const params: FoodPrintParams = { frenchName: 'ExampleFrenchName' }

    await FoodPrintHandlers.getFoodPrintByFrenchName(params)

    expect(mockedFoodPrintRapidAPI.getFoodPrintByFrenchName).toHaveBeenCalledWith(FoodPrintEndpoints.FRENCH_NAME, 'ExampleFrenchName')
  })

  it('getFoodPrintByCategory should call the API with the correct parameters', async () => {
    const params: FoodPrintParams = { category: 'ExampleCategory' }

    await FoodPrintHandlers.getFoodPrintByCategory(params)

    expect(mockedFoodPrintRapidAPI.getFoodPrintByFrenchName).toHaveBeenCalledWith(FoodPrintEndpoints.CATEGORY, 'ExampleCategory')
  })

  it('getCategories should call the API to get categories', async () => {
    await FoodPrintHandlers.getCategories()

    expect(mockedFoodPrintRapidAPI.getCategories).toHaveBeenCalled()
  })
})
