export const extractOriginFromRequest = (request: object) => {
  if (request?.stops?.length > 0) {
    const originStop = request.stops.find(stop => stop.type === 'pickup');
    if (originStop?.location) {
      return originStop.location;
    }
  }
  return null;
};

export const extractDestinationFromRequest = (request: object) => {
  if (request?.stops?.length > 0) {
    const destinationStop = request.stops.find(stop => stop.type === 'delivery');
    if (destinationStop?.location) {
      return destinationStop.location;
    }
  }
  return null;
};

export const extractEquipmentTypeFromRequest = (request: object) => {
  return request?.equipment?.requestedType || null;
};

export const extractHistoricalDataFromDat=(dat:object)=>{
  return dat?.byLeg[0]?.historicalRates?.historicalData
}
