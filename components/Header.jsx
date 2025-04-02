import { HardDrive } from "lucide-react";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="border-b bg-zinc-900 border-zinc-300/50 sticky top-0 z-50">
      <div className=" mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative w-10 h-10 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full blur-[8px] opacity-70"></div>
            <HardDrive className="h-8 w-8 text-purple-400 relative z-10" />
          </div>
          <span className="text-3xl font-bold bg-purple-400 bg-clip-text text-transparent">
            DriveBurn
          </span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
