export enum FootPrintCategory {
    CARBON_FOOTPRINT_FROM_CAR_TRAVEL = "CarbonFootprintFromCarTravel",
    CARBON_FOOTPRINT_FROM_FLIGHT = "CarbonFootprintFromFlight",
    CARBON_FOOTPRINT_FROM_PUBLIC_TRANSIT = "CarbonFootprintFromPublicTransit",
    CARBON_FOOTPRINT_FROM_MOTOR_BIKE = "CarbonFootprintFromMotorBike",
    FUEL_TO_CO2E = "FuelToCO2e",
    CLEAN_HYDRO_TO_CARBON_FOOTPRINT = "CleanHydroToCarbonFootprint",
    TRADITIONAL_HYDRO_TO_CARBON_FOOTPRINT = "TraditionalHydroToCarbonFootprint",
    AIR_QUALITY_HEALTH_INDEX = "AirQualityHealthIndex",
}

export type FootPrintCarTravelParams = {
    distance: string, // in km
    vehicle: FootPrintCarTravelVehicle
}

export type FootPrintGenericParams = {
    distance: string, // in km
    type: FootPrintFlightType | FootPrintPublicTransitType
}

export type FootPrintParams = FootPrintCarTravelParams | FootPrintGenericParams

export enum FootPrintFlightType {
    DOMESTIC_FLIGHT = "DomesticFlight",
    SHORT_ECONOMY_CLASS_FLIGHT = "ShortEconomyClassFlight",
    SHORT_BUSINESS_CLASS_FLIGHT = "ShortBusinessClassFlight",
    LONG_ECONOMY_CLASS_FLIGHT = "LongEconomyClassFlight",
    LONG_PREMIUM_CLASS_FLIGHT = "LongPremiumClassFlight",
    LONG_BUSINESS_CLASS_FLIGHT = "LongBusinessClassFlight",
    LONG_FIRST_CLASS_FLIGHT = "LongFirstClassFlight",
}

export enum FootPrintCarTravelVehicle {
    SMALL_DIESEL_CAR = "SmallDieselCar",
    MEDIUM_DIESEL_CAR = "MediumDieselCar",
    LARGE_DIESEL_CAR = "LargeDieselCar",
    SMALL_PETROL_CAR = "SmallPetrolCar",
    MEDIUM_PETROL_CAR = "MediumPetrolCar",
    LARGE_PETROL_CAR = "LargePetrolCar",
    SMALL_PLUGIN_HYBRID_CAR = "SmallPluginHybridCar",
    MEDIUM_PLUGIN_HYBRID_CAR = "MediumPluginHybridCar",
    LARGE_PLUGIN_HYBRID_CAR = "LargePluginHybridCar",
}

export enum FootPrintPublicTransitType {
    TAXI = "Taxi",
    BUS = "Bus",
    TRAIN = "Train",
    SUBWAY = "Subway",
}