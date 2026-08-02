import React from 'react';
import ButtonTest from "@/modules/shared/components/ButtonTest";
import {Test} from "@/app/dump/Test";

const page = () => {
    return (
        <div>
            Hello World
            <h1>
                <Test/>
            </h1>
            <ButtonTest/>
        </div>
    );
};

export default page;