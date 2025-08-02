"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Bot, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { getApiUrl } from "@/constants/constants";
import Link from "next/link";

const WorkerCloud = () => {
  const pathname = usePathname();
  const [link, setLink] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getDownloadLink = async () => {
      try {
        const movie = await fetch(getApiUrl(pathname, "worker"));
        const movieInfo = await movie.json();

        if (movieInfo.success) {
          setLink(movieInfo.link);
        } else {
          console.log(movieInfo.msg);
        }
      } finally {
        setIsLoading(false);
      }
    };
    getDownloadLink();
  }, []);

  return (
    <>
      {isLoading ? (
        <DownloadSkeleton />
      ) : (
        link && (
          <Card className="bg-zinc-800/30 border-zinc-700/50 hover:border-violet-500/50 transition-all group">
            <CardContent className="p-4">
              <div className="flex flex-col justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-violet-500/10 flex items-center justify-center group-hover:bg-violet-500/20 transition-all">
                    <Bot className="h-6 w-6 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white group-hover:text-emerald-400 transition-colors">
                      Resume Worker Bot
                    </h3>
                    <p className="text-sm text-zinc-400">
                      Automated download assistant with resume capability
                    </p>
                  </div>
                </div>
                <Button
                  className="bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white"
                  asChild
                >
                  <Link href={link} target="_blank">
                    <Download className="mr-2 h-4 w-4" /> Resume Worker Bot
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        )
      )}
    </>
  );
};

const DownloadSkeleton = () => {
  return (
    <Card className="bg-zinc-800/30 border-zinc-700/50 hover:border-violet-500/50 transition-all group">
      <CardContent className="p-4">
        <div className="flex flex-col justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-zinc-700/30 animate-pulse"></div>
            <div className="w-3/4">
              <div className="h-4 bg-zinc-700 rounded animate-pulse"></div>
              <div className="h-3 mt-2 bg-zinc-700 rounded w-3/4 animate-pulse"></div>
            </div>
          </div>
          <div className="mt-4">
            <div className="h-10 w-full bg-zinc-700 rounded animate-pulse"></div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default WorkerCloud;
