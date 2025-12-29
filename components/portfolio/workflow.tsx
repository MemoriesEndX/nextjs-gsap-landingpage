"use client";

import { Badge } from "@/components/ui/badge";
import { MessageSquare, Palette, Code2, TestTube2, Rocket, HeadphonesIcon } from "lucide-react";

const workflowSteps = [
  {
    step: 1,
    icon: MessageSquare,
    title: "Requirement & Research",
    description: "In-depth consultation to understand your business goals, target audience, and project requirements. Analyzing competitors and market trends to define clear project scope and technical specifications.",
    duration: "1-3 Days",
    deliverables: ["Project Brief", "Technical Requirements", "Timeline Estimate"],
  },
  {
    step: 2,
    icon: Palette,
    title: "UI/UX Design",
    description: "Creating wireframes, mockups, and interactive prototypes that align with your brand identity. Focusing on user experience, accessibility, and modern design principles to ensure intuitive navigation.",
    duration: "3-7 Days",
    deliverables: ["Wireframes", "Visual Mockups", "Design System"],
  },
  {
    step: 3,
    icon: Code2,
    title: "Development",
    description: "Building robust, scalable applications using modern frameworks and best coding practices. Implementing features incrementally with version control, ensuring code quality and maintainability throughout the process.",
    duration: "Based on Scope",
    deliverables: ["Working Application", "Source Code", "Documentation"],
  },
  {
    step: 4,
    icon: TestTube2,
    title: "Testing & Optimization",
    description: "Comprehensive quality assurance including functional testing, cross-browser compatibility, performance optimization, and security checks. Ensuring the application works flawlessly across all devices and scenarios.",
    duration: "2-4 Days",
    deliverables: ["Test Reports", "Bug Fixes", "Performance Metrics"],
  },
  {
    step: 5,
    icon: Rocket,
    title: "Deployment & Launch",
    description: "Deploying to production servers with proper configuration, SSL setup, and performance monitoring. Ensuring smooth launch with minimal downtime and proper backup systems in place.",
    duration: "1-2 Days",
    deliverables: ["Live Website", "Server Setup", "Domain & SSL"],
  },
  {
    step: 6,
    icon: HeadphonesIcon,
    title: "Maintenance & Support",
    description: "Ongoing technical support, bug fixes, and feature updates to keep your application running smoothly. Regular backups, security patches, and performance monitoring for long-term stability.",
    duration: "Continuous",
    deliverables: ["Support Plan", "Updates", "Monitoring"],
  },
];

export default function Workflow() {
  return (
    <section className="py-20 bg-neutral-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_110%)] -z-10"></div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="mb-4 border border-orange-500/20 bg-orange-500/10 text-orange-400 hover:bg-orange-500/10">
            Development Process
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            How I Work on Projects
          </h2>
          <p className="text-lg text-neutral-400">
            A structured, transparent workflow ensuring quality delivery from concept to deployment
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
                      <div className="bg-neutral-950 rounded-xl p-6 shadow-lg hover:shadow-2xl hover:shadow-orange-500/10 transition-shadow duration-300 border-2 border-neutral-800 hover:border-orange-500/30">
                        <div className={`flex items-center gap-3 mb-3 ${isEven ? "md:flex-row-reverse" : ""}`}>
                          <Badge className="bg-orange-600 text-white hover:bg-orange-600 border-0">
                            Phase {item.step}
                          </Badge>
                          <span className="text-sm text-neutral-400">{item.duration}</span>
                        </div>
                        
                        <h3 className="text-xl font-bold text-white mb-3">
                          {item.title}
                        </h3>
                        
                        <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                          {item.description}
                        </p>

                        {/* Deliverables */}
                        <div className={`mt-4 pt-4 border-t border-neutral-800 ${isEven ? "md:text-right" : "md:text-left"}`}>
                          <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">
                            Deliverables
                          </p>
                          <div className={`flex flex-wrap gap-2 ${isEven ? "md:justify-end" : "md:justify-start"}`}>
                            {item.deliverables.map((deliverable, idx) => (
                              <span
                                key={idx}
                                className="text-xs px-2 py-1 bg-orange-500/10 text-orange-400 rounded border border-orange-500/20"
                              >
                                {deliverable}
                              </span>
                            ))}
                          </div>
                        </div>
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
          <div className="inline-block bg-neutral-950 border-2 border-orange-500/30 rounded-2xl p-8 max-w-3xl shadow-lg">
            <h3 className="text-2xl font-bold text-white mb-3">
              Ready to Start Your Project?
            </h3>
            <p className="text-neutral-400 mb-6 leading-relaxed">
              Let&apos;s discuss your requirements and I&apos;ll provide a detailed project timeline and approach tailored to your needs
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() =>
                  window.open(
                    "https://wa.me/6282213580380?text=Halo Dafa, saya ingin konsultasi tentang project development",
                    "_blank"
                  )
                }
                className="px-8 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors duration-300 font-medium shadow-lg hover:shadow-xl"
              >
                Start Consultation
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://wa.me/6282213580380?text=Halo Dafa, saya ingin mengetahui estimasi timeline untuk project saya",
                    "_blank"
                  )
                }
                className="px-8 py-3 bg-transparent border-2 border-neutral-700 text-white rounded-lg hover:bg-neutral-800 transition-colors duration-300 font-medium"
              >
                Get Timeline Estimate
              </button>
            </div>
          </div>
        </div>

        {/* Process Benefits */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-6 text-center hover:border-orange-500/30 transition-colors">
              <div className="text-2xl font-bold text-orange-500 mb-2">Transparent</div>
              <p className="text-sm text-neutral-400">Clear communication and progress updates at every stage</p>
            </div>
            <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-6 text-center hover:border-orange-500/30 transition-colors">
              <div className="text-2xl font-bold text-orange-500 mb-2">Agile</div>
              <p className="text-sm text-neutral-400">Flexible approach adapting to changing requirements</p>
            </div>
            <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-6 text-center hover:border-orange-500/30 transition-colors">
              <div className="text-2xl font-bold text-orange-500 mb-2">Quality-First</div>
              <p className="text-sm text-neutral-400">Best practices, clean code, and thorough testing</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
