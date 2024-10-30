"use client";

import { Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HeroSection() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="pt-20 bg-gradient-to-r from-[#21295c] to-[#1b3b6f] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Transform Your Business with Advanced Technology
            </h1>
            <p className="text-lg mb-8 text-gray-200">
              We specialize in enterprise-grade software solutions, AI integration, and infrastructure optimization
            </p>
            <Button 
              className="bg-[#1c7293] hover:bg-[#065a82] text-white text-lg px-8 py-6"
              onClick={scrollToContact}
            >
              <Rocket className="mr-2 h-5 w-5" /> Get Started
            </Button>
          </div>
          <div className="hidden md:block">
            <Image
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3"
              alt="Technology Infrastructure"
              width={600}
              height={400}
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}