import {
  FootPrintCarTravelVehicleType,
  FootPrintCategory,
  FootPrintFlightType,
  type FootPrintParams,
  FootPrintPublicTransitType
} from '../types/FootPrint'
import FootPrintHandlers from './footprint.handlers'
import createFootPrintRapidAPI from '../apis/footprintRapidAPI/main'

jest.mock('../apis/footprintRapidAPI/main')
const mockedFootPrintRapidAPI = createFootPrintRapidAPI as jest.Mocked<typeof createFootPrintRapidAPI>
describe('FootPrintHandlers', () => {
  beforeEach(() => {
    mockedFootPrintRapidAPI.getFootPrintCarTravel.mockResolvedValue(100)
    mockedFootPrintRapidAPI.getFootPrintFlight.mockClear()
    mockedFootPrintRapidAPI.getFootPrintPublicTransit.mockClear()
  })

  it('getFootPrintCarTravelHandler should call the API with the correct parameters', async () => {
    const category: FootPrintCategory = FootPrintCategory.CARBON_FOOTPRINT_FROM_CAR_TRAVEL
    const params: FootPrintParams = {
      distance: '100',
      vehicle: FootPrintCarTravelVehicleType.LARGE_DIESEL_CAR
    }

    await FootPrintHandlers.getFootPrintCarTravelHandler(category, params)

    expect(mockedFootPrintRapidAPI.getFootPrintCarTravel).toHaveBeenCalledWith(category, params)
  })

  it('getFootPrintFlightHandler should call the API with the correct parameters', async () => {
    const category: FootPrintCategory = FootPrintCategory.CARBON_FOOTPRINT_FROM_FLIGHT
    const params: FootPrintParams = {
      distance: '100',
      type: FootPrintFlightType.DOMESTIC_FLIGHT
    }

    await FootPrintHandlers.getFootPrintFlightHandler(category, params)

    expect(mockedFootPrintRapidAPI.getFootPrintFlight).toHaveBeenCalledWith(category, params)
  })

  it('getFootPrintPublicTransitHandler should call the API with the correct parameters', async () => {
    const category: FootPrintCategory = FootPrintCategory.CARBON_FOOTPRINT_FROM_PUBLIC_TRANSIT
    const params: FootPrintParams = {
      distance: '100',
      type: FootPrintPublicTransitType.TAXI
    }

    await FootPrintHandlers.getFootPrintPublicTransitHandler(category, params)

    expect(mockedFootPrintRapidAPI.getFootPrintPublicTransit).toHaveBeenCalledWith(category, params)
  })
})
