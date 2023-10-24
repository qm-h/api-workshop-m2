import {Request, Response, Router} from "express";
import FoodPrintHandlers from "../handlers/foodprint.handlers";

class FoodPrintRoute {
    public readonly router: Router;

    constructor() {
        this.router = Router();
        this.router.get('/getfoodprint', this.getFoodPrint);
        this.router.get('/getfoodprintbycategory', this.getFoodPrintByCategory);
        this.router.get('/getCategories', this.getCategories);
    }

    public async getFoodPrint(req: Request, res: Response) {
        const {frenchName} = req.query;

        const footprint = await FoodPrintHandlers.getFoodPrintByFrenchName(
            {
                frenchName: frenchName as string,
            }
        )
        if (!footprint) {
            res.status(404).send({error: "Footprint not found"});
        }
        res.send(footprint);
    }

    public async getFoodPrintByCategory(req: Request, res: Response) {
        const {category} = req.query;

        const footprint = await FoodPrintHandlers.getFoodPrintByCategory(
            {
                category: category as string,
            }
        )
        if (!footprint) {
            res.status(404).send({error: "Footprint not found"});
        }
        res.send(footprint);
    }

    public async getCategories(req: Request, res: Response) {
        const categories = await FoodPrintHandlers.getCategories();
        if (!categories) {
            res.status(404).send({error: "Categories not found"});
        }
        res.send(categories);
    }
}


const createFoodPrintRouter = new FoodPrintRoute().router
export default createFoodPrintRouter