import {
  Download,
  Cloud,
  MessageSquare,
  Layers,
  Bot,
  ExternalLink,
} from "lucide-react";
import { getApiUrl } from "@/constants/constants";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MovieDetail from "@/components/download/MovieDetail";
import NotFoundPage from "../not-found";
import InstantDownload from "@/components/download/InstantDownload";
import ResumeCloud from "@/components/download/ResumeCloud";
import WorkerCloud from "@/components/download/WorkerCloud";
import DirectDownload from "@/components/download/DirectDownload";

export default async function DownloadPage({ params }) {
  const { slug } = await params;

  const movie = await fetch(getApiUrl(slug, "detail"));
  const movieInfo = await movie.json();

  if (!movieInfo?.success) {
    return <NotFoundPage />;
  }

  if (movieInfo?.expired) {
    return <NotFoundPage />;
  }

  return (
    <div className="min-h-screen bg-black/10 text-zinc-100">
      <Header />
      <main className="py-10 md:py-12 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col gap-8">
            <MovieDetail info={movieInfo} />

            <Card className="bg-zinc-900/50 border-zinc-800 backdrop-blur-md overflow-hidden">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-center mb-2 gap-2">
                  <div className="w-10 h-10 text-cyan-500 flex items-center justify-center">
                    <Download className="h-7 w-7" />
                  </div>
                  <CardTitle className="text-2xl text-yellow-500">
                    Download Options
                  </CardTitle>
                </div>
              </CardHeader>

              <CardContent className="pb-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <InstantDownload />
                  <ResumeCloud />
                  <WorkerCloud />
                  <DirectDownload />
                </div>

                <div className="mt-6 p-4 bg-zinc-800/30 border border-zinc-700/50 rounded-lg">
                  <p className="text-zinc-300 text-sm text-center">
                    If Direct Download link is not working you can try download
                    using Mirrors if available or you can use Login to Download
                    for premium speed.
                  </p>
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
