import Link from "next/link";
import {
  AlertTriangle,
  Clock,
  Copyright,
  ExternalLink,
  FileQuestion,
  RefreshCw,
  ChevronRight,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function NotFoundPage() {
  return (
    <div className="min-h-scree text-zinc-100">
      <Header />

      {/* Main Content */}
      <main className="py-10 md:py-16 relative bg-black/10">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col gap-8 max-w-full mx-auto">
            <div className="text-center mb-8">
              <div className="relative w-24 h-24 mx-auto mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-rose-500 to-amber-500 rounded-full blur-[10px] opacity-70 animate-pulse"></div>
                <div className="relative z-10 w-full h-full flex items-center justify-center bg-zinc-900/50 backdrop-blur-sm rounded-full border border-zinc-800">
                  <FileQuestion className="h-12 w-12 text-rose-400" />
                </div>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-rose-500 via-amber-500 to-rose-500 bg-clip-text text-transparent">
                File Not Available
              </h1>
              <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
                We're sorry, but the file you're looking for is no longer
                available on our servers.
              </p>
            </div>

            {/* Main Card */}
            <Card className="bg-zinc-900/50 border-zinc-800 backdrop-blur-md overflow-hidden">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-center mb-5 gap-2">
                  <div className="w-10 h-10 rounded-lg text-orange-500 flex items-center justify-center">
                    <AlertTriangle className="h-7 w-7" />
                  </div>
                  <CardTitle className="text-2xl text-yellow-500">
                    Why This File Is Unavailable
                  </CardTitle>
                </div>
              </CardHeader>

              <CardContent className="pb-6 space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Reason 1 */}
                  <Card className="bg-zinc-800/30 border-zinc-700/50 hover:border-rose-500/50 transition-all">
                    <CardContent className="p-5 space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-rose-500/10 flex items-center justify-center">
                          <Clock className="h-5 w-5 text-rose-400" />
                        </div>
                        <h3 className="font-semibold text-white">
                          File Has Expired
                        </h3>
                      </div>
                      <p className="text-zinc-400 text-sm">
                        This file has exceeded its storage time limit on our
                        servers. Files are automatically removed after 30 days
                        of inactivity to maintain server performance.
                      </p>
                    </CardContent>
                  </Card>

                  {/* Reason 2 */}
                  <Card className="bg-zinc-800/30 border-zinc-700/50 hover:border-amber-500/50 transition-all">
                    <CardContent className="p-5 space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center">
                          <Copyright className="h-5 w-5 text-amber-400" />
                        </div>
                        <h3 className="font-semibold text-white">
                          Copyright Claim
                        </h3>
                      </div>
                      <p className="text-zinc-400 text-sm">
                        This file was removed due to a copyright claim from the
                        content owner. We comply with all DMCA takedown requests
                        as required by law.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* Try Again Section */}
                <div className="bg-zinc-800/30 border border-zinc-700/50 rounded-lg p-5">
                  <div className="flex items-center gap-3 mb-4">
                    <RefreshCw className="h-5 w-5 text-emerald-400" />
                    <h3 className="font-semibold text-white">
                      Try Again Later
                    </h3>
                  </div>
                  <p className="text-zinc-400 mb-4">
                    You can try accessing this file again in 24 hours. Sometimes
                    files are temporarily unavailable due to server maintenance
                    or high traffic.
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-zinc-400">Time until retry:</span>
                      <span className="text-emerald-400 font-medium">
                        30 Minutes
                      </span>
                    </div>
                    <Progress value={50} className="h-2 bg-zinc-700">
                      <div className="h-full bg-emerald-500 rounded-full" />
                    </Progress>
                  </div>
                </div>

                {/* Alternative Sources */}
                <div className="border rounded-lg p-5">
                  <div className="flex items-center gap-3 mb-4">
                    <ExternalLink className="h-5 w-5 text-violet-400" />
                    <h3 className="font-semibold text-white">
                      Alternative Sources
                    </h3>
                  </div>
                  <p className="text-zinc-400 mb-4">
                    You can find this file on our partner websites. Please visit
                    any of the following sites to download this content:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link
                      href="https://moviesburn.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Card className="bg-zinc-900 transition-all group">
                        <CardContent className="p-4 flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-violet-500/10 flex items-center justify-center group-hover:bg-violet-500/20 transition-all">
                            <ExternalLink className="h-5 w-5 text-violet-400" />
                          </div>
                          <div>
                            <h4 className="font-medium text-white group-hover:text-violet-400 transition-colors">
                              MoviesBurn.com
                            </h4>
                            <p className="text-xs text-zinc-400">
                              Premium movie downloads
                            </p>
                          </div>
                          <ChevronRight className="h-4 w-4 text-zinc-400 ml-auto group-hover:text-violet-400 group-hover:translate-x-1 transition-all" />
                        </CardContent>
                      </Card>
                    </Link>
                    <Link
                      href="https://uhdmovies.us"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Card className="bg-zinc-900 group">
                        <CardContent className="p-4 flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center group-hover:bg-cyan-500/20 transition-all">
                            <ExternalLink className="h-5 w-5 text-cyan-400" />
                          </div>
                          <div>
                            <h4 className="font-medium text-white group-hover:text-cyan-400 transition-colors">
                              UHDMovies.us
                            </h4>
                            <p className="text-xs text-zinc-400">
                              4K & UHD content library
                            </p>
                          </div>
                          <ChevronRight className="h-4 w-4 text-zinc-400 ml-auto group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                        </CardContent>
                      </Card>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
