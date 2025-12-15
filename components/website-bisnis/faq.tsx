"use client";

import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqData = [
  {
    question: "Apakah bisa request fitur khusus sesuai kebutuhan bisnis saya?",
    answer: "Tentu saja! Kami mengkhususkan diri pada custom development, sehingga semua fitur dapat disesuaikan dengan kebutuhan spesifik bisnis Anda. Kami akan mendiskusikan detail requirement dan mengimplementasikannya sesuai kebutuhan.",
  },
  {
    question: "Apakah harga bisa disesuaikan dengan budget saya?",
    answer: "Ya, harga kami fleksibel dan disesuaikan dengan kompleksitas project serta budget yang Anda miliki. Kami akan memberikan berbagai opsi solusi yang sesuai dengan kebutuhan dan kemampuan finansial Anda tanpa mengorbankan kualitas.",
  },
  {
    question: "Apakah melayani project untuk instansi pemerintah atau perusahaan besar?",
    answer: "Kami melayani berbagai jenis klien, mulai dari startup, UKM, hingga instansi pemerintah dan perusahaan besar. Tim kami berpengalaman menangani project dengan berbagai skala dan kompleksitas, serta dapat menyesuaikan dengan prosedur formal yang diperlukan.",
  },
  {
    question: "Apakah ada support dan maintenance setelah project selesai?",
    answer: "Ya, kami menyediakan layanan support dan maintenance berkelanjutan. Anda akan mendapatkan dukungan teknis untuk bug fixing, update konten, penambahan fitur minor, dan konsultasi teknis setelah website launch. Paket support dapat disesuaikan dengan kebutuhan.",
  },
  {
    question: "Berapa lama waktu pengerjaan website?",
    answer: "Timeline pengerjaan tergantung pada kompleksitas dan jumlah fitur yang dibutuhkan. Website company profile sederhana bisa selesai dalam 2-3 minggu, sedangkan project yang lebih kompleks seperti Super App bisa memakan waktu 2-6 bulan. Kami akan memberikan estimasi timeline yang jelas di awal project.",
  },
  {
    question: "Apakah website yang dibuat SEO friendly?",
    answer: "Semua website yang kami develop sudah dioptimasi untuk SEO dengan menggunakan best practices seperti struktur HTML semantik, meta tags yang tepat, fast loading speed, mobile responsive, dan clean URL structure. Kami juga bisa membantu setup Google Analytics dan Search Console.",
  },
  {
    question: "Apakah saya mendapatkan akses penuh ke source code?",
    answer: "Ya, setelah project selesai dan pembayaran lunas, Anda akan mendapatkan full access ke source code dan dokumentasi lengkap. Kami juga akan memberikan training jika diperlukan agar tim Anda bisa melakukan maintenance sendiri di masa depan.",
  },
  {
    question: "Bagaimana sistem pembayaran untuk project custom?",
    answer: "Sistem pembayaran biasanya dibagi menjadi beberapa termin sesuai milestone project: DP awal (30-40%), pembayaran tahap development (30-40%), dan pelunasan saat sebelum deployment (20-30%). Detail pembayaran akan didiskusikan dan disesuaikan dengan kesepakatan bersama.",
  },
];

export default function FAQ() {
  return (
    <section className="py-20 bg-neutral-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="mb-4 border border-orange-500/20 bg-orange-500/10 text-orange-400 hover:bg-orange-500/10">
            <HelpCircle className="mr-1 h-3 w-3" />
            FAQ
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-lg text-neutral-400">
            Temukan jawaban untuk pertanyaan umum seputar layanan pembuatan website kami
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-neutral-950 border-2 border-neutral-800 rounded-xl px-6 hover:border-orange-500/30 transition-colors duration-300"
              >
                <AccordionTrigger className="text-left hover:no-underline py-5">
                  <span className="font-semibold text-white pr-4">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-neutral-400 leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-neutral-950 border-2 border-orange-500/30 rounded-xl p-8 max-w-2xl">
            <h3 className="text-xl font-bold text-white mb-3">
              Masih Ada Pertanyaan Lain?
            </h3>
            <p className="text-neutral-400 mb-6">
              Tim kami siap menjawab semua pertanyaan Anda dan memberikan konsultasi gratis untuk project Anda
            </p>
            <button
              onClick={() => window.open("https://wa.me/6281234567890?text=Halo, saya memiliki pertanyaan tentang jasa pembuatan website", "_blank")}
              className="px-8 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors duration-300 font-medium shadow-lg hover:shadow-xl hover:shadow-orange-500/20"
            >
              Hubungi Kami Sekarang
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
