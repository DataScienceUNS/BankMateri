"use client"

import { Button, Card } from "@heroui/react";
import Link from "next/link";
import { LoadingScreen } from "./components/LoadingScreen";
import { useState } from "react";

export default function Home() {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <>
            {/* 1. Removed the extra <LoadingScreen/> that was missing the onComplete prop */}
            {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
            
            {/* 2. Fixed 'opcaity-0' to 'opacity-0' */}
            <div className={`min-h-screen transition-opacity duration-700 tracking-tight ${isLoaded ? "opacity-100" : "opacity-0"} bg-white text-gray-800`}>
                
                {/* Your page content will go here */}
                <div className="flex items-center justify-center h-screen">
                    <h1 className="text-4xl font-bold">Welcome to the App!</h1>
                </div>

            </div> 
        </>
    );
}