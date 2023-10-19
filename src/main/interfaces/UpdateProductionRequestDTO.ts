import { ProductionRequest } from "./ProductionRequest";

export type UpdateProductionRequestDTO = Partial<ProductionRequest> & {
  id: string;
};
