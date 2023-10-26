import prisma from '../../prisma/prisma'
import {
  type ActivityLogPrisma,
  type ActivityPrisma,
  type CarbonEmissionsPrisma,
  type CategoryActivityPrisma,
  type FootPrintPrisma,
  type UserPrisma
} from '../types/Prisma'

const createFootprintPrisma = () => ({
  createFootPrint: async (
    idActivity: number,
    tauxEmission: number
  ): Promise<CarbonEmissionsPrisma> => {
    const creation = await prisma.carbon_emissions.create({
      data: {
        id_activity: idActivity,
        taux_emission: tauxEmission
      }
    })

    const footprint = await prisma.carbon_emissions.findUnique({
      where: {
        id_carbon: creation.id_carbon
      }
    })

    if (footprint == null) {
      throw new Error('Footprint not found')
    }

    return footprint
  },
  createActivity: async (
    idCategory: number,
    emissionCo2: number,
    description: string,
    nameActivity: string
  ): Promise<ActivityPrisma> => {
    const creation = await prisma.activity.create({
      data: {
        id_category: idCategory,
        emission_co2: emissionCo2,
        description,
        name_activity: nameActivity
      }
    })

    const footPrintActivity = await prisma.activity.findUnique({
      where: {
        id_activity: creation.id_activity
      }
    })

    if (footPrintActivity == null) {
      throw new Error('Footprint activity not found')
    }

    return footPrintActivity
  },
  createCategoryActivity: async (
    categoryName: string
  ): Promise<CategoryActivityPrisma> => {
    const creation = await prisma.category_activity.create({
      data: {
        name_category: categoryName
      }
    })

    const categoryActivity = await prisma.category_activity.findUnique({
      where: {
        id_category: creation.id_category
      }
    })

    if (categoryActivity == null) {
      throw new Error('Category activity not found')
    }

    return categoryActivity
  },
  createActivityLog: async (
    idActivity: number,
    idUser: number,
    date: Date,
    distanceParcourue: number,
    dureeActive: Date,
    idRecommendation: number | null,
    idCarbon: number
  ): Promise<ActivityLogPrisma> => {
    const creation = await prisma.activitylog.create({
      data: {
        id_activity: idActivity,
        id_user: idUser,
        date,
        distance_parcourue: distanceParcourue,
        duree_active: dureeActive,
        id_recommendation: idRecommendation,
        id_carbon: idCarbon
      }
    })

    const activityLog = await prisma.activitylog.findUnique({
      where: {
        id_log: creation.id_log
      }
    })

    if (activityLog == null) {
      throw new Error('Activity log not found')
    }

    return activityLog
  },
  findFootPrintByUser: async (user: UserPrisma) => {
    const activityLogs = await prisma.activitylog.findMany({
      where: {
        id_user: user.id_user ?? 0
      }
    })

    if (activityLogs == null) {
      throw new Error('Activity logs not found')
    }

    const footprints = await Promise.all(activityLogs.map(async (activityLog) => {
      const footprint = await prisma.carbon_emissions.findUnique({
        where: {
          id_carbon: activityLog.id_carbon ?? 0
        }
      })

      const activity = await prisma.activity.findUnique({
        where: {
          id_activity: activityLog.id_activity ?? 0
        }
      })

      const categoryActivity = await prisma.category_activity.findUnique({
        where: {
          id_category: activity?.id_category ?? 0
        }
      })

      if ((footprint == null) || (activity == null) || (categoryActivity == null)) {
        throw new Error('Footprint not found')
      }

      return {
        footPrint: footprint,
        categoryActivity,
        activity,
        activityLog
      } satisfies FootPrintPrisma
    }))

    return footprints
  }
})

export default createFootprintPrisma
