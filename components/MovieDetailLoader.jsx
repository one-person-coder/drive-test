import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { FileText } from "lucide-react";

function MovieDetailLoader() {
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
            {["Name", "Size", "Format", "Owner"].map((label, i) => (
              <div key={i} className="grid grid-cols-3 gap-4 items-center">
                <p className="text-zinc-400 font-medium">{label}:</p>
                <div className="col-span-2">
                  <Skeleton className="h-5 w-3/4 bg-zinc-700 rounded" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex mt-10 flex-col justify-center">
          <div className="flex flex-wrap gap-3 justify-center">
            {["Verified", "Virus Free", "Encrypted"].map((text, i) => (
              <Skeleton key={i} className="h-8 w-28 bg-zinc-700 rounded-md" />
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default MovieDetailLoader;
