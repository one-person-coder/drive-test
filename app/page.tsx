import Link from "next/link";
import {
  Download,
  Shield,
  Zap,
  ArrowRight,
  FileText,
  Database,
  Upload,
  Lock,
  Layers,
  Users,
  Globe,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black/10 text-zinc-100">
      <Header />

      <section className="relative py-20 overflow-hidden bg-zinc-900">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">
              Fast & Secure Movie Downloading
            </h1>

            <p className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto">
              Your premium destination for high-speed movies downloads with
              multiple download options and no speed limits.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Button
                className="bg-gradient-to-r from-violet-600 to-cyan-500 hover:from-violet-700 hover:to-cyan-600 text-white px-8 py-3 h-auto text-lg group relative overflow-hidden"
                asChild
              >
                <Link href={"https://fullvideoslink.xyz/"} target="_blank">
                  <span className="relative z-10 flex items-center">
                    24,000 + Movies
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </Button>

              <Button
                variant="outline"
                className="hidden border-zinc-700 bg-zinc-800/50 hover:bg-zinc-800 hover:text-cyan-400 px-8 py-3 h-auto text-lg group backdrop-blur-sm"
                asChild
              >
                <Link href={"https://fullvideoslink.xyz/"} target="_blank">
                  <Upload className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  24,000 + Movies
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                value: "50B+",
                label: "Download Links",
                icon: <FileText className="h-6 w-6 text-violet-400" />,
              },
              {
                value: "250K+",
                label: "Daily Users",
                icon: <Users className="h-6 w-6 text-fuchsia-400" />,
              },
              {
                value: "100PB+",
                label: "Storage",
                icon: <Database className="h-6 w-6 text-cyan-400" />,
              },
              {
                value: "99.9%",
                label: "Uptime",
                icon: <Zap className="h-6 w-6 text-amber-400" />,
              },
            ].map((stat, index) => (
              <Card
                key={index}
                className="bg-zinc-900/50 border-zinc-700 transition-all duration-300"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-zinc-800/80 flex items-center justify-center">
                    {stat.icon}
                  </div>
                  <p className="text-3xl font-bold text-white">{stat.value}</p>
                  <p className="text-zinc-400 text-sm mt-1">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-500 bg-clip-text text-transparent inline-block">
              Why Choose DriveBurn
            </h2>

            <p className="text-zinc-400 max-w-2xl mx-auto">
              Experience the next generation of file sharing with our premium
              features designed for speed and security.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="h-7 w-7 text-violet-400" />,
                title: "Secure Transfers",
                description:
                  "Your files are secure and private. We use advanced encryption to protect your data and privacy while ensuring a safe browsing experience.",
                color: "text-violet-400",
                hover: "hover:border-violet-500/50",
              },
              {
                icon: <Zap className="h-7 w-7 text-fuchsia-400" />,
                title: "High-Speed Downloads",
                description:
                  "Experience lightning-fast download speeds with our optimized servers. Get your files quickly without any throttling or speed limits.",
                color: "text-fuchsia-400",
                hover: "hover:border-fuchsia-500/50",
              },
              {
                icon: <Download className="h-7 w-7 text-cyan-400" />,
                title: "Multiple Download Options",
                description:
                  "Choose from various download methods including direct download, cloud storage, Telegram, and more. We ensure you always have a way to access your files.",
                color: "text-cyan-400",
                hover: "hover:border-cyan-500/50",
              },
              {
                icon: <Globe className="h-7 w-7 text-amber-400" />,
                title: "Global CDN",
                description:
                  "Our content delivery network ensures fast downloads from anywhere in the world with automatic server selection based on your location.",
                color: "text-amber-400",
                hover: "hover:border-amber-500/50",
              },
              {
                icon: <Lock className="h-7 w-7 text-emerald-400" />,
                title: "Privacy Protection",
                description:
                  "Your privacy matters. We don't track your downloads or share your information with third parties. Your activity remains private.",
                color: "text-emerald-400",
                hover: "hover:border-emerald-500/50",
              },
              {
                icon: <Layers className="h-7 w-7 text-rose-400" />,
                title: "File Management",
                description:
                  "Organize your uploads with our intuitive file management system. Create folders, move files, and share with others easily.",
                color: "text-rose-400",
                hover: "hover:border-rose-500/50",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className={`bg-zinc-900/50 border-zinc-800 backdrop-blur-sm ${feature.hover} transition-all duration-300`}
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl text-white">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-zinc-400">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
