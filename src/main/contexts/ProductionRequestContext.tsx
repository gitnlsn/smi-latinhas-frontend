import React, { createContext } from "react";
import {
  UseProductionRequestProps,
  useProductionRequest,
} from "../hooks/useProductionRequests";

type ProductionRequestContextProps = ReturnType<typeof useProductionRequest>;

export const ProductionRequestContext =
  createContext<ProductionRequestContextProps>(
    {} as ProductionRequestContextProps
  );

interface ProductionRequestProviderProps
  extends React.PropsWithChildren,
    UseProductionRequestProps {}

export const ProductionRequestProvider: React.FC<
  ProductionRequestProviderProps
> = ({ children, ...rest }) => {
  const hook = useProductionRequest({ ...rest });

  return (
    <ProductionRequestContext.Provider value={hook}>
      {children}
    </ProductionRequestContext.Provider>
  );
};
