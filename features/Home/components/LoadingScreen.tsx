"use client"
import { useEffect, useState } from "react";
import Image from "next/image";

interface LoadingScreenProps {
    onComplete: () => void;
}

export const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
    const [text, setText] = useState("");
    const fullText = "Datavera";

    useEffect(() => {
        let index = 0;
        
        const intervalId = setInterval(() => {
            setText(fullText.substring(0, index));
            index++;

            if (index > fullText.length) {
                clearInterval(intervalId);

                setTimeout(() => {
                    if (onComplete) onComplete();
                }, 1000);
            }
        }, 100);

        return () => clearInterval(intervalId);
    }, [onComplete]); 
    
    return (
        <div className="fixed inset-0 z-50 p-4 bg-white text-gray-900 flex flex-col items-center justify-center text-center">
            
            {/* Margins adjust based on screen size */}
            <div className="mb-6 md:mb-8 animate-heartbeat">
                <Image 
                    src="/Icon/Asset2.png" 
                    width={200} 
                    height={200} 
                    alt="App Logo" 
                    priority
                    // This forces the image to be 8rem (128px) on mobile, but scales to 200px on desktop
                    className="w-32 h-32 md:w-[200px] md:h-[200px] object-contain" 
                />
            </div>
            
            {/* Text scales from 2xl (mobile) to 4xl (desktop) */}
            <div className="mb-4 text-2xl md:text-4xl font-mono font-bold">
                {text}
                <span className="animate-blink ml-1"> | </span>
            </div>

            {/* Bar uses width-full but caps at 200px on mobile and 300px on desktop */}
            <div className="w-full max-w-[200px] md:max-w-[300px] h-[2px] bg-gray-200 rounded relative overflow-hidden">
                <div className="w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar">
                    {" "}
                </div>
            </div>
        </div>
    );
}