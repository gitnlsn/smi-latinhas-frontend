"use client";

import { useEffect, useRef, useState } from "react";
import { ProductionRequest } from "../interfaces/ProductionRequest";
import { ioWrapper } from "../api/apiSocket";
import { Socket } from "socket.io-client";
import { ApiEventMap } from "../api/ApiEventMap";
import { CreateProductionRequestDTO } from "../interfaces/CreateProductionRequestDTO";
import { UpdateProductionRequestDTO } from "../interfaces/UpdateProductionRequestDTO";
import { parseProductionRequests } from "../utils/parseProductionRequests";

export interface UseProductionRequestProps {
  connectionString: string;
}

export const useProductionRequest = ({
  connectionString,
}: UseProductionRequestProps) => {
  const [requests, setRequests] = useState<ProductionRequest[]>([]);
  const socket = useRef<Socket<ApiEventMap> | null>(null);
  useEffect(() => {
    if (socket.current !== null) {
      return;
    }

    socket.current = ioWrapper(connectionString);
    socket.current.connect();

    socket.current.on("createdProductionRequest", (newRequest) => {
      setRequests((current) => [
        ...current,
        parseProductionRequests(newRequest),
      ]);
    });

    socket.current.on("updatedProductionRequest", (updatedRequest) => {
      setRequests((current) =>
        current.map((request) => {
          if (request.id === updatedRequest.id) {
            return parseProductionRequests(updatedRequest);
          }

          return request;
        })
      );
    });

    socket.current.on("removedProductionRequest", (removedRequest) => {
      setRequests((current) =>
        current.filter((request) => request.id !== removedRequest.id)
      );
    });

    socket.current.on("connect", () => {
      socket.current?.emit(
        "findAllProductionRequests",
        // @ts-expect-error
        (productionRequests) => {
          setRequests(
            productionRequests.map((p: ProductionRequest) =>
              parseProductionRequests(p)
            )
          );
        }
      );
    });
  }, []);

  const create = (dto: CreateProductionRequestDTO) => {
    socket.current?.emit("createProductionRequest", dto);
  };

  const update = (dto: UpdateProductionRequestDTO) => {
    socket.current?.emit("updateProductionRequest", dto);
  };

  const remove = (id: string) => {
    socket.current?.emit("removeProductionRequest", id);
  };

  return {
    requests,
    create,
    update,
    remove,
  };
};
