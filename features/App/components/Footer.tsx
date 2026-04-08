import { Icon } from "@iconify/react";
import Link from "next/link";
import React from "react";

const AppFooter = () => {
  return (
    <div className="flex justify-between px-4">
      <Link
        href="/"
        className="flex flex-col items-center justify-center px-2 py-2 gap-1 text-neutral-400"
      >
        <Icon icon="solar:star-bold" className="w-auto h-6" />
        <span className="text-xs">Featured</span>
      </Link>
      <Link
        href="/"
        className="flex flex-col items-center justify-center px-2 py-2 gap-1 text-neutral-400"
      >
        <Icon icon="solar:magnifer-bold" className="w-auto h-6" />
        <span className="text-xs">Search</span>
      </Link>
      <Link
        href="/"
        className="flex flex-col items-center justify-center px-2 py-2 gap-1 text-neutral-400"
      >
        <Icon icon="solar:upload-square-bold" className="w-auto h-6" />
        <span className="text-xs">Upload</span>
      </Link>
      <Link
        href="/"
        className="flex flex-col items-center justify-center px-2 py-2 gap-1 text-neutral-400"
      >
        <Icon icon="solar:notebook-bold" className="w-auto h-6" />
        <span className="text-xs">Matkul</span>
      </Link>
      <Link
        href="/"
        className="flex flex-col items-center justify-center px-2 py-2 gap-1 text-neutral-400"
      >
        <Icon icon="solar:user-circle-bold" className="w-auto h-6" />
        <span className="text-xs">Profile</span>
      </Link>
    </div>
  );
};

export default AppFooter;
