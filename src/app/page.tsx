"use client";

import { Button } from "@/main/components/Button/Button";
import { RequestForm } from "@/main/components/RequestForm/RequestForm";
import { RequestHeader } from "@/main/components/RequestHeader/RequestHeader";
import { RequestItem } from "@/main/components/RequestItem/RequestItem";
import { useProductionRequest } from "@/main/hooks/useProductionRequests";

export default function Home() {
  const { requests, create, update, remove } = useProductionRequest({
    connectionString: "ws://localhost:8080",
  });

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-semibold mt-4">Production Requests</h1>

      <div>
        <RequestForm
          dialogTitle="Create Production Request"
          button={<Button mode="primary">Create</Button>}
          onSubmit={(payload) => create(payload)}
        />
      </div>

      <RequestHeader />
      <div className="flex flex-col w-full">
        {requests.map((productionRequest) => (
          <RequestItem
            key={productionRequest.id}
            productionRequest={productionRequest}
            onSubmitEdit={(id, payload) => {
              update({
                id,
                ...payload,
              });
            }}
            onSubmitRemove={(id) => remove(id)}
          />
        ))}
      </div>
    </div>
  );
}
