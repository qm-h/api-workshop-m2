import {FoodPrintEndpoints, FoodPrintParams} from "../types/FoodPrint";
import createFoodPrintRapidAPI from "../apis/foodprintRapidAPI/main";

const foodPrintRapidAPI = createFoodPrintRapidAPI

const FoodPrintHandlers = {
    getFoodPrintByFrenchName: async (params: FoodPrintParams) => foodPrintRapidAPI.getFoodPrintByFrenchName(
        FoodPrintEndpoints.FRENCH_NAME,
        params.frenchName
    ),
    getFoodPrintByCategory: async (params: FoodPrintParams) => foodPrintRapidAPI.getFoodPrintByFrenchName(
        FoodPrintEndpoints.CATEGORY,
        params.category
    ),
    getCategories: async () => foodPrintRapidAPI.getCategories()
}

export default FoodPrintHandlers;