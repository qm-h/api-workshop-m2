import createFootPrintRapidAPI from '../apis/footprintRapidAPI/main'
import { type FootPrintCategory, type FootPrintParams } from '../types/FootPrint'
import createFootprintPrisma from '../prisma/footprint.prisma'
import { type FootPrintPrisma, type UserPrisma } from '../types/Prisma'

const footPrintRapidApi = createFootPrintRapidAPI()
const footPrintPrisma = createFootprintPrisma()

const FootPrintHandlers = {
  getFootPrintCarTravelHandler: async (category: FootPrintCategory, params: FootPrintParams) => await footPrintRapidApi.getFootPrintCarTravel(category, params),
  createFootPrintCarTravelHandler: async (
    user: UserPrisma,
    categoryName: string,
    emissionCo2: string,
    description: string,
    nameActivity: string,
    tauxEmission: string,
    distanceParcourue: string
  ): Promise<FootPrintPrisma> => {
    const categoryActivity = await footPrintPrisma.createCategoryActivity(
      categoryName
    )
    const activity = await footPrintPrisma.createActivity(
      categoryActivity.id_category,
      Number(emissionCo2),
      description,
      nameActivity
    )
    const footPrint = await footPrintPrisma.createFootPrint(
      activity.id_activity,
      Number(tauxEmission)
    )

    const activityLog = await footPrintPrisma.createActivityLog(
      activity.id_activity,
      user.id_user,
      new Date(),
      Number(distanceParcourue),
      new Date(),
      null,
      footPrint.id_carbon
    )

    return {
      footPrint,
      categoryActivity,
      activity,
      activityLog
    }
  },
  getFootPrintFlightHandler: async (category: FootPrintCategory, params: FootPrintParams) => await footPrintRapidApi.getFootPrintFlight(category, params),
  getFootPrintPublicTransitHandler: async (category: FootPrintCategory, params: FootPrintParams) => await footPrintRapidApi.getFootPrintPublicTransit(category, params),
  findFootPrintByUser: async (user: UserPrisma) => await footPrintPrisma.findFootPrintByUser(user)
}

export default FootPrintHandlers
