"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Code2, Palette, Camera, Lightbulb, ArrowRight } from "lucide-react";

const servicesData = [
  {
    id: 1,
    title: "Web Development",
    description: "Full-stack web application development using modern frameworks like Next.js and Laravel. From concept to deployment, creating scalable and performant web solutions tailored to your business needs.",
    icon: Code2,
    features: [
      "Next.js & React Development",
      "Laravel Backend Systems",
      "API Integration & Development",
      "Database Design & Optimization",
    ],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    title: "Frontend & UI/UX Design",
    description: "Crafting beautiful, intuitive, and responsive user interfaces with focus on user experience. Combining aesthetic design principles with functional implementation using modern CSS frameworks and best practices.",
    icon: Palette,
    features: [
      "Responsive Web Design",
      "Tailwind CSS & Styling",
      "UI/UX Prototyping",
      "Interactive Components",
    ],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    id: 3,
    title: "Photobooth & Event Systems",
    description: "Specialized interactive photobooth systems for events, exhibitions, and marketing activations. Complete with real-time photo processing, custom filters, instant sharing capabilities, and cloud-based gallery management.",
    icon: Camera,
    features: [
      "Real-time Photo Capture",
      "Custom Filter & Effects",
      "Instant Social Sharing",
      "Event Gallery Management",
    ],
    gradient: "from-orange-500 to-red-500",
  },
  {
    id: 4,
    title: "Creative & Digital Solutions",
    description: "End-to-end digital solutions combining technology and creativity. From enterprise systems to interactive web experiences, delivering innovative solutions that solve real business challenges and engage users effectively.",
    icon: Lightbulb,
    features: [
      "Custom System Development",
      "Progressive Web Apps (PWA)",
      "Data Visualization",
      "Digital Transformation Consulting",
    ],
    gradient: "from-green-500 to-emerald-500",
  },
];

export default function Services() {
  const handleContactService = (serviceName: string) => {
    const message = encodeURIComponent(`Halo Dafa, saya tertarik dengan layanan ${serviceName}`);
    window.open(`https://wa.me/6282213580380?text=${message}`, "_blank");
  };

  return (
    <section className="py-20 bg-neutral-950">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="mb-4 border border-orange-500/20 bg-orange-500/10 text-orange-400 hover:bg-orange-500/10">
            Services Offered
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What I Can Do For You
          </h2>
          <p className="text-lg text-neutral-400">
            Comprehensive web development and creative technology services to transform your ideas into reality
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {servicesData.map((service) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.id}
                className="group hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300 border-2 border-neutral-800 hover:border-orange-500/30 overflow-hidden bg-neutral-900"
              >
                <CardHeader>
                  {/* Service Icon */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-4 bg-gradient-to-br ${service.gradient} rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <Badge variant="outline" className="text-orange-400 border-orange-500/30 bg-orange-500/10">
                      Professional
                    </Badge>
                  </div>

                  <CardTitle className="text-2xl mb-2 text-white group-hover:text-orange-400 transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed text-neutral-400">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  {/* Features List */}
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-sm text-neutral-300">
                        <svg
                          className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Button
                    className="w-full group/btn bg-orange-600 hover:bg-orange-700"
                    onClick={() => handleContactService(service.title)}
                  >
                    Discuss Your Project
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Value Proposition */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 border-2 border-orange-500/20 rounded-2xl p-8 text-center shadow-xl">
            <h3 className="text-2xl font-bold text-white mb-4">
              Why Work With Me?
            </h3>
            <div className="grid md:grid-cols-3 gap-6 mt-6">
              <div className="p-4">
                <div className="text-3xl font-bold text-orange-500 mb-2">5+</div>
                <p className="text-neutral-400 text-sm">Years of Experience</p>
              </div>
              <div className="p-4">
                <div className="text-3xl font-bold text-orange-500 mb-2">20+</div>
                <p className="text-neutral-400 text-sm">Projects Delivered</p>
              </div>
              <div className="p-4">
                <div className="text-3xl font-bold text-orange-500 mb-2">100%</div>
                <p className="text-neutral-400 text-sm">Client Satisfaction</p>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-neutral-800">
              <p className="text-neutral-300 leading-relaxed">
                <span className="font-semibold text-orange-400">Full-stack expertise</span> with a focus on{" "}
                <span className="text-white">modern frameworks</span>, clean code practices, and delivering
                business value through technology.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
