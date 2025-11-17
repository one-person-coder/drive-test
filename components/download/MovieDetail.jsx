"use server";

import Link from "next/link";
import { Shield, FileText, CheckCircle, Lock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function MovieDetail({ info }) {
  return (
    <Card className="bg-zinc-900/50 border-zinc-800 backdrop-blur-md overflow-hidden">
      <CardHeader className="pb-4">
        <div className="flex justify-center items-center mb-4 gap-2">
          <div className="w-10 h-10 text-orange-500 flex items-center justify-center">
            <FileText className="h-7 w-7" />
          </div>
          <CardTitle className="text-2xl text-red-500">
            File Information
          </CardTitle>
        </div>
      </CardHeader>

      <CardContent className="pb-6">
        <div className="grid gap-8">
          <div className="space-y-5">
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-1">
                <p className="text-zinc-400 font-medium">Name:</p>
              </div>
              <div className="col-span-2 group relative">
                <p className="text-white font-medium pr-8">
                  {info?.name || "-"}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-1">
                <p className="text-zinc-400 font-medium">Size:</p>
              </div>
              <div className="col-span-2">
                <p className="text-white font-medium">{info?.size || "-"}</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-1">
                <p className="text-zinc-400 font-medium">Format:</p>
              </div>
              <div className="col-span-2">
                <Badge
                  variant="outline"
                  className="bg-violet-500/10 text-violet-400 border-violet-500/30 hover:bg-violet-500/20"
                >
                  {info?.format || "-"}
                </Badge>
              </div>
            </div>

            {info?.addedOn && (
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-1">
                  <p className="text-zinc-400 font-medium">Added on:</p>
                </div>
                <div className="col-span-2">
                  <p className="text-white font-medium">
                    {" "}
                    {info?.addedOn || "-"}
                  </p>
                </div>
              </div>
            )}
            <div className="hidden grid grid-cols-3 gap-4">
              <div className="col-span-1">
                <p className="text-zinc-400 font-medium">Owner:</p>
              </div>
              <div className="col-span-2">
                <Link href={"https://moviesburn.com"} target="_blank">
                  <Badge
                    variant="outline"
                    className="bg-orange-500/10 text-orange-400 border-orange-500/30 hover:bg-orange-500/20 font-bold"
                  >
                    MoviesBurn
                  </Badge>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex mt-10 flex-col justify-center">
          <div className="flex flex-wrap gap-3 justify-center">
            <div className="flex items-center gap-2 bg-zinc-800/50 px-3 py-1.5 rounded-md">
              <CheckCircle className="h-4 w-4 text-emerald-400" />
              <span className="text-sm text-zinc-300">Verified</span>
            </div>
            <div className="flex items-center gap-2 bg-zinc-800/50 px-3 py-1.5 rounded-md">
              <Shield className="h-4 w-4 text-violet-400" />
              <span className="text-sm text-zinc-300">Virus Free</span>
            </div>
            <div className="flex items-center gap-2 bg-zinc-800/50 px-3 py-1.5 rounded-md">
              <Lock className="h-4 w-4 text-cyan-400" />
              <span className="text-sm text-zinc-300">Encrypted</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default MovieDetail;
