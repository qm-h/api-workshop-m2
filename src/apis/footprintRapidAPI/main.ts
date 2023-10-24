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
    private static headers: {
        'X-RapidAPI-Key': string,
        'X-RapidAPI-Host': string
    }

    constructor() {
        FootPrintRapidAPI.baseUrlApi = `https://carbonfootprint1.p.rapidapi.com`
        FootPrintRapidAPI.headers = {
            'X-RapidAPI-Key': 'b64edb4d04msh775fcb7d215c3b0p194a23jsne360e80e22d8',
            'X-RapidAPI-Host': 'carbonfootprint1.p.rapidapi.com'
        }
    }

    getFootPrintCarTravel = async (category: FootPrintCategory, params: FootPrintParams): Promise<number | undefined> => {
        try {
            if (category !== FootPrintCategory.CARBON_FOOTPRINT_FROM_CAR_TRAVEL) {
                throw new Error("Invalid category");
            }
            return await api.get(`${FootPrintRapidAPI.baseUrlApi}/${category}`, {
                headers: FootPrintRapidAPI.headers,
                params: params
            });
        } catch (e) {
            console.log(e);
        }
    }

    getFootPrintFlight = async (category: FootPrintCategory, params: FootPrintParams): Promise<number | undefined> => {
        try {

            if (category !== FootPrintCategory.CARBON_FOOTPRINT_FROM_FLIGHT) {
                throw new Error("Invalid category");
            }

            return await api.get(`${FootPrintRapidAPI.baseUrlApi}/${category}`, {
                headers: FootPrintRapidAPI.headers,
                params: params
            });
        } catch (e) {
            console.log(e);
        }
    }

    getFootPrintPublicTransit = async (category: FootPrintCategory, params: FootPrintParams): Promise<number | undefined> => {
        try {
            if (category !== FootPrintCategory.CARBON_FOOTPRINT_FROM_PUBLIC_TRANSIT) {
                throw new Error("Invalid category");
            }
            return await api.get(`${FootPrintRapidAPI.baseUrlApi}/${category}`,
                {
                    headers: FootPrintRapidAPI.headers,
                    params: params
                }
            )
        } catch (e) {
            console.log(e)
        }
    }
}

const createFootPrintRapidAPI = new FootPrintRapidAPI()
export default createFootPrintRapidAPI