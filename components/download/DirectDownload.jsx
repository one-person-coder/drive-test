"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Download, SquareArrowOutUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { getApiUrl } from "@/constants/constants";
import Link from "next/link";

const DirectDownload = () => {
  const pathname = usePathname();
  const [links, setLinks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getDownloadLink = async () => {
      const movie = await fetch(getApiUrl(pathname, "mirror"));
      const movieInfo = await movie.json();

      if (movieInfo.success) {
        setLinks(() => [
          ...movieInfo?.link?.firstType,
          ...movieInfo?.link?.secondType,
        ]);
      } else {
        console.log(movieInfo.msg);
      }
      setIsLoading(false);
    };
    getDownloadLink();
  }, []);

  return (
    <>
      {isLoading ? (
        <DownloadSkeleton />
      ) : (
        links.length >= 1 && (
          <Card className="md:col-span-2 bg-zinc-800/30 border-zinc-700/50 hover:border-orange-500/50 transition-all group">
            <CardContent className="p-4">
              <div className="flex flex-col justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center group-hover:bg-cyan-500/20 transition-all">
                    <SquareArrowOutUpRight className="h-6 w-6 text-pink-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white group-hover:text-orange-400 transition-colors">
                      Mirror Links
                    </h3>
                    <p className="text-sm text-zinc-400">
                      Fast cloud and resume support
                    </p>
                  </div>
                </div>
                <div className="flex justify-center flex-wrap gap-4 items-center">
                  {links?.map((lnk, index) => {
                    return (
                      <Button
                        key={index}
                        className="bg-pink-600 hover:bg-pink-700 text-white flex-grow"
                        asChild
                      >
                        <Link href={lnk} target="_blank">
                          <Download className="mr-2 h-4 w-4" /> Resume Cloud
                        </Link>
                      </Button>
                    );
                  })}
                </div>
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
    <Card className="bg-zinc-800/30 md:col-span-2 border-zinc-700/50 hover:border-violet-500/50 transition-all group">
      <CardContent className="p-4">
        <div className="flex flex-col justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-zinc-700/30 animate-pulse"></div>
            <div className="w-3/4">
              <div className="h-4 bg-zinc-700 rounded animate-pulse"></div>
              <div className="h-3 mt-2 bg-zinc-700 rounded w-3/4 animate-pulse"></div>
            </div>
          </div>
          <div className="mt-4 flex gap-4 flex-wrap">
            <div className="h-10 flex-grow bg-zinc-700 rounded animate-pulse"></div>
            <div className="h-10 flex-grow bg-zinc-700 rounded animate-pulse"></div>
            <div className="h-10 flex-grow bg-zinc-700 rounded animate-pulse"></div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DirectDownload;
