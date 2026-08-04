import React from 'react';
import {Card, CardContent, CardFooter} from "@/modules/shadcn/ui/card";
import {Badge} from "@/modules/shadcn/ui/badge";
import {Button} from "@/modules/shadcn/ui/button";
import {BookOpen, FolderOpen} from "lucide-react";
import Link from "next/link";

const SubjectCard = ({index, name, code, hex_color, term, material_count, link}: {
    index?: number,
    name: string,
    code: string,
    hex_color: string,
    term: number,
    material_count: number,
    link: string
}) => {
    return (
        <Card key={index}>
            <CardContent>
                <div className="flex justify-between items-center">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{backgroundColor: hex_color}}>
                        <BookOpen className="text-neutral-100 stroke-2 w-5 h-5"/>
                    </div>
                    <Badge variant="secondary">{code}</Badge>
                </div>
                <div className="mt-4">
                    <h1 className="text-base text-neutral-900 font-semibold">{name}</h1>
                    <h3 className="text-neutral-700 mt-1">Semester {term}</h3>
                </div>
            </CardContent>
            <CardFooter className="flex justify-between items-center py-2">
                <span className="text-neutral-500 text-sm">
                    {material_count} Material
                </span>
                <Link href={`/subject/${link}`} target="_blank">
                    <Button><FolderOpen/> Open</Button>
                </Link>
            </CardFooter>
        </Card>
    );
};

export default SubjectCard;