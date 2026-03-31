"use client";

import { Button } from "@heroui/react";
import { LoadingScreen } from "../features/Home/components/LoadingScreen";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const router = useRouter();

  return (
    <>
      {/* 1. Removed the extra <LoadingScreen/> that was missing the onComplete prop */}
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}

      {/* 2. Fixed 'opcaity-0' to 'opacity-0' */}
      <div
        className={`min-h-screen transition-opacity duration-700 tracking-tight ${isLoaded ? "opacity-100" : "opacity-0"} bg-white text-gray-800`}
      >
        {/* Your page content will go here */}
        <div className="flex flex-col items-center justify-center gap-4 h-screen">
          <h1 className="text-4xl font-bold">Sains Data Resource Center</h1>
          <Button onPress={() => router.push("/app")}>Get Started</Button>
        </div>
      </div>
    </>
  );
}
