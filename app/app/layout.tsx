import React from "react";

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="flex flex-col h-full w-full">
      <div className="w-full flex-1 overflow-y-auto">{children}</div>
      <div className="w-full h-12">ini footer</div>
    </div>
  );
};

export default layout;
