"use client"
import React from 'react';
import {SupportedCloudStorageType} from "@/config/SupportedCloudStorage";
import {Upload} from "lucide-react";
import {Combobox, ComboboxContent, ComboboxEmpty, ComboboxInput, ComboboxItem, ComboboxList} from "@/modules/shadcn/ui/combobox";
import {Select, SelectTrigger, SelectValue, SelectContent, SelectItem, SelectGroup} from "@/modules/shadcn/ui/select";
import {Field, FieldDescription, FieldLabel} from "@/modules/shadcn/ui/field";
import {Card, CardContent, CardFooter} from "@/modules/shadcn/ui/card";
import {handlingSubmitForm} from "@/modules/uploadMaterial/actions/handlingSubmitForm";
import {Button} from "@/modules/shadcn/ui/button";
import {Input} from "@/modules/shadcn/ui/input";
import {Label} from "@/modules/shadcn/ui/label";
import {Textarea} from "@/modules/shadcn/ui/textarea";


const FormUploadMaterial = ({subjectAvailable, supportedCloudStorage, availableAcademicYears, categoryLists}: {
    subjectAvailable: SelectionPayload[],
    supportedCloudStorage: SupportedCloudStorageType[],
    availableAcademicYears: Readonly<string[]>,
    categoryLists: SelectionPayload[],
}) => {
    const [state, formAction, isPending] = React.useActionState(handlingSubmitForm, null)
    const [selectedSubject, setSelectedSubject] = React.useState<SelectionPayload | null>(null)

    return (
        <form action={formAction}>
            <input readOnly name="subject" hidden={true} value={selectedSubject?.value || ""}/>
            <Card className="w-full max-w-3xl border-gray-200 shadow-sm py-0">
                <CardContent className="space-y-5 pt-6 pb-3">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <Field data-invalid={!!state?.errors?.subject}>
                            <FieldLabel htmlFor="subject-trigger" className="font-medium">Subject *</FieldLabel>
                            <Combobox
                                name="subject-trigger"
                                items={subjectAvailable}
                                key={state?.values?.subject ?? "empty"}
                                defaultValue={subjectAvailable.find(item => item.value === state?.values.subject)}
                                itemToStringValue={(item: SelectionPayload) => item.label}
                                onValueChange={(value: SelectionPayload | null) => setSelectedSubject(value)}
                            >
                                <ComboboxInput aria-invalid={!!state?.errors?.subject} placeholder="Select a subject"/>
                                <ComboboxContent>
                                    <ComboboxEmpty>No items found.</ComboboxEmpty>
                                    <ComboboxList>
                                        {(item: SelectionPayload) => (
                                            <ComboboxItem key={item.value} value={item}>
                                                {item.label}
                                            </ComboboxItem>
                                        )}
                                    </ComboboxList>
                                </ComboboxContent>
                                <FieldDescription className="text-red-600" hidden={!state?.errors?.subject}>
                                    {state?.errors?.subject}
                                </FieldDescription>
                            </Combobox>
                        </Field>
                        <Field data-invalid={!!state?.errors?.category}>
                            <FieldLabel htmlFor="category" className="font-medium">Category *</FieldLabel>
                            <Select name="category" defaultValue={state?.values.category}>
                                <SelectTrigger id="category" className="text-neutral-950 w-full"
                                               aria-invalid={!!state?.errors?.category}>
                                    <SelectValue placeholder="Select category"/>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        {categoryLists?.map((type) => (
                                            <SelectItem key={type.value} value={type.value}>{type.label}</SelectItem>
                                        ))}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            <FieldDescription className="text-red-600" hidden={!state?.errors?.category}>
                                {state?.errors?.category}
                            </FieldDescription>
                        </Field>
                    </div>
                    <Field data-invalid={!!state?.errors?.title}>
                        <FieldLabel htmlFor="title" className="font-medium">Title *</FieldLabel>
                        <Input
                            aria-invalid={!!state?.errors?.title}
                            defaultValue={state?.values.title}
                            name="title"
                            id="title"
                            aria-label="title"
                            placeholder="e.g. Week 3 Lecture Notes"
                            className="placeholder:text-gray-400"
                        />
                        <FieldDescription className="text-red-600" hidden={!state?.errors?.title}>
                            {state?.errors?.title}
                        </FieldDescription>
                    </Field>

                    <Field>
                        <FieldLabel htmlFor="description" className="font-medium">Description</FieldLabel>
                        <Textarea
                            name="description"
                            id="description"
                            aria-label="description"
                            placeholder="What does this material cover?"
                            className="min-h-30 placeholder:text-gray-400 resize-y"
                        />
                        <FieldDescription className="text-red-600" hidden={true}>
                            This field contains validation errors.
                        </FieldDescription>
                    </Field>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <Field data-invalid={!!state?.errors?.academicYear}>
                            <FieldLabel htmlFor="academic-year" className="font-medium">Academic Year</FieldLabel>
                            <Select defaultValue="2024/2025" name="academic-year">
                                <SelectTrigger id="academic-year" aria-invalid={!!state?.errors?.academicYear}
                                               className="text-neutral-950 w-full">
                                    <SelectValue placeholder="Select year"/>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        {availableAcademicYears?.map((year, index) => (
                                            <SelectItem key={index} value={year}>{year}</SelectItem>
                                        ))}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            <FieldDescription className="text-red-600" hidden={!state?.errors?.academicYear}>
                                {state?.errors?.academicYear}
                            </FieldDescription>
                        </Field>
                        <Field data-invalid={!!state?.errors?.meetingNo}>
                            <Label htmlFor="meeting-no" className=" font-medium">Meeting No.</Label>
                            <Input
                                aria-invalid={!!state?.errors?.meetingNo}
                                defaultValue={state?.values.meetingNo || 1}
                                name="meeting-no"
                                aria-label="meeting-no"
                                id="meeting-no"
                                type="number"
                            />
                            <FieldDescription className="text-red-600" hidden={!state?.errors?.meetingNo}>
                                {state?.errors?.meetingNo}
                            </FieldDescription>
                        </Field>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <Field data-invalid={!!state?.errors?.materialType}>
                            <FieldLabel htmlFor="material-type" className="font-medium">Material Type</FieldLabel>
                            <Select name="material-type">
                                <SelectTrigger id="material-type" aria-invalid={!!state?.errors?.materialType}
                                               defaultValue={state?.values.materialType}
                                               className="text-neutral-950 w-full">
                                    <SelectValue placeholder="Select material type"/>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectItem value="theory">Theory</SelectItem>
                                        <SelectItem value="practicum">Practicum</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            <FieldDescription className="text-red-600" hidden={!state?.errors?.materialType}>
                                {state?.errors?.materialType}
                            </FieldDescription>
                        </Field>
                        <Field data-invalid={!!state?.errors?.source}>
                            <Label htmlFor="source" className=" font-medium">Source</Label>
                            <Select name="source">
                                <SelectTrigger id="source" className="text-neutral-950 w-full" aria-invalid={!!state?.errors?.source}>
                                    <SelectValue placeholder="Select source"/>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup defaultValue={state?.values?.source}>
                                        {supportedCloudStorage?.map((storage) => (
                                            <SelectItem key={storage.value} value={storage.value}>{storage.label}</SelectItem>
                                        ))}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            <FieldDescription className="text-red-600" hidden={!state?.errors?.source}>
                                {state?.errors?.source}
                            </FieldDescription>
                        </Field>
                    </div>

                    <Field data-invalid={!!state?.errors?.externalUrl}>
                        <FieldLabel htmlFor="external-url" className="font-medium">External URL *</FieldLabel>
                        <Input
                            aria-invalid={!!state?.errors?.externalUrl}
                            defaultValue={state?.values.externalUrl}
                            id="external-url"
                            name="external-url"
                            aria-label="external-url"
                            placeholder="https://drive.google.com/..."
                            className="placeholder:text-gray-400"
                        />
                        <FieldDescription className="text-red-600" hidden={!state?.errors?.externalUrl}>
                            {state?.errors?.externalUrl}
                        </FieldDescription>
                    </Field>
                </CardContent>
                <CardFooter className="flex justify-end py-3">
                    <Button disabled={isPending} className="cursor-pointer text-white font-medium px-5 rounded-md">
                        <Upload className="w-4 h-4 mr-2"/>
                        Publish material
                    </Button>
                </CardFooter>
            </Card>
        </form>
    );
};

export default FormUploadMaterial;