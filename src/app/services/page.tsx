"use client";

import { motion } from "framer-motion";
import { 
  Car, Wrench, Shield, Gauge, Zap, Snowflake, 
  CheckCircle, Hammer, PaintBucket, Thermometer, 
  Battery, Clock
} from "lucide-react";

const services = [
  {
    icon: Car,
    title: "Accident Repair",
    description: "From minor bumps to major collisions, our expert team repairs all vehicle types from mini to long wheel base transit. We handle every aspect of accident damage repair.",
    features: ["All vehicle types", "Insurance work", "Quality guaranteed"]
  },
  {
    icon: Wrench,
    title: "Alloy Wheel Refurbishment",
    description: "Diamond cut and standard finish alloy wheels, re-furbished on site. We restore your wheels to factory finish.",
    features: ["Diamond cut finish", "Standard finish", "On-site service"]
  },
  {
    icon: PaintBucket,
    title: "Paintwork",
    description: "From stonechip repairs to full resprays, we do it all. Three quality paint systems available to match your vehicle perfectly.",
    features: ["Stonechip to respray", "Three paint systems", "Colour matching"]
  },
  {
    icon: Hammer,
    title: "Jig Alignment",
    description: "Professional jig alignment services to ensure your vehicle's structural integrity is restored to manufacturer specifications.",
    features: ["Structural repairs", "Manufacturer specs", "Expert technicians"]
  },
  {
    icon: Gauge,
    title: "Wheel Alignment",
    description: "Laser four wheel alignment carried out on site. Ensure proper tire wear and handling after your repair.",
    features: ["Laser technology", "On-site service", "Improved safety"]
  },
  {
    icon: Thermometer,
    title: "Air Conditioning",
    description: "Air conditioning issues? We can diagnose and repair on site. Stay cool with our expert AC services.",
    features: ["Diagnostic service", "Repair & refill", "On-site"]
  },
  {
    icon: Zap,
    title: "ADAS Calibration",
    description: "Advanced Driver Assistance Systems (ADAS) re-calibrated. Ensure your safety systems work correctly after repairs.",
    features: ["Radar calibration", "Camera alignment", "Safety verified"]
  },
  {
    icon: Battery,
    title: "EV Vehicle Repairs",
    description: "Specialist electric vehicle repair services. We have the expertise to work on modern EV vehicles safely.",
    features: ["High voltage certified", "All EV makes", "Safe procedures"]
  },
  {
    icon: Shield,
    title: "Insurance Assessments",
    description: "Full insurance assessments available. We work with all major insurers and can handle your claim directly.",
    features: ["Insurance approved", "Direct insurer contact", "Free assessments"]
  },
  {
    icon: Clock,
    title: "Online Estimates",
    description: "Use our online estimating system - upload photos of damage and get a quote without leaving home.",
    features: ["Quick turnaround", "Photo upload", "No obligation"]
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Header */}
      <section className="py-16 bg-gradient-to-b from-[#111111] to-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <span className="text-[#ff6b35] font-medium">OUR SERVICES</span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mt-2">
              Complete Repair Solutions
            </h1>
            <p className="text-xl text-white/60 mt-4 max-w-2xl mx-auto">
              From alloy wheel refurbishment to ADAS calibration, we offer a full range 
              of vehicle repair services to get you back on the road.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="glass card-hover rounded-2xl p-8"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-xl bg-[#ff6b35]/20 flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-8 h-8 text-[#ff6b35]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-3">{service.title}</h3>
                    <p className="text-white/60 mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-white/70">
                          <CheckCircle className="w-4 h-4 text-[#ff6b35] flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-strong rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Need a Free Quote?
            </h2>
            <p className="text-white/60 mb-8 max-w-2xl mx-auto">
              Get in touch today for a free, no-obligation quote. We work with all major insurers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/quote" className="btn-primary inline-flex items-center justify-center gap-2">
                Get Free Quote
              </a>
              <a href="/contact" className="btn-secondary inline-flex items-center justify-center gap-2">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}