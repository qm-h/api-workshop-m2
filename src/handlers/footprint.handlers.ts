import createFootPrintRapidAPI from "../apis/footprintRapidAPI/main";
import {FootPrintCategory, FootPrintParams} from "../types/FootPrint";

const footPrintRapidApi = createFootPrintRapidAPI

const FootPrintHandlers = {
    getFootPrintCarTravelHandler: async (category: FootPrintCategory, params: FootPrintParams) => footPrintRapidApi.getFootPrintCarTravel(category, params),
    getFootPrintFlightHandler: async (category: FootPrintCategory, params: FootPrintParams) => footPrintRapidApi.getFootPrintFlight(category, params),
    getFootPrintPublicTransitHandler: async (category: FootPrintCategory, params: FootPrintParams) => footPrintRapidApi.getFootPrintPublicTransit(category, params)
}

export default FootPrintHandlers;