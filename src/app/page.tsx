"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  Car, 
  Shield, 
  Clock, 
  Award, 
  Wrench, 
  Gauge, 
  Zap,
  Snowflake,
  CheckCircle,
  Phone,
  ArrowRight
} from "lucide-react";

const services = [
  { icon: Car, title: "Accident Repair", desc: "From minor bumps to major collisions, we repair all vehicle types" },
  { icon: Wrench, title: "Alloy Wheels", desc: "Diamond cut & standard finish refurbishment, done on site" },
  { icon: Shield, title: "Paintwork", desc: "Stonechip repairs to full resprays, three quality paint systems" },
  { icon: Gauge, title: "Wheel Alignment", desc: "Laser four wheel alignment carried out on site" },
  { icon: Zap, title: "ADAS Calibration", desc: "Advanced driver assistance systems re-calibrated" },
  { icon: Snowflake, title: "EV Repairs", desc: "Specialist electric vehicle repair services" },
];

const features = [
  "Multiple insurers supported",
  "High excess? We can help",
  "Free no obligation quotes",
  "Online estimating system",
  "Manufacturer approvals",
  "Quick turnaround",
  "Courtesy cars available",
  "BS10125:2022 approved",
];

const testimonials = [
  {
    quote: "Incredible service in both customer and repair. The customer service team arranged for my car to be dropped off at Enterprise where I was picking up my replacement car, then picked up my car the following morning. The repair team had the car fixed within 2 working days when it was estimated a week.",
    author: "Satisfied Customer",
  },
  {
    quote: "Having picked up my MG from first choice ARC after 7 days I have to admit that the work is 100% and the ladies on reception again 100% they were kind courteous and understanding. All concerned are a credit to the company.",
    author: "Danielle's Father",
  },
  {
    quote: "Danielle was incredibly helpful with my elderly father. She was patient, attentive and very understanding. She also made sure he was comfortable with his courtesy car before he drove it away. She is a credit to the organisation.",
    author: "Happy Customer",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a2e] to-[#0a0a0a]">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#ff6b35] rounded-full filter blur-[150px] animate-pulse-glow" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#1e3a5f] rounded-full filter blur-[150px] animate-pulse-glow" style={{ animationDelay: '2s' }} />
          </div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-[#ff6b35]/20 text-[#ff6b35] text-sm font-medium mb-6">
              Cardiff's Premier Accident Repair Specialists
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Your 1st CHOICE for
              <span className="block gradient-text">ACCIDENT REPAIR</span>
              in South Wales
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10">
              The premier vehicle damage repair centre in South Wales. Expert repairs, 
              insurance work, and free quotes. Get your car back on the road with 1st Choice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote" className="btn-primary inline-flex items-center justify-center gap-2 text-lg px-8 py-4">
                Get Free Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/services" className="btn-secondary inline-flex items-center justify-center gap-2 text-lg px-8 py-4">
                Our Services
              </Link>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { number: "15+", label: "Years Experience" },
              { number: "5000+", label: "Vehicles Repaired" },
              { number: "100%", label: "Quality Guaranteed" },
              { number: "50+", label: "Manufacturer Approvals" },
            ].map((stat, index) => (
              <div key={index} className="glass rounded-xl p-6">
                <div className="text-3xl md:text-4xl font-bold text-[#ff6b35] mb-2">{stat.number}</div>
                <div className="text-white/60 text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
            <motion.div 
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1.5 h-1.5 bg-[#ff6b35] rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[#ff6b35] font-medium">OUR SERVICES</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-2">
              Complete Accident Repair Solutions
            </h2>
            <p className="text-white/60 mt-4 max-w-2xl mx-auto">
              From alloy wheel refurbishment to ADAS calibration, we offer a full range of vehicle repair services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass card-hover rounded-2xl p-8 group"
              >
                <div className="w-14 h-14 rounded-xl bg-[#ff6b35]/20 flex items-center justify-center mb-6 group-hover:bg-[#ff6b35] transition-colors">
                  <service.icon className="w-7 h-7 text-[#ff6b35] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-white/60">{service.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services" className="btn-secondary inline-flex items-center gap-2">
              View All Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[#ff6b35] font-medium">WHY CHOOSE US</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-6">
                The 1st Choice for Accident Repair in South Wales
              </h2>
              <p className="text-white/60 text-lg mb-8">
                We understand how stressful accident damage can be. That's why we make the repair 
                process as smooth as possible, keeping you informed and delivering quality results 
                every time.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#ff6b35] flex-shrink-0" />
                    <span className="text-white/80">{feature}</span>
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
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full bg-[#ff6b35] mx-auto mb-6 flex items-center justify-center">
                    <Award className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">BS10125:2022</h3>
                  <p className="text-white/60">Approved Repairer</p>
                </div>
                <div className="mt-8 pt-8 border-t border-white/10">
                  <div className="text-center">
                    <p className="text-white/80 mb-4">Need a free quote?</p>
                    <Link href="/quote" className="btn-primary inline-flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[#ff6b35] font-medium">TESTIMONIALS</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-2">
              What Our Customers Say
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass card-hover rounded-2xl p-8"
              >
                <div className="text-[#ff6b35] text-4xl mb-4">"</div>
                <p className="text-white/80 leading-relaxed mb-6">{testimonial.quote}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#1e3a5f] flex items-center justify-center">
                    <span className="text-white font-medium">{testimonial.author[0]}</span>
                  </div>
                  <span className="text-white font-medium">{testimonial.author}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-[#1e3a5f] to-[#0a0a0a] relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#ff6b35] rounded-full filter blur-[150px]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Your Car Fixed?
            </h2>
            <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
              Get a free, no-obligation quote today. Simply fill out our online form 
              or give us a call.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote" className="btn-primary inline-flex items-center justify-center gap-2 text-lg px-8 py-4">
                Get Free Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a href="tel:029XXXXXXXX" className="btn-secondary inline-flex items-center justify-center gap-2 text-lg px-8 py-4">
                <Phone className="w-5 h-5" />
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}