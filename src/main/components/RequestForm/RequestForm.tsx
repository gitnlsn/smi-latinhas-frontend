import React, { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { ProductionRequest } from "@/main/interfaces/ProductionRequest";
import { RequestFormPayload } from "./RequestFormPayload";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";

interface RequestFormProps {
  onSubmit: (request: RequestFormPayload) => void;
  request?: ProductionRequest;

  dialogTitle: string;
  button: React.ReactNode;

  clearOnSubmit?: boolean;
  closeOnSubmit?: boolean;
}

export const RequestForm: React.FC<RequestFormProps> = ({
  onSubmit,
  request,

  dialogTitle,
  button,

  clearOnSubmit = true,
  closeOnSubmit = true,
}) => {
  const [open, setOpen] = useState(false);

  const [payload, setPayload] = useState<Partial<RequestFormPayload>>({});

  useEffect(() => {
    if (request !== undefined) {
      setPayload(request);
    }
  }, [open]);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger>{button}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black opacity-25 fixed inset-0" />
        <Dialog.Content className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-smi-white border border-slate-200 shadow-lg rounded-lg p-4 flex flex-col gap-4">
          <Dialog.Title className="font-semibold text-2xl">
            {dialogTitle}
          </Dialog.Title>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              onSubmit(payload as RequestFormPayload);
              if (clearOnSubmit) {
                setPayload({});
              }

              if (closeOnSubmit) {
                setOpen(false);
              }
            }}
            className="flex flex-col p-2 gap-3"
          >
            <div className="flex flex-row gap-4">
              <Input
                type="number"
                placeholder="SKU"
                value={payload.sku}
                onChange={(event) =>
                  setPayload((current) => ({
                    ...current,
                    sku: Number.isFinite(Number(event.target.value))
                      ? Number(event.target.value)
                      : 0,
                  }))
                }
              />
              <Input
                type="number"
                placeholder="Plan (ton)"
                value={payload.plan}
                onChange={(event) =>
                  setPayload((current) => ({
                    ...current,
                    plan: Number.isFinite(Number(event.target.value))
                      ? Number(event.target.value)
                      : 0,
                  }))
                }
              />
            </div>
            <Input
              type="string"
              placeholder="Description"
              value={payload.description}
              onChange={(event) =>
                setPayload((current) => ({
                  ...current,
                  description: event.target.value,
                }))
              }
            />

            <div className="flex flex-row justify-between">
              <div className="flex-1 ml-1">Start</div>
              <div className="flex-1 ml-6">End</div>
            </div>
            <div className="flex flex-row gap-6">
              <Input
                type="date"
                placeholder="Start"
                value={payload.start?.toISOString().split("T")[0]}
                onChange={(event) =>
                  setPayload((current) => ({
                    ...current,
                    start: event.target.valueAsDate ?? undefined,
                  }))
                }
              />
              <Input
                type="date"
                placeholder="End"
                value={payload.end?.toISOString().split("T")[0]}
                onChange={(event) =>
                  setPayload((current) => ({
                    ...current,
                    end: event.target.valueAsDate ?? undefined,
                  }))
                }
              />
            </div>

            <Button type="submit" mode="primary">
              Submit
            </Button>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
