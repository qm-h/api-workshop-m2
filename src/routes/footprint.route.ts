import {Request, Response, Router} from "express";
import FootprintHandlers from "../handlers/footprint.handlers";
import {
    FootPrintCarTravelVehicle,
    FootPrintCategory,
    FootPrintFlightType,
    FootPrintPublicTransitType
} from "../types/FootPrint";

class FootprintRoute {
    public readonly router: Router;

    constructor() {
        this.router = Router();
        this.router.get('/getfootprintcartravel', this.getFootPrintCarTravel);
        this.router.get('/getfootprintflight', this.getFootPrintFlight);
        this.router.get('/getfootprintpublictransit', this.getFootPrintPublicTransit);
    }

    public async getFootPrintCarTravel(req: Request, res: Response) {
        const {distance, vehicle} = req.query;

        if (!Object.values(FootPrintCarTravelVehicle).includes(vehicle as FootPrintCarTravelVehicle)) {
            res.status(400).send({error: "Invalid vehicle"});
        }

        const footprint = await FootprintHandlers.getFootPrint(FootPrintCategory.CARBON_FOOTPRINT_FROM_CAR_TRAVEL, {
            distance: distance as string,
            vehicle: vehicle as FootPrintCarTravelVehicle
        })
        if (!footprint) {
            res.status(404).send({error: "Footprint not found"});
        }
        res.send(footprint);
    }

    public async getFootPrintFlight(req: Request, res: Response) {
        const {distance, flightType} = req.query;

        if (!Object.values(FootPrintFlightType).includes(flightType as FootPrintFlightType)) {
            res.status(400).send({error: "Invalid flight type"});
        }

        const footprint = await FootprintHandlers.getFootPrint(FootPrintCategory.CARBON_FOOTPRINT_FROM_FLIGHT, {
            distance: distance as string,
            type: flightType as FootPrintFlightType
        })
        if (!footprint) {
            res.status(404).send({error: "Footprint not found"});
        }
        res.send(footprint);
    }

    public async getFootPrintPublicTransit(req: Request, res: Response) {
        const {distance, publicTansitType} = req.query;

        if (!Object.values(FootPrintPublicTransitType).includes(publicTansitType as FootPrintPublicTransitType)) {
            res.status(400).send({error: "Invalid public transit type"});
        }

        const footprint = await FootprintHandlers.getFootPrint(FootPrintCategory.CARBON_FOOTPRINT_FROM_PUBLIC_TRANSIT, {
            distance: distance as string,
            type: publicTansitType as FootPrintPublicTransitType
        })
        if (!footprint) {
            res.status(404).send({error: "Footprint not found"});
        }
        res.send(footprint);
    }

}


const createFootprintRouter = new FootprintRoute().router
export default createFootprintRouter