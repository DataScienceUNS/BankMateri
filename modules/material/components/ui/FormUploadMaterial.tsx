"use client"
import React from 'react';
import {SupportedCloudStorageType} from "@/config/SupportedCloudStorage";
import {Upload} from "lucide-react";
import {Button} from "@/modules/shadcn/ui/button";
import {Input} from "@/modules/shadcn/ui/input";
import {Label} from "@/modules/shadcn/ui/label";
import {Select, SelectTrigger, SelectValue, SelectContent, SelectItem, SelectGroup} from "@/modules/shadcn/ui/select";
import {Textarea} from "@/modules/shadcn/ui/textarea";
import {Card, CardContent, CardFooter} from "@/modules/shadcn/ui/card";
import {Combobox, ComboboxContent, ComboboxEmpty, ComboboxInput, ComboboxItem, ComboboxList} from "@/modules/shadcn/ui/combobox";


const FormUploadMaterial = ({subjectAvailable, supportedCloudStorage, availableAcademicYears, materialTypes}: {
    subjectAvailable: SelectionPayload[],
    supportedCloudStorage: SupportedCloudStorageType[],
    availableAcademicYears: string[],
    materialTypes: SelectionPayload[],
}) => {
    return (
        <Card className="w-full max-w-3xl border-gray-200 shadow-sm py-0">
            <CardContent className="space-y-5 pt-6 pb-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                        <Label htmlFor="subject" className="text-gray-700 font-medium">Subject *</Label>
                        <Combobox
                            items={subjectAvailable}
                            name="subject"
                            itemToStringValue={(item: SelectionPayload) => item.label}
                        >
                            <ComboboxInput placeholder="Select a subject"/>
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
                        </Combobox>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="category" className="text-gray-700 font-medium">Category *</Label>
                        <Select name="category">
                            <SelectTrigger id="category" className="text-neutral-950 w-full">
                                <SelectValue placeholder="Select category"/>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    {materialTypes?.map((type) => (
                                        <SelectItem key={type.value} value={type.value}>{type.label}</SelectItem>
                                    ))}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="title" className="text-gray-700 font-medium">Title *</Label>
                    <Input
                        name="title"
                        id="title"
                        aria-label="title"
                        placeholder="e.g. Week 3 Lecture Notes"
                        className="placeholder:text-gray-400"
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="description" className="text-gray-700 font-medium">Description</Label>
                    <Textarea
                        name="description"
                        id="description"
                        aria-label="description"
                        placeholder="What does this material cover?"
                        className="min-h-30 placeholder:text-gray-400 resize-y"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                        <Label htmlFor="academic-year" className="text-gray-700 font-medium">Academic Year</Label>
                        <Select defaultValue="2024/2025" name="academic-year">
                            <SelectTrigger id="academic-year" className="text-neutral-950 w-full">
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
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="meeting-no" className="text-gray-700 font-medium">Meeting No.</Label>
                        <Input
                            name="meeting-no"
                            aria-label="meeting-no"
                            id="meeting-no"
                            defaultValue="1"
                            type="text"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                        <Label htmlFor="material-type" className="text-gray-700 font-medium">Material Type</Label>
                        <Select name="material-type">
                            <SelectTrigger id="material-type" className="text-neutral-950 w-full">
                                <SelectValue placeholder="Select material type"/>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem value="theory">Theory</SelectItem>
                                    <SelectItem value="practicum">Practicum</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="source" className="text-gray-700 font-medium">Source</Label>
                        <Select name="source">
                            <SelectTrigger id="source" className="text-neutral-950 w-full">
                                <SelectValue placeholder="Select source"/>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    {supportedCloudStorage?.map((storage) => (
                                        <SelectItem key={storage.value} value={storage.value}>{storage.label}</SelectItem>
                                    ))}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="external-url" className="text-gray-700 font-medium">External URL *</Label>
                    <Input
                        id="external-url"
                        name="external-url"
                        aria-label="external-url"
                        placeholder="https://drive.google.com/..."
                        className="placeholder:text-gray-400"
                    />
                </div>
            </CardContent>
            <CardFooter className="flex justify-end py-3">
                <Button className="cursor-pointer text-white font-medium px-5 rounded-md">
                    <Upload className="w-4 h-4 mr-2"/>
                    Publish material
                </Button>
            </CardFooter>
        </Card>
    );
};

export default FormUploadMaterial;