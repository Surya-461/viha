"use client";

import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Process } from "@/components/Process";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      <Hero />
      
      <About />
      
      <Services />
      
      <WhyChooseUs />
      
      <Process />
      
      {/* Middle CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 -z-10" />
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto space-y-8"
          >
            <h2 className="text-4xl md:text-6xl font-display font-black leading-tight">
              Ready to grow your business online?
              <br />
              <span className="text-primary">Let Viha build your digital presence.</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Whether you need a new website or a result-driven marketing strategy, we're here to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" asChild className="rounded-full h-14 px-10 text-lg shadow-xl shadow-primary/20">
                <Link href="#contact">
                  Contact Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="rounded-full h-14 px-10 text-lg">
                <Link href="#contact">
                  Get Free Quote
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      
      <Contact />
      
      <Footer />
    </main>
  );
}
