"use client";

import { motion } from "framer-motion";
import { Award, Shield, Users, Car, CheckCircle } from "lucide-react";

const approvals = [
  "Audi", "BMW", "Ford", "Honda", "Hyundai", "Kia", 
  "Land Rover", "Lexus", "Mercedes-Benz", "Nissan", 
  "Toyota", "Volkswagen", "Volvo", "Peugeot", "Citroen"
];

export default function AboutPage() {
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
            <span className="text-[#ff6b35] font-medium">ABOUT US</span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mt-2">
              Cardiff's Premier Accident Repair Centre
            </h1>
            <p className="text-xl text-white/60 mt-4 max-w-2xl mx-auto">
              With years of experience and multiple manufacturer approvals, we're the trusted 
              choice for accident repair in South Wales.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">
                Your 1st Choice for Quality Repairs
              </h2>
              <div className="space-y-4 text-white/70">
                <p>
                  1st Choice Accident Repair Centre Ltd is the premier vehicle damage repair 
                  centre in South Wales. We pride ourselves on delivering exceptional repair 
                  services with a focus on quality, customer service, and satisfaction.
                </p>
                <p>
                  Our state-of-the-art facility is equipped with the latest technology and 
                  our team of highly skilled technicians have the expertise to repair all 
                  vehicle types, from compact cars to long wheel base commercial vehicles.
                </p>
                <p>
                  We understand that being involved in an accident is stressful. That's why 
                  we strive to make the repair process as smooth and straightforward as 
                  possible, keeping you informed every step of the way and delivering your 
                  vehicle back in pristine condition.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { icon: Award, label: "BS10125:2022 Approved" },
                  { icon: Shield, label: "Insurance Approved" },
                  { icon: Users, label: "Expert Team" },
                  { icon: Car, label: "All Vehicle Types" },
                ].map((item, index) => (
                  <div key={index} className="glass rounded-xl p-4 flex items-center gap-3">
                    <item.icon className="w-8 h-8 text-[#ff6b35]" />
                    <span className="text-white font-medium text-sm">{item.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="glass-strong rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">
                  We Work With Multiple Insurers
                </h3>
                <p className="text-white/70 text-center mb-6">
                  High excess? We can offer an alternative. We handle insurance claims 
                  directly and can arrange courtesy cars to keep you mobile.
                </p>
                <div className="space-y-4">
                  {[
                    "Direct insurance claims handling",
                    "Free courtesy car arrangements",
                    "No upfront payment needed",
                    "Excess claims assistance",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-[#ff6b35] flex-shrink-0" />
                      <span className="text-white/80">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Certifications & Approvals
            </h2>
            <p className="text-white/60">
              We're proud to hold multiple manufacturer approvals and industry certifications
            </p>
          </motion.div>

          <div className="glass rounded-2xl p-8 mb-12">
            <div className="flex items-center justify-center gap-4 mb-4">
              <Award className="w-12 h-12 text-[#ff6b35]" />
              <div className="text-left">
                <h3 className="text-2xl font-bold text-white">BS10125:2022</h3>
                <p className="text-[#ff6b35]">Approved Repairer</p>
              </div>
            </div>
            <p className="text-white/60 text-center">
              We are BS10125:2022 approved, ensuring the highest standards of repair quality 
              and customer service.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-white text-center mb-6">
              Manufacturer Approvals
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {approvals.map((approval, index) => (
                <span
                  key={index}
                  className="px-4 py-2 glass rounded-full text-white/80 text-sm"
                >
                  {approval}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-strong rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-white/60 mb-8 max-w-2xl mx-auto">
              Get a free, no-obligation quote today. Simply fill out our online form 
              or give us a call.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/quote" className="btn-primary inline-flex">
                Get Free Quote
              </a>
              <a href="/contact" className="btn-secondary inline-flex">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}