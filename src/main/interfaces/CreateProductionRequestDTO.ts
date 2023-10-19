import { ProductionRequest } from "./ProductionRequest";

export type CreateProductionRequestDTO = Omit<ProductionRequest, "id">;
