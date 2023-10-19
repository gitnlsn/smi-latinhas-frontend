import { ProductionRequest } from "../interfaces/ProductionRequest";

export interface ApiEventMap {
  findAllProductionRequests: () => void;
  createProductionRequest: (
    createdRequest: Omit<ProductionRequest, "id">
  ) => void;
  updateProductionRequest: (
    createdRequest: Partial<ProductionRequest> & { id: string }
  ) => void;
  removeProductionRequest: (id: string) => void;

  createdProductionRequest: (createdRequest: ProductionRequest) => void;
  updatedProductionRequest: (updatedRequest: ProductionRequest) => void;
  removedProductionRequest: (removedRequest: ProductionRequest) => void;
}
