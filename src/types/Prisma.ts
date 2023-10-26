// Model Activity
export interface Activity {
  id_activity: number
  name_activity: string
  emission_co2: number
  description: string | null
  id_category: number | null
  category_activity?: CategoryActivity
  activitylog: ActivityLog[]
  carbon_emissions: CarbonEmission[]
}

// Model ActivityLog
export interface ActivityLog {
  id_log: number
  id_user: number | null
  id_activity: number | null
  date: Date
  distance_parcourue: number | null
  duree_active: Date | null
  id_recommendation: number | null
  id_carbon: number | null
  activity: Activity | null
  carbon_emissions: CarbonEmission | null
  recommendations: Recommendation | null
  user: User | null
}

// Model CarbonEmission
export interface CarbonEmission {
  id_carbon: number
  id_activity: number | null
  taux_emission: number | null
  activitylog: ActivityLog[]
  activity: Activity | null
}

// Model CategoryActivity
export interface CategoryActivity {
  id_category: number
  name_category: string
  id_activity: number | null
  activity: Activity[]
  activity_category_activity_id_activityToactivity: Activity | null
}

// Model Recommendation
export interface Recommendation {
  id_recommendation: number
  description: string | null
  id_log: number | null
  activitylog_activitylog_id_recommendationTorecommendations: ActivityLog[]
  activitylog_recommendations_id_logToactivitylog: ActivityLog | null
}

// Model User
export interface User {
  id_user: number
  password: string
  mail: string
  activitylog: ActivityLog[]
}

export type CarbonEmissionsPrisma = Omit<CarbonEmission, 'activity' | 'activitylog'>
export type ActivityPrisma = Omit<Activity, 'carbon_emissions' | 'activitylog' | 'category_activity'>
export type ActivityLogPrisma = Omit<ActivityLog, 'activity' | 'carbon_emissions' | 'recommendations' | 'user'>
export type CategoryActivityPrisma = Omit<CategoryActivity, 'activity' | 'activity_category_activity_id_activityToactivity'>
export type RecommendationPrisma = Omit<Recommendation, 'activitylog_activitylog_id_recommendationTorecommendations' | 'activitylog_recommendations_id_logToactivitylog'>
export type UserPrisma = Omit<User, 'activitylog'>

export interface FootPrintPrisma {
  footPrint: CarbonEmissionsPrisma
  categoryActivity: CategoryActivityPrisma
  activity: ActivityPrisma
  activityLog: ActivityLogPrisma
}
