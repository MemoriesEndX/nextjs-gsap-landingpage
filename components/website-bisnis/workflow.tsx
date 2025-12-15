"use client";

import { Badge } from "@/components/ui/badge";
import { MessageSquare, FileSearch, Palette, Code, TestTube, Rocket } from "lucide-react";

const workflowSteps = [
  {
    step: 1,
    icon: MessageSquare,
    title: "Konsultasi Kebutuhan",
    description: "Diskusi mendalam tentang kebutuhan bisnis, target audience, dan fitur yang diinginkan.",
    duration: "1-2 Hari",
  },
  {
    step: 2,
    icon: FileSearch,
    title: "Analisa Sistem",
    description: "Menganalisa requirement, membuat system architecture, dan menentukan teknologi yang tepat.",
    duration: "2-3 Hari",
  },
  {
    step: 3,
    icon: Palette,
    title: "Desain UI/UX",
    description: "Membuat mockup desain, wireframe, dan prototype untuk approval sebelum development.",
    duration: "3-5 Hari",
  },
  {
    step: 4,
    icon: Code,
    title: "Development",
    description: "Coding dan implementasi fitur sesuai desain yang telah disetujui dengan best practices.",
    duration: "Sesuai Kompleksitas",
  },
  {
    step: 5,
    icon: TestTube,
    title: "Testing & QA",
    description: "Testing menyeluruh untuk memastikan semua fitur berfungsi dengan baik dan bug-free.",
    duration: "2-3 Hari",
  },
  {
    step: 6,
    icon: Rocket,
    title: "Deployment",
    description: "Deploy ke server production, setup domain, SSL, dan monitoring untuk performa optimal.",
    duration: "1-2 Hari",
  },
];

export default function Workflow() {
  return (
    <section className="py-20 bg-neutral-950 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_110%)] -z-10"></div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="mb-4 border border-orange-500/20 bg-orange-500/10 text-orange-400 hover:bg-orange-500/10">
            Proses Kerja
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Alur Pengerjaan Project
          </h2>
          <p className="text-lg text-neutral-400">
            Proses development yang terstruktur dan transparan untuk memastikan hasil terbaik
          </p>
        </div>

        {/* Workflow Timeline */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Vertical Line - Desktop */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-orange-500/20 via-orange-500 to-orange-500/20"></div>

            {/* Steps */}
            <div className="space-y-12">
              {workflowSteps.map((item, index) => {
                const Icon = item.icon;
                const isEven = index % 2 === 0;

                return (
                  <div
                    key={item.step}
                    className={`relative flex flex-col md:flex-row items-center gap-8 ${
                      isEven ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Content Card */}
                    <div className={`w-full md:w-5/12 ${isEven ? "md:text-right" : "md:text-left"}`}>
                      <div className="bg-neutral-900 rounded-xl p-6 shadow-lg hover:shadow-xl hover:shadow-orange-500/10 transition-shadow duration-300 border-2 border-neutral-800 hover:border-orange-500/30">
                        <div className={`flex items-center gap-3 mb-3 ${isEven ? "md:flex-row-reverse" : ""}`}>
                          <Badge className="bg-orange-600 text-white hover:bg-orange-600 border-0">
                            Step {item.step}
                          </Badge>
                          <span className="text-sm text-neutral-400">{item.duration}</span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">
                          {item.title}
                        </h3>
                        <p className="text-neutral-400 text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Icon Circle - Center */}
                    <div className="relative z-10 flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full shadow-xl shadow-orange-500/30">
                      <Icon className="h-8 w-8 md:h-10 md:w-10 text-white" />
                    </div>

                    {/* Spacer for alignment */}
                    <div className="hidden md:block w-5/12"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-neutral-900 border-2 border-orange-500/30 rounded-xl p-8 max-w-2xl shadow-lg">
            <h3 className="text-xl font-bold text-white mb-3">
              Siap Memulai Project Anda?
            </h3>
            <p className="text-neutral-400 mb-6">
              Konsultasikan kebutuhan Anda dengan tim kami dan dapatkan estimasi timeline yang akurat
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => window.open("https://wa.me/6281234567890?text=Halo, saya ingin konsultasi tentang alur project website", "_blank")}
                className="px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors duration-300 font-medium"
              >
                Konsultasi Gratis
              </button>
              <button
                onClick={() => window.open("https://wa.me/6281234567890?text=Halo, saya ingin tanya tentang estimasi timeline project", "_blank")}
                className="px-6 py-3 bg-transparent border-2 border-neutral-700 text-white rounded-lg hover:bg-neutral-800 transition-colors duration-300 font-medium"
              >
                Tanya Timeline
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
