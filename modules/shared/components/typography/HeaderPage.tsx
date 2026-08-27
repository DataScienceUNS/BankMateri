"use client";

import React from "react";

type HeaderPageProps = {
  title: string;
  subtitle: string;
};

const HeaderPage = ({ title, subtitle }: HeaderPageProps) => {
  return (
    <header className="flex justify-between items-center mt-10 mb-8">
      <div>
        <h1 className="text-[30px] text-neutral-800 font-semibold">{title}</h1>
        <h3 className="text-muted-foreground text-sm">{subtitle}</h3>
      </div>
    </header>
  );
};

export default HeaderPage;
