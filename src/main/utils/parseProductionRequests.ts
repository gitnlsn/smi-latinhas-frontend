import { ProductionRequest } from "../interfaces/ProductionRequest";

export const parseProductionRequests = (
  pRequest: ProductionRequest
): ProductionRequest => ({
  ...pRequest,
  start: new Date(pRequest.start),
  end: new Date(pRequest.end),
});
