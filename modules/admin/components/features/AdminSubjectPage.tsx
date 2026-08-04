import React from 'react';
import {Button} from "@/modules/shadcn/ui/button";
import {Plus} from "lucide-react";
import Link from "next/link";

const AdminSubjectPage = () => {
    return (
        <div className="mt-12">
            <header className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-semibold">Subjects</h1>
                    <h3 className="text-neutral-500">Manage all course subjects across every semester</h3>
                </div>
                <Link href="/admin/subjects/add">
                    <Button className="cursor-pointer"><Plus/> Add New</Button>
                </Link>
            </header>
        </div>
    );
};

export default AdminSubjectPage;