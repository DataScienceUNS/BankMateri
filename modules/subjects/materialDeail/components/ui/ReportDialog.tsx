"use client";

import { Button } from "@/components/ui/button";
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/modules/shadcn/ui/dialog";
import { Field, FieldDescription, FieldGroup, FieldLabel } from "@/modules/shadcn/ui/field";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/modules/shadcn/ui/select";
import { Textarea } from "@/modules/shadcn/ui/textarea";
import { handlingReportMaterial } from "../../actions/handlingReportMaterial";
import { ReportReasonSelection } from "@/config/ReportReasonSelection";
import { errorToast } from "@/modules/shared/components/ui/toast/errorToast";
import { successToast } from "@/modules/shared/components/ui/toast/successToast";
import React from "react";

const ReportDialog = ({
  materialId,
  setDialogReportOpen,
}: {
  materialId: string;
  setDialogReportOpen: (open: boolean) => void;
}) => {
  const formRef = React.useRef<HTMLFormElement>(null);
  const [state, formAction, isPending] = React.useActionState(handlingReportMaterial, null);

  React.useEffect(() => {
    if (state?.success) {
      formRef.current?.reset();
      setDialogReportOpen(false);
      successToast(state.message![0], state.message![1]);
    } else if (state?.errors.general) {
      errorToast(state.message![0], state.message![1]);
    }
  }, [state, setDialogReportOpen]);

  return (
    <DialogContent>
      <form action={formAction} ref={formRef}>
        <input type="hidden" name="materialId" value={materialId} />
        <DialogHeader>
          <DialogTitle>Report This Material</DialogTitle>
          <DialogDescription>Help us keep the Resource Center safe and organized for everyone</DialogDescription>
        </DialogHeader>
        <FieldGroup className="my-4">
          <Field data-invalid={!!state?.errors.reason}>
            <FieldLabel>Report Reason</FieldLabel>
            <Select name="reason">
              <SelectTrigger
                className="w-full"
                defaultValue={state?.values?.reason}
                aria-invalid={!!state?.errors.reason}
              >
                <SelectValue placeholder="Select the reason for reporting this material" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {ReportReasonSelection.map((reason) => (
                    <SelectItem key={reason.value} value={reason.value}>
                      {reason.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
            <FieldDescription className="text-red-600" hidden={!state?.errors.reason}>
              {state?.errors.reason}
            </FieldDescription>
          </Field>
          <Field data-invalid={!!state?.errors.details}>
            <FieldLabel>Additional Details</FieldLabel>
            <Textarea
              aria-invalid={!!state?.errors.details}
              defaultValue={state?.values?.details}
              name="details"
              className="min-h-30 mb-0"
              placeholder="Provide more context about your report."
            />
            <FieldDescription className="text-red-600" hidden={!state?.errors.details}>
              {state?.errors.details}
            </FieldDescription>
          </Field>
        </FieldGroup>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button disabled={isPending} type="submit" variant="destructive">
            Submit Report
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  );
};
export default ReportDialog;
