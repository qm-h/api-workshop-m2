import createFootPrintRapidAPI from "../apis/footprintRapidAPI/main";
import {FootPrintCategory, FootPrintParams} from "../types/FootPrint";

const footPrintRapidApi = createFootPrintRapidAPI

const FootPrintHandlers = {
    getFootPrint: async (category: FootPrintCategory, params: FootPrintParams) => {
        switch (category) {
            case FootPrintCategory.CARBON_FOOTPRINT_FROM_CAR_TRAVEL:
                return footPrintRapidApi.getFootPrintCarTravel(category, params);
            case FootPrintCategory.CARBON_FOOTPRINT_FROM_FLIGHT:
                return footPrintRapidApi.getFootPrintFlight(category, params);
            case FootPrintCategory.CARBON_FOOTPRINT_FROM_PUBLIC_TRANSIT:
                return footPrintRapidApi.getFootPrintPublicTransit(category, params);
            default:
                return {error: "Invalid category"};
        }
    }
}

export default FootPrintHandlers;