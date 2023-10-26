import { type Request, type Response, Router } from 'express'
import FootprintHandlers from '../handlers/footprint.handlers'
import {
  FootPrintCarTravelVehicle,
  FootPrintCategory,
  FootPrintFlightType,
  FootPrintPublicTransitType
} from '../types/FootPrint'
import UserHandlers from '../handlers/user.handlers'

class FootprintRoute {
  public readonly router: Router

  constructor () {
    this.router = Router()
    this.router.get('/getfootprintcartravel', this.getFootPrintCarTravel)
    this.router.get('/getfootprintflight', this.getFootPrintFlight)
    this.router.get('/getfootprintpublictransit', this.getFootPrintPublicTransit)
    this.router.post('/createfootprintcartravel', this.createFootPrintCarTravel)
    this.router.get('/findFootPrintByUser/:id', this.findFootPrintByUser)
  }

  public async getFootPrintCarTravel (req: Request, res: Response) {
    const { distance, vehicle } = req.query

    if (!Object.values(FootPrintCarTravelVehicle).includes(vehicle as FootPrintCarTravelVehicle)) {
      res.status(400).send({ error: 'Invalid vehicle' })
    }

    const footprint = await FootprintHandlers.getFootPrintCarTravelHandler(FootPrintCategory.CARBON_FOOTPRINT_FROM_CAR_TRAVEL, {
      distance: distance as string,
      vehicle: vehicle as FootPrintCarTravelVehicle
    })
    if (footprint === null) {
      res.status(404).send({ error: 'Footprint not found' })
    }
    res.send(footprint)
  }

  public async getFootPrintFlight (req: Request, res: Response) {
    const { distance, flightType } = req.query

    if (!Object.values(FootPrintFlightType).includes(flightType as FootPrintFlightType)) {
      res.status(400).send({ error: 'Invalid flight type' })
    }

    const footprint = await FootprintHandlers.getFootPrintFlightHandler(FootPrintCategory.CARBON_FOOTPRINT_FROM_FLIGHT, {
      distance: distance as string,
      type: flightType as FootPrintFlightType
    })
    if (footprint === null) {
      res.status(404).send({ error: 'Footprint not found' })
    }
    res.send(footprint)
  }

  public async getFootPrintPublicTransit (req: Request, res: Response) {
    const { distance, publicTansitType } = req.query

    if (!Object.values(FootPrintPublicTransitType).includes(publicTansitType as FootPrintPublicTransitType)) {
      res.status(400).send({ error: 'Invalid public transit type' })
    }

    const footprint = await FootprintHandlers.getFootPrintPublicTransitHandler(FootPrintCategory.CARBON_FOOTPRINT_FROM_PUBLIC_TRANSIT, {
      distance: distance as string,
      type: publicTansitType as FootPrintPublicTransitType
    })
    if (footprint === null) {
      res.status(404).send({ error: 'Footprint not found' })
    }
    res.send(footprint)
  }

  public async createFootPrintCarTravel (req: Request, res: Response) {
    const {
      userId,
      categoryName,
      emissionCo2,
      description,
      nameActivity,
      tauxEmission,
      distanceParcourue
    } = req.body
    const user = await UserHandlers.selectUser(userId)
    const footprint = await FootprintHandlers.createFootPrintCarTravelHandler(
      user,
      categoryName,
      emissionCo2,
      description,
      nameActivity,
      tauxEmission,
      distanceParcourue
    )
    if (footprint === null) {
      res.status(404).send({ error: 'Footprint not found' })
    }
    res.send(footprint)
  }

  public async findFootPrintByUser (req: Request, res: Response) {
    const { id } = req.params
    const user = await UserHandlers.selectUser(id)
    if (user === null) {
      res.status(404).send({ error: 'User not found' })
    }
    const footprints = await FootprintHandlers.findFootPrintByUser(user)
    if (footprints === null) {
      res.status(404).send({ error: 'Footprint not found' })
    }
    res.send(footprints)
  }
}

const createFootprintRouter = new FootprintRoute().router
export default createFootprintRouter
