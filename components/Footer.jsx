import { HardDrive } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800/50 pt-16 pb-6 relative z-10">
      <div className="container  px-4">
        <div>
          <div>
            <Link href="/" className="flex items-center gap-2 w-fit">
              <div className="relative w-10 h-10 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full blur-[8px] opacity-70"></div>
                <HardDrive className="h-8 w-8 text-purple-400 relative z-10" />
              </div>
              <span className="text-3xl font-bold bg-purple-400 bg-clip-text text-transparent">
                DriveBurn
              </span>
            </Link>
          </div>
          <p className="text-zinc-400 mt-3 text-sm mb-6">
            You won't find another site like DriveBurn! Get five or more
            download links for each file. It's simple and fast - give it a try
            today!
          </p>
        </div>
        <div className="border-t border-zinc-800/50 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-zinc-500">
            &copy; {new Date().getFullYear()} DriveBurn. All rights reserved.
          </p>
          <p className="text-zinc-500 mt-2 md:mt-0 text-lg">
            Developed By:{" "}
            <span className="text-lg text-cyan-200">Hussain Coder</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
