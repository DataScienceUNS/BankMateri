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
import { Field, FieldGroup, FieldLabel } from "@/modules/shadcn/ui/field";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/modules/shadcn/ui/select";
import { Textarea } from "@/modules/shadcn/ui/textarea";
import { handlingReportMaterial } from "../../actions/handlingReportMaterial";
import { ReportReasonSelection } from "@/config/ReportReasonSelection";
import React, { useEffect } from "react";
import { errorToast } from "@/modules/shared/components/ui/toast/errorToast";

const ReportDialog = ({ materialId }: { materialId: string }) => {
  const formRef = React.useRef<HTMLFormElement>(null);
  const [state, formAction, isPending] = React.useActionState(handlingReportMaterial, null);

  useEffect(() => {
    if (state?.success) {
      formRef.current?.reset();
    } else if (state?.errors.general) {
      errorToast(state.message![0], state.message![1]);
    }
  }, [state]);

  return (
    <DialogContent>
      <form action={formAction} ref={formRef}>
        <input type="hidden" name="materialId" value={materialId} />
        <DialogHeader>
          <DialogTitle>Report This Material</DialogTitle>
          <DialogDescription>Help us keep the Resource Center safe and organized for everyone</DialogDescription>
        </DialogHeader>
        <FieldGroup>
          <Field>
            <FieldLabel>Report Reason</FieldLabel>
            <Select name="reason">
              <SelectTrigger className="w-full">
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
          </Field>
          <Field>
            <FieldLabel>Additional Details</FieldLabel>
            <Textarea name="details" className="min-h-30" placeholder="Provide more context about your report." />
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
