import { ProductionRequest } from "@/main/interfaces/ProductionRequest";

export interface RequestFormPayload extends Omit<ProductionRequest, "id"> {}
