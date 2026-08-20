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
import React from "react";

const ReportDialog = () => {
  return (
    <form action="">
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Report This Material</DialogTitle>
          <DialogDescription>Help us keep the Resource Center safe and organized for everyone</DialogDescription>
        </DialogHeader>
        <FieldGroup>
          <Field>
            <FieldLabel>Report Reason</FieldLabel>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select the reason for reporting this material" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </Field>
          <Field>
            <FieldLabel>Additional Details</FieldLabel>
            <Textarea className="min-h-30" placeholder="Provide more context about your report." />
          </Field>
        </FieldGroup>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button type="submit" variant="destructive">
            Submit Report
          </Button>
        </DialogFooter>
      </DialogContent>
    </form>
  );
};
export default ReportDialog;
