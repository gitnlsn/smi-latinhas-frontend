import { ProductionRequest } from "@/main/interfaces/ProductionRequest";
import { Edit, Trash } from "lucide-react";
import React from "react";
import { Button } from "../Button/Button";
import { RequestForm } from "../RequestForm/RequestForm";
import { RequestFormPayload } from "../RequestForm/RequestFormPayload";

interface RequestItemProps {
  productionRequest: ProductionRequest;

  onSubmitEdit: (id: string, payload: RequestFormPayload) => void;
  onSubmitRemove: (id: string) => void;
}

export const RequestItem: React.FC<RequestItemProps> = ({
  productionRequest,

  onSubmitEdit,
  onSubmitRemove,
}) => {
  return (
    <li className="flex flex-row items-center gap-2 text-smi-black-medium">
      <div className="py-2 w-[100px]">{productionRequest.sku}</div>
      <div className="py-2 flex-1 truncate">
        {productionRequest.description}
      </div>
      <div className="py-2 w-[100px]">{productionRequest.plan}</div>
      <div className="py-2 w-[230px]">{`${productionRequest.start.toLocaleDateString()} - ${productionRequest.end.toLocaleDateString()}`}</div>
      <div className="py-2 flex flex-row gap-3 w-[150px]">
        <RequestForm
          dialogTitle="Edit Production Request"
          request={productionRequest}
          button={
            <Button mode="outlined">
              <Edit className="w-4 h-4 text-smi-black-strong" />
            </Button>
          }
          onSubmit={(payload) => onSubmitEdit(productionRequest.id, payload)}
        />
        <Button onClick={() => onSubmitRemove(productionRequest.id)}>
          <Trash className="w-4 h-4 text-smi-orange-strong" />
        </Button>
      </div>
    </li>
  );
};
