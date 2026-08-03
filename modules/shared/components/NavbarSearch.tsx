"use client"

import React from 'react';
import {Search} from "lucide-react";
import {InputGroup, InputGroupAddon, InputGroupInput} from "@/modules/shadcn/ui/input-group";
import {Kbd} from "@/modules/shadcn/ui/kbd";
import {cn} from "@/modules/shadcn/utils";
import {useHotkeys} from "react-hotkeys-hook";

const NavbarSearch = () => {
    const inputRef = React.useRef<HTMLInputElement>(null)
    useHotkeys('ctrl+k, cmd+k', (e) => {
        e.preventDefault()
        inputRef.current?.focus()
    }, {enableOnFormTags: true})

    return (
        <InputGroup
            className={cn('w-102 h-9 border-neutral-400', 'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2')}>
            <InputGroupInput ref={inputRef} placeholder="Search materials, subjects, people..."/>
            <InputGroupAddon>
                <Search/>
            </InputGroupAddon>
            <InputGroupAddon align="inline-end">
                <Kbd>Ctrl+K</Kbd>
            </InputGroupAddon>
        </InputGroup>
    );
};

export default NavbarSearch;