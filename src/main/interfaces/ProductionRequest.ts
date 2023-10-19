export interface ProductionRequest {
  id: string;

  sku: number;
  description: string;
  plan: number;

  start: Date;
  end: Date;
}
