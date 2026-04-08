import AppFooter from "@/features/App/components/Footer";
import React from "react";

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="flex flex-col h-full w-full relative">
      <div className="w-full flex-1 overflow-y-auto pb-4">{children}</div>
      <div className="w-full">
        <AppFooter />
      </div>
    </div>
  );
};

export default layout;
