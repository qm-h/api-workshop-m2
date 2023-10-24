import api from "../api";
import {FootPrintCategory, FootPrintParams} from "../../types/FootPrint";

interface FootPrintRapidAPIInterface {
    getFootPrintCarTravel: (
        category: FootPrintCategory.CARBON_FOOTPRINT_FROM_CAR_TRAVEL,
        params: FootPrintParams
    ) => Promise<number | undefined>
    getFootPrintFlight: (
        category: FootPrintCategory.CARBON_FOOTPRINT_FROM_FLIGHT,
        params: FootPrintParams
    ) => Promise<number | undefined>
}

class FootPrintRapidAPI implements FootPrintRapidAPIInterface {
    private static baseUrlApi: string

    constructor() {
        FootPrintRapidAPI.baseUrlApi = `https://carbonfootprint1.p.rapidapi.com`
    }

    getFootPrintCarTravel = async (category: FootPrintCategory.CARBON_FOOTPRINT_FROM_CAR_TRAVEL, params: FootPrintParams) => {
        try {
            return await api.get(`${FootPrintRapidAPI.baseUrlApi}/${category}`, params);
        } catch (e) {
            console.log(e);
        }
    }

    getFootPrintFlight = async (category: FootPrintCategory.CARBON_FOOTPRINT_FROM_FLIGHT, params: FootPrintParams) => {
        try {
            return await api.get(`${FootPrintRapidAPI.baseUrlApi}/${category}`, params);
        } catch (e) {
            console.log(e);
        }
    }

    getFootPrintPublicTransit = async (category: FootPrintCategory.CARBON_FOOTPRINT_FROM_PUBLIC_TRANSIT, params: FootPrintParams) => {
        try {
            return await api.get(`${FootPrintRapidAPI.baseUrlApi}/${category}`, params)
        } catch (e) {
            console.log(e)
        }
    }
}

const createFootPrintRapidAPI = new FootPrintRapidAPI()
export default createFootPrintRapidAPI