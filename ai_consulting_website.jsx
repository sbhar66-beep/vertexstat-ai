import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Website() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="text-center py-20 px-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          AI Solutions for Healthcare, IT, Banking & PMO Automation
        </motion.h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
          We help enterprises move from AI ideas to production—automating operations,
          improving workforce productivity, and delivering measurable business outcomes.
        </p>
        <div className="flex justify-center gap-4">
          <Button className="rounded-2xl px-6 py-3">Book Free AI Assessment</Button>
          <Button variant="outline" className="rounded-2xl px-6 py-3">
            Explore Use Cases
          </Button>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center mb-10">Industries We Serve</h2>
        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            "Healthcare & Medical Devices",
            "IT Operations & SRE",
            "Banking & Financial Services",
            "Insurance & Risk Management",
          ].map((item, i) => (
            <Card key={i} className="rounded-2xl">
              <CardContent className="p-6 text-center font-medium">
                {item}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-6 grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {[
          {
            title: "AI Strategy & Roadmap",
            desc: "Identify high-value use cases, assess systems, and define execution roadmap.",
          },
          {
            title: "Rapid AI Pilots",
            desc: "Deliver working solutions in 6–8 weeks with clear ROI validation.",
          },
          {
            title: "Enterprise AI Delivery",
            desc: "Scale AI across systems with governance, MLOps, and integration.",
          },
        ].map((item, i) => (
          <Card key={i} className="rounded-2xl shadow-sm">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Key Use Cases */}
      <section className="py-16 px-6 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-10">High-Impact Use Cases</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            "PMO automation (status reports, dashboards, RAID logs)",
            "AI copilots for IT operations & incident management",
            "Healthcare workflow automation (EHR, PACS integration)",
            "Banking document processing & compliance automation",
            "Insurance claims automation & fraud detection",
            "AI-driven test automation & defect reduction",
          ].map((text, i) => (
            <Card key={i} className="rounded-2xl">
              <CardContent className="p-6">{text}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Us */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Why Work With Us</h2>
        <p className="max-w-3xl mx-auto text-gray-600">
          We bring deep expertise in program management, enterprise systems, and AI delivery.
          Unlike typical consultants, we focus on execution—ensuring solutions are deployed,
          adopted, and delivering measurable ROI.
        </p>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center bg-gray-900 text-white">
        <h2 className="text-3xl font-bold mb-4">
          Turn AI into Real Business Impact
        </h2>
        <p className="mb-6">
          Get a 2-week AI assessment with prioritized use cases and ROI estimates.
        </p>
        <Button className="rounded-2xl px-6 py-3 bg-white text-black">
          Book Your Free Consultation
        </Button>
      </section>
    </div>
  );
}
