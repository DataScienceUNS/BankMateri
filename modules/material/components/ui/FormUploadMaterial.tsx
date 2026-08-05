"use client"
import React from 'react';
import {Upload} from "lucide-react";
import {Button} from "@/modules/shadcn/ui/button";
import {Input} from "@/modules/shadcn/ui/input";
import {Label} from "@/modules/shadcn/ui/label";
import {Select, SelectTrigger, SelectValue, SelectContent, SelectItem, SelectGroup} from "@/modules/shadcn/ui/select";
import {Textarea} from "@/modules/shadcn/ui/textarea";
import {Card, CardContent, CardFooter} from "@/modules/shadcn/ui/card";
import {Combobox, ComboboxContent, ComboboxEmpty, ComboboxInput, ComboboxItem, ComboboxList} from "@/modules/shadcn/ui/combobox";

type ListSubjectsPayload = {
    value: string;
    label: string;
}

const subjects = [
    {value: "MATH101", label: "Matematika Dasar"},
    {value: "PHYS101", label: "Fisika Dasar"},
    {value: "CHEM101", label: "Kimia Dasar"},
    {value: "BIOL101", label: "Biologi Dasar"},
    {value: "INDO101", label: "Bahasa Indonesia"},
    {value: "ENGL101", label: "Bahasa Inggris"},
    {value: "HIST101", label: "Sejarah Indonesia"},
    {value: "PPKN101", label: "Pendidikan Pancasila dan Kewarganegaraan"},
    {value: "COMP101", label: "Pemrograman Dasar"},
    {value: "ECON101", label: "Ekonomi"},
    {value: "ARTS101", label: "Seni Budaya"},
    {value: "PJOK101", label: "Pendidikan Jasmani, Olahraga, dan Kesehatan"},
];

const FormUploadMaterial = () => {
    return (
        <Card className="w-full max-w-3xl border-gray-200 shadow-sm py-0">
            <CardContent className="space-y-5 pt-6 pb-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                        <Label htmlFor="subject" className="text-gray-700 font-medium">Subject *</Label>
                        <Combobox
                            items={subjects}
                            name="subject"
                            itemToStringValue={(item: ListSubjectsPayload) => item.label}
                        >
                            <ComboboxInput placeholder="Select a subject"/>
                            <ComboboxContent>
                                <ComboboxEmpty>No items found.</ComboboxEmpty>
                                <ComboboxList>
                                    {(item: ListSubjectsPayload) => (
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
                        <Select>
                            <SelectTrigger id="category" className="text-neutral-950 w-full">
                                <SelectValue placeholder="Select category"/>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem value="excersice">Excersice</SelectItem>
                                    <SelectItem value="material">Material</SelectItem>
                                    <SelectItem value="midterm_exam">Midterm Exam</SelectItem>
                                    <SelectItem value="final_exam">Final Exam</SelectItem>
                                    <SelectItem value="responsi">Responsi</SelectItem>
                                    <SelectItem value="lecture_notes">Lecture Notes</SelectItem>
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

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    <div className="space-y-2">
                        <Label htmlFor="academic-year" className="text-gray-700 font-medium">Academic Year</Label>
                        <Select defaultValue="2024/2025" name="academic-year">
                            <SelectTrigger id="academic-year" className="text-neutral-950 w-full">
                                <SelectValue placeholder="Select year"/>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem value="2024/2025">2024/2025</SelectItem>
                                    <SelectItem value="2023/2024">2023/2024</SelectItem>
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

                    <div className="space-y-2">
                        <Label htmlFor="source" className="text-gray-700 font-medium">Source</Label>
                        <Select defaultValue="google-drive" name="source">
                            <SelectTrigger id="source" className="text-neutral-950 w-full">
                                <SelectValue placeholder="Select source"/>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem value="google-drive">Google Drive</SelectItem>
                                    <SelectItem value="dropbox">Dropbox</SelectItem>
                                    <SelectItem value="onedrive">OneDrive</SelectItem>
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