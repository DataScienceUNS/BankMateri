"use client"

import React, {useActionState} from 'react';
import {Card, CardContent, CardFooter} from "@/modules/shadcn/ui/card";
import {Label} from "@/modules/shadcn/ui/label";
import {Input} from "@/modules/shadcn/ui/input";
import {Textarea} from "@/modules/shadcn/ui/textarea";
import {Button} from "@/modules/shadcn/ui/button";
import {handlingAddSubjectForm} from "@/modules/admin/actions/handlingAddSubjectForm";
import Link from "next/link";
import {ChevronLeft} from "lucide-react";

const AddSubjectsPage = () => {
    const [, formAction, isPending] = useActionState(handlingAddSubjectForm, null)

    return (
        <div className="mt-12">
            <header className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-semibold">Add New Subject</h1>
                    <h3 className="text-neutral-500">Manage all course subjects across every semester</h3>
                </div>
                <Link href="/admin/subjects">
                    <Button className="cursor-pointer" variant="secondary"><ChevronLeft/> Back</Button>
                </Link>
            </header>
            <main className="mt-6">
                <form action={formAction}>
                    <Card className="max-w-2xl">
                        <CardContent className="flex flex-col gap-6 mt-2">
                            <div className="flex flex-col gap-2">
                                <Label htmlFor="name">Subject Name</Label>
                                <Input id="name" name="name" aria-label="name" type="text" placeholder="eg: Matematika lanjut"
                                       required/>
                            </div>
                            <div className="grid grid-cols-3 gap-4">
                                <div className="flex flex-col gap-2">
                                    <Label htmlFor="code">Code</Label>
                                    <Input id="code" name="code" aria-label="code" type="text" maxLength={6}
                                           placeholder="eg: MTH130" required/>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <Label htmlFor="hex_color">BG Color</Label>
                                    <Input id="hex_color" name="hex_color" aria-label="hex_color" type="text" maxLength={6}
                                           placeholder="eg: FFFFFF (without hastag)" required/>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <Label htmlFor="term">Term</Label>
                                    <Input id="term" name="term" aria-label="term" type="number" max={8} min={1}
                                           placeholder="eg: 1, 2, 3..." required/>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <Label htmlFor="keyword">Keyword</Label>
                                <Textarea id="keyword" name="keyword" aria-label="keyword"
                                          placeholder="eg: matlan, ml, mathematics"
                                          required/>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button type="submit" disabled={isPending} className="w-full cursor-pointer">Add Subject</Button>
                        </CardFooter>
                    </Card>
                </form>
            </main>
        </div>
    );
};

export default AddSubjectsPage;